/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  ExternalContract,
  ExternalContractInterface,
} from "../../contracts/ExternalContract";

const _abi = [
  {
    inputs: [],
    name: "externalCall",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "testVal",
        type: "string",
      },
    ],
    name: "publicCall",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061026c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063a63102571461003b578063c652b7c814610076575b600080fd5b60408051808201909152600d81526c195e1d195c9b985b0818d85b1b609a1b60208201525b60405161006d9190610121565b60405180910390f35b610060610084366004610185565b606061008f826100b6565b505060408051808201909152600b81526a1c1d589b1a58c818d85b1b60aa1b602082015290565b6100f9816040516024016100ca9190610121565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b1790526100fc565b50565b6100f98160006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b600060208083528351808285015260005b8181101561014e57858101830151858201604001528201610132565b506000604082860101526040601f19601f8301168501019250505092915050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561019757600080fd5b813567ffffffffffffffff808211156101af57600080fd5b818401915084601f8301126101c357600080fd5b8135818111156101d5576101d561016f565b604051601f8201601f19908116603f011681019083821181831017156101fd576101fd61016f565b8160405282815287602084870101111561021657600080fd5b82602086016020830137600092810160200192909252509594505050505056fea26469706673582212203e2253c3306359cefc62892f217a0cba9d6171dd3f4f559247dcaa827c6d78a664736f6c63430008130033";

type ExternalContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExternalContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExternalContract__factory extends ContractFactory {
  constructor(...args: ExternalContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      ExternalContract & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ExternalContract__factory {
    return super.connect(runner) as ExternalContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExternalContractInterface {
    return new Interface(_abi) as ExternalContractInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ExternalContract {
    return new Contract(address, _abi, runner) as unknown as ExternalContract;
  }
}
