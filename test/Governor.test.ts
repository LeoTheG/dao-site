import { ethers } from "hardhat";
import { ContractFactory, id, parseEther } from "ethers";
import {
  TimelockController,
  MyGovernor,
  ExternalContract,
  VoteToken
} from "../typechain-types";
const { mine } = require("@nomicfoundation/hardhat-network-helpers");

import { expect } from "chai";

describe("MyGovernor", function () {
  let myGovernor: MyGovernor;
  let timelockController: TimelockController;
  let voteToken: VoteToken;
  let externalContract: ExternalContract;

  let governorContractAddress: string;
  let timelockControllerContractAddress: string;
  let votesContractAddress: string;
  let externalContractAddress: string;

  beforeEach(async function () {
    const [account1] = await ethers.getSigners();
    // Deploy necessary contracts
    const VotesFactory: ContractFactory = await ethers.getContractFactory(
      "VoteToken"
    );
    voteToken = (await VotesFactory.deploy()) as VoteToken;

    /*
      TimelockController uses an AccessControl setup that we need to understand 
      in order to set up roles.

      The Proposer role is in charge of queueing operations: this is the role 
      the Governor instance should be granted, and it should likely be the only proposer in the system.

      The Executor role is in charge of executing already available operations: 
      we can assign this role to the special zero address to allow anyone to execute 
      (if operations can be particularly time sensitive, the Governor should be made Executor instead).

      Lastly, there is the Admin role, which can grant and revoke the two 
      previous roles: this is a very sensitive role that will be granted 
      automatically to the timelock itself, and optionally to a second account, 
      which can be used for ease of setup but should promptly renounce the role.
    */
    const proposers: [] = [];
    const executors = [ethers.ZeroAddress];

    const admin = account1;
    const TimelockControllerFactory: ContractFactory =
      await ethers.getContractFactory("MyTimelockController");
    timelockController = (await TimelockControllerFactory.deploy(
      1,
      proposers,
      executors,
      admin
    )) as TimelockController;

    const MyGovernorFactory: ContractFactory = await ethers.getContractFactory(
      "MyGovernor"
    );
    myGovernor = (await MyGovernorFactory.deploy(
      await voteToken.getAddress(),
      await timelockController.getAddress()
    )) as MyGovernor;

    await timelockController.grantRole(
      id("PROPOSER_ROLE"),
      await myGovernor.getAddress()
    );

    // renounce admin role
    await timelockController.renounceRole(
      id("TIMELOCK_ADMIN_ROLE"),
      await account1.getAddress()
    );

    const ExternalContractFactory: ContractFactory =
      await ethers.getContractFactory("ExternalContract");
    externalContract =
      (await ExternalContractFactory.deploy()) as ExternalContract;

    await myGovernor.waitForDeployment();
    await timelockController.waitForDeployment();
    await voteToken.waitForDeployment();
    await externalContract.waitForDeployment();
  });

  it("should deploy the contracts correctly", async function () {
    governorContractAddress = await myGovernor.getAddress();
    timelockControllerContractAddress = await timelockController.getAddress();
    votesContractAddress = await voteToken.getAddress();
    externalContractAddress = await externalContract.getAddress();

    expect(governorContractAddress).to.properAddress;
    expect(timelockControllerContractAddress).to.properAddress;
    expect(votesContractAddress).to.properAddress;
    expect(externalContractAddress).to.properAddress;
  });

  it("should propose correctly", async function () {
    const targets = [externalContractAddress];
    const values = [0];
    const calldatas = [
      externalContract.interface.encodeFunctionData("publicCall", [
        "hello world"
      ])
    ];
    const description = "test proposal";

    const proposeResponse = await myGovernor[
      "propose(address[],uint256[],bytes[],string)"
    ](targets, values, calldatas, description);

    const proposalCreatedFilter = myGovernor.filters.ProposalCreated();
    const proposalCreatedLogs = await myGovernor.queryFilter(
      proposalCreatedFilter
    );
    const proposalDescriptions = proposalCreatedLogs.map(
      (log) => log.args.description
    );

    expect(proposalDescriptions).to.include(description);
  });

  it("should vote correctly", async function () {
    const targets = [externalContractAddress];
    const values = [0];
    const calldatas = [
      externalContract.interface.encodeFunctionData("publicCall", [
        "hello world"
      ])
    ];
    const description = "test proposal";

    const proposeResponse = await myGovernor[
      "propose(address[],uint256[],bytes[],string)"
    ](targets, values, calldatas, description);

    // advance blocks to allow voting
    await mine(7200);

    const proposalCreatedFilter = myGovernor.filters.ProposalCreated();
    const proposalCreatedLogs = await myGovernor.queryFilter(
      proposalCreatedFilter
    );
    const proposalIds = proposalCreatedLogs.map((log) => log.args.proposalId);

    const proposalId = proposalIds[0];
    const support = 1; // Support the proposal
    const voteResponse = await myGovernor.castVote(proposalId, support);

    const voteCastFilter = myGovernor.filters.VoteCast();
    const voteCastLogs = await myGovernor.queryFilter(voteCastFilter);
    const voteCastIds = voteCastLogs.map((log) => log.args.proposalId);

    expect(voteCastIds).to.include(proposalIds[0]);
  });

  it("should queue correctly", async function () {
    // mint tokens for first 3 accounts
    const [account1, account2, account3] = await ethers.getSigners();

    await voteToken.mint(account1.getAddress(), parseEther("10"));
    await voteToken.mint(account2.getAddress(), parseEther("10"));
    await voteToken.mint(account3.getAddress(), parseEther("10"));

    // MUST delegate votes, even if to yourself, before casting votes
    // delegate votes
    await voteToken.connect(account1).delegate(account1.getAddress());
    await voteToken.connect(account2).delegate(account2.getAddress());
    await voteToken.connect(account3).delegate(account3.getAddress());

    expect(await voteToken.balanceOf(account1.getAddress())).to.eq(
      parseEther("10")
    );

    const targets = [externalContractAddress];
    const values = [0];
    const calldatas = [
      externalContract.interface.encodeFunctionData("publicCall", [
        "hello world"
      ])
    ];
    const description = "test proposal";

    const proposeResponse = await myGovernor[
      "propose(address[],uint256[],bytes[],string)"
    ](targets, values, calldatas, description);

    const proposalCreatedFilter = myGovernor.filters.ProposalCreated();
    const proposalCreatedLogs = await myGovernor.queryFilter(
      proposalCreatedFilter
    );
    const proposalIds = proposalCreatedLogs.map((log) => log.args.proposalId);

    const proposalId = proposalIds[0];
    let proposalState = await myGovernor.state(proposalId);

    const STATE_PENDING = 0;
    expect(proposalState).to.eq(STATE_PENDING);

    // advance blocks to allow voting
    await mine(7201);

    const STATE_ACTIVE = 1;
    proposalState = await myGovernor.state(proposalId);
    expect(proposalState).to.eq(STATE_ACTIVE);

    const SUPPORT = 1;
    for (const account of [account1, account2, account3]) {
      await myGovernor.connect(account).castVote(proposalId, SUPPORT);
    }

    const quorumResponse = await myGovernor.quorumVotes();

    // const hasVotedAccount1 = await myGovernor.hasVoted(proposalId, account1);

    // check proposal threshold
    // const proposalThresholdResponse = await myGovernor.proposalThreshold();

    // console.log(
    //   "proposalThresholdResponse: ",
    //   proposalThresholdResponse.toString()
    // );

    const voteCastFilter = myGovernor.filters.VoteCast();
    const voteCastLogs = await myGovernor.queryFilter(voteCastFilter);

    const totalVoteTokensCasted = voteCastLogs.reduce(
      (acc, log) => acc + parseInt(log.args.weight.toString()),
      0
    );

    console.log("totalVoteTokensCasted: ", totalVoteTokensCasted);
    console.log("quorumResponse: ", quorumResponse.toString());

    // advance blocks to finish voting period
    await mine(50400);

    const STATE_SUCCEEDED = 4;
    proposalState = await myGovernor.state(proposalId);
    expect(proposalState).to.eq(STATE_SUCCEEDED);

    // grant queueing permission to account1
    console.log("account1 address is ", await account1.getAddress());

    console.log("queueing proposal");
    const queueResponse = await myGovernor
      .connect(account1)
      ["queue(uint256)"](proposalId);

    const STATE_QUEUED = 5;
    proposalState = await myGovernor.state(proposalId);
    expect(proposalState).to.eq(STATE_QUEUED);

    //execute proposal
    console.log("executing proposal");
    const executeResponse = await myGovernor
      .connect(account1)
      ["execute(uint256)"](proposalId);
  });
});

// reference
// enum ProposalState {
//     Pending,
//     Active,
//     Canceled,
//     Defeated,
//     Succeeded,
//     Queued,
//     Expired,
//     Executed
// }
