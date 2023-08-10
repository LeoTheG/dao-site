/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "AccessControlEnumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControlEnumerable__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "IAccessControlEnumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControlEnumerable__factory>;
    getContractFactory(
      name: "GovernorCompatibilityBravo",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorCompatibilityBravo__factory>;
    getContractFactory(
      name: "IGovernorCompatibilityBravo",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernorCompatibilityBravo__factory>;
    getContractFactory(
      name: "GovernorTimelockControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorTimelockControl__factory>;
    getContractFactory(
      name: "GovernorVotes",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorVotes__factory>;
    getContractFactory(
      name: "GovernorVotesQuorumFraction",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorVotesQuorumFraction__factory>;
    getContractFactory(
      name: "IGovernorTimelock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernorTimelock__factory>;
    getContractFactory(
      name: "Governor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Governor__factory>;
    getContractFactory(
      name: "IGovernor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernor__factory>;
    getContractFactory(
      name: "TimelockController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimelockController__factory>;
    getContractFactory(
      name: "IVotes",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVotes__factory>;
    getContractFactory(
      name: "IERC5267",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC5267__factory>;
    getContractFactory(
      name: "IERC5805",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC5805__factory>;
    getContractFactory(
      name: "IERC6372",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC6372__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Burnable__factory>;
    getContractFactory(
      name: "ERC20Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Pausable__factory>;
    getContractFactory(
      name: "ERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Permit__factory>;
    getContractFactory(
      name: "ERC20Votes",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Votes__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC20PresetMinterPauser",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20PresetMinterPauser__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "EIP712",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EIP712__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "ShortStrings",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShortStrings__factory>;
    getContractFactory(
      name: "DoubleEndedQueue",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DoubleEndedQueue__factory>;
    getContractFactory(
      name: "ExternalContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ExternalContract__factory>;
    getContractFactory(
      name: "MyGovernor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MyGovernor__factory>;
    getContractFactory(
      name: "MyTimelockController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MyTimelockController__factory>;
    getContractFactory(
      name: "VoteToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VoteToken__factory>;

    getContractAt(
      name: "AccessControl",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "AccessControlEnumerable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControlEnumerable>;
    getContractAt(
      name: "IAccessControl",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "IAccessControlEnumerable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControlEnumerable>;
    getContractAt(
      name: "GovernorCompatibilityBravo",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorCompatibilityBravo>;
    getContractAt(
      name: "IGovernorCompatibilityBravo",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IGovernorCompatibilityBravo>;
    getContractAt(
      name: "GovernorTimelockControl",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorTimelockControl>;
    getContractAt(
      name: "GovernorVotes",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorVotes>;
    getContractAt(
      name: "GovernorVotesQuorumFraction",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorVotesQuorumFraction>;
    getContractAt(
      name: "IGovernorTimelock",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IGovernorTimelock>;
    getContractAt(
      name: "Governor",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Governor>;
    getContractAt(
      name: "IGovernor",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IGovernor>;
    getContractAt(
      name: "TimelockController",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.TimelockController>;
    getContractAt(
      name: "IVotes",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IVotes>;
    getContractAt(
      name: "IERC5267",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC5267>;
    getContractAt(
      name: "IERC5805",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC5805>;
    getContractAt(
      name: "IERC6372",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC6372>;
    getContractAt(
      name: "Pausable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "ERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Burnable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Burnable>;
    getContractAt(
      name: "ERC20Pausable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Pausable>;
    getContractAt(
      name: "ERC20Permit",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Permit>;
    getContractAt(
      name: "ERC20Votes",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Votes>;
    getContractAt(
      name: "IERC20Metadata",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20Permit",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC20PresetMinterPauser",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20PresetMinterPauser>;
    getContractAt(
      name: "IERC721Receiver",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "EIP712",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.EIP712>;
    getContractAt(
      name: "ERC165",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "ShortStrings",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ShortStrings>;
    getContractAt(
      name: "DoubleEndedQueue",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.DoubleEndedQueue>;
    getContractAt(
      name: "ExternalContract",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ExternalContract>;
    getContractAt(
      name: "MyGovernor",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MyGovernor>;
    getContractAt(
      name: "MyTimelockController",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MyTimelockController>;
    getContractAt(
      name: "VoteToken",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.VoteToken>;

    deployContract(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AccessControl>;
    deployContract(
      name: "AccessControlEnumerable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AccessControlEnumerable>;
    deployContract(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IAccessControl>;
    deployContract(
      name: "IAccessControlEnumerable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IAccessControlEnumerable>;
    deployContract(
      name: "GovernorCompatibilityBravo",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.GovernorCompatibilityBravo>;
    deployContract(
      name: "IGovernorCompatibilityBravo",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IGovernorCompatibilityBravo>;
    deployContract(
      name: "GovernorTimelockControl",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.GovernorTimelockControl>;
    deployContract(
      name: "GovernorVotes",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.GovernorVotes>;
    deployContract(
      name: "GovernorVotesQuorumFraction",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.GovernorVotesQuorumFraction>;
    deployContract(
      name: "IGovernorTimelock",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IGovernorTimelock>;
    deployContract(
      name: "Governor",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Governor>;
    deployContract(
      name: "IGovernor",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IGovernor>;
    deployContract(
      name: "TimelockController",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.TimelockController>;
    deployContract(
      name: "IVotes",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IVotes>;
    deployContract(
      name: "IERC5267",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC5267>;
    deployContract(
      name: "IERC5805",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC5805>;
    deployContract(
      name: "IERC6372",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC6372>;
    deployContract(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Pausable>;
    deployContract(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155Receiver>;
    deployContract(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "ERC20Burnable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20Burnable>;
    deployContract(
      name: "ERC20Pausable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20Pausable>;
    deployContract(
      name: "ERC20Permit",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20Permit>;
    deployContract(
      name: "ERC20Votes",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20Votes>;
    deployContract(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Permit>;
    deployContract(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "ERC20PresetMinterPauser",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20PresetMinterPauser>;
    deployContract(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721Receiver>;
    deployContract(
      name: "EIP712",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.EIP712>;
    deployContract(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC165>;
    deployContract(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC165>;
    deployContract(
      name: "ShortStrings",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ShortStrings>;
    deployContract(
      name: "DoubleEndedQueue",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.DoubleEndedQueue>;
    deployContract(
      name: "ExternalContract",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ExternalContract>;
    deployContract(
      name: "MyGovernor",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MyGovernor>;
    deployContract(
      name: "MyTimelockController",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MyTimelockController>;
    deployContract(
      name: "VoteToken",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VoteToken>;

    deployContract(
      name: "AccessControl",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AccessControl>;
    deployContract(
      name: "AccessControlEnumerable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AccessControlEnumerable>;
    deployContract(
      name: "IAccessControl",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IAccessControl>;
    deployContract(
      name: "IAccessControlEnumerable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IAccessControlEnumerable>;
    deployContract(
      name: "GovernorCompatibilityBravo",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.GovernorCompatibilityBravo>;
    deployContract(
      name: "IGovernorCompatibilityBravo",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IGovernorCompatibilityBravo>;
    deployContract(
      name: "GovernorTimelockControl",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.GovernorTimelockControl>;
    deployContract(
      name: "GovernorVotes",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.GovernorVotes>;
    deployContract(
      name: "GovernorVotesQuorumFraction",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.GovernorVotesQuorumFraction>;
    deployContract(
      name: "IGovernorTimelock",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IGovernorTimelock>;
    deployContract(
      name: "Governor",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Governor>;
    deployContract(
      name: "IGovernor",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IGovernor>;
    deployContract(
      name: "TimelockController",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.TimelockController>;
    deployContract(
      name: "IVotes",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IVotes>;
    deployContract(
      name: "IERC5267",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC5267>;
    deployContract(
      name: "IERC5805",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC5805>;
    deployContract(
      name: "IERC6372",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC6372>;
    deployContract(
      name: "Pausable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Pausable>;
    deployContract(
      name: "IERC1155Receiver",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155Receiver>;
    deployContract(
      name: "ERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "ERC20Burnable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20Burnable>;
    deployContract(
      name: "ERC20Pausable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20Pausable>;
    deployContract(
      name: "ERC20Permit",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20Permit>;
    deployContract(
      name: "ERC20Votes",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20Votes>;
    deployContract(
      name: "IERC20Metadata",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(
      name: "IERC20Permit",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Permit>;
    deployContract(
      name: "IERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "ERC20PresetMinterPauser",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20PresetMinterPauser>;
    deployContract(
      name: "IERC721Receiver",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721Receiver>;
    deployContract(
      name: "EIP712",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.EIP712>;
    deployContract(
      name: "ERC165",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC165>;
    deployContract(
      name: "IERC165",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC165>;
    deployContract(
      name: "ShortStrings",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ShortStrings>;
    deployContract(
      name: "DoubleEndedQueue",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.DoubleEndedQueue>;
    deployContract(
      name: "ExternalContract",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ExternalContract>;
    deployContract(
      name: "MyGovernor",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MyGovernor>;
    deployContract(
      name: "MyTimelockController",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MyTimelockController>;
    deployContract(
      name: "VoteToken",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VoteToken>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
