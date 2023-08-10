import { ethers } from "hardhat";
import { ContractFactory, id, parseEther } from "ethers";
import {
  TimelockController,
  MyGovernor,
  ExternalContract,
  VoteToken
} from "../typechain-types";
const { mine } = require("@nomicfoundation/hardhat-network-helpers");

async function main() {
  const [account1] = await ethers.getSigners();
  // Deploy necessary contracts
  const VotesFactory: ContractFactory = await ethers.getContractFactory(
    "VoteToken"
  );
  const voteToken = (await VotesFactory.deploy()) as VoteToken;

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
  const timelockController = (await TimelockControllerFactory.deploy(
    1,
    proposers,
    executors,
    admin
  )) as TimelockController;

  const MyGovernorFactory: ContractFactory = await ethers.getContractFactory(
    "MyGovernor"
  );
  const myGovernor = (await MyGovernorFactory.deploy(
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
  const externalContract =
    (await ExternalContractFactory.deploy()) as ExternalContract;

  await myGovernor.waitForDeployment();
  await timelockController.waitForDeployment();
  await voteToken.waitForDeployment();
  await externalContract.waitForDeployment();

  console.log("MyGovernor deployed to:", await myGovernor.getAddress());
  console.log(
    "TimelockController deployed to:",
    await timelockController.getAddress()
  );
  console.log("VoteToken deployed to:", await voteToken.getAddress());
  console.log(
    "ExternalContract deployed to:",
    await externalContract.getAddress()
  );

  console.log("Finished deploying contracts!");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
