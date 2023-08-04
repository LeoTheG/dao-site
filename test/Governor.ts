import { ethers } from "hardhat";
import { ContractFactory } from "ethers";
import {
  MyToken,
  TimelockController,
  MyGovernor,
  ExternalContract,
  VoteToken
} from "../typechain-types";

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
    // Deploy necessary contracts
    const VotesFactory: ContractFactory = await ethers.getContractFactory(
      "VoteToken"
    );
    voteToken = (await VotesFactory.deploy()) as MyToken;

    const TimelockControllerFactory: ContractFactory =
      await ethers.getContractFactory("MyTimelockController");
    timelockController = (await TimelockControllerFactory.deploy(
      1,
      [(await ethers.provider.getSigner(0)).getAddress()],
      [(await ethers.provider.getSigner(0)).getAddress()]
    )) as TimelockController;

    const MyGovernorFactory: ContractFactory = await ethers.getContractFactory(
      "MyGovernor"
    );
    myGovernor = (await MyGovernorFactory.deploy(
      await voteToken.getAddress(),
      await timelockController.getAddress()
    )) as MyGovernor;

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
});
