/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export type ProposalSettingsStruct = {
  maxApprovals: BigNumberish;
  criteria: BigNumberish;
  budgetToken: AddressLike;
  criteriaValue: BigNumberish;
  budgetAmount: BigNumberish;
};

export type ProposalSettingsStructOutput = [
  maxApprovals: bigint,
  criteria: bigint,
  budgetToken: string,
  criteriaValue: bigint,
  budgetAmount: bigint
] & {
  maxApprovals: bigint;
  criteria: bigint;
  budgetToken: string;
  criteriaValue: bigint;
  budgetAmount: bigint;
};

export interface ApprovalVotingModuleInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "COUNTING_MODE"
      | "PROPOSAL_DATA_ENCODING"
      | "VOTE_PARAMS_ENCODING"
      | "_afterExecute"
      | "_countVote"
      | "_formatExecuteParams"
      | "_voteSucceeded"
      | "getAccountTotalVotes"
      | "getAccountVotes"
      | "proposals"
      | "propose"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "COUNTING_MODE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PROPOSAL_DATA_ENCODING",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "VOTE_PARAMS_ENCODING",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_afterExecute",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "_countVote",
    values: [BigNumberish, AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "_formatExecuteParams",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "_voteSucceeded",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccountTotalVotes",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccountVotes",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "proposals",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "propose",
    values: [BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "COUNTING_MODE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PROPOSAL_DATA_ENCODING",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "VOTE_PARAMS_ENCODING",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_afterExecute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_countVote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_formatExecuteParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_voteSucceeded",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccountTotalVotes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccountVotes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "propose", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
}

export interface ApprovalVotingModule extends BaseContract {
  connect(runner?: ContractRunner | null): ApprovalVotingModule;
  waitForDeployment(): Promise<this>;

  interface: ApprovalVotingModuleInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  COUNTING_MODE: TypedContractMethod<[], [string], "view">;

  PROPOSAL_DATA_ENCODING: TypedContractMethod<[], [string], "view">;

  VOTE_PARAMS_ENCODING: TypedContractMethod<[], [string], "view">;

  _afterExecute: TypedContractMethod<
    [proposalId: BigNumberish, proposalData: BytesLike],
    [void],
    "view"
  >;

  _countVote: TypedContractMethod<
    [
      proposalId: BigNumberish,
      account: AddressLike,
      support: BigNumberish,
      weight: BigNumberish,
      params: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  _formatExecuteParams: TypedContractMethod<
    [proposalId: BigNumberish, proposalData: BytesLike],
    [
      [string[], bigint[], string[]] & {
        targets: string[];
        values: bigint[];
        calldatas: string[];
      }
    ],
    "nonpayable"
  >;

  _voteSucceeded: TypedContractMethod<
    [proposalId: BigNumberish],
    [boolean],
    "view"
  >;

  getAccountTotalVotes: TypedContractMethod<
    [proposalId: BigNumberish, account: AddressLike],
    [bigint],
    "view"
  >;

  getAccountVotes: TypedContractMethod<
    [proposalId: BigNumberish, account: AddressLike],
    [bigint[]],
    "view"
  >;

  proposals: TypedContractMethod<
    [proposalId: BigNumberish],
    [
      [string, bigint, ProposalSettingsStructOutput] & {
        governor: string;
        initBalance: bigint;
        settings: ProposalSettingsStructOutput;
      }
    ],
    "view"
  >;

  propose: TypedContractMethod<
    [
      proposalId: BigNumberish,
      proposalData: BytesLike,
      descriptionHash: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  version: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "COUNTING_MODE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "PROPOSAL_DATA_ENCODING"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "VOTE_PARAMS_ENCODING"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "_afterExecute"
  ): TypedContractMethod<
    [proposalId: BigNumberish, proposalData: BytesLike],
    [void],
    "view"
  >;
  getFunction(
    nameOrSignature: "_countVote"
  ): TypedContractMethod<
    [
      proposalId: BigNumberish,
      account: AddressLike,
      support: BigNumberish,
      weight: BigNumberish,
      params: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "_formatExecuteParams"
  ): TypedContractMethod<
    [proposalId: BigNumberish, proposalData: BytesLike],
    [
      [string[], bigint[], string[]] & {
        targets: string[];
        values: bigint[];
        calldatas: string[];
      }
    ],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "_voteSucceeded"
  ): TypedContractMethod<[proposalId: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "getAccountTotalVotes"
  ): TypedContractMethod<
    [proposalId: BigNumberish, account: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAccountVotes"
  ): TypedContractMethod<
    [proposalId: BigNumberish, account: AddressLike],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "proposals"
  ): TypedContractMethod<
    [proposalId: BigNumberish],
    [
      [string, bigint, ProposalSettingsStructOutput] & {
        governor: string;
        initBalance: bigint;
        settings: ProposalSettingsStructOutput;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "propose"
  ): TypedContractMethod<
    [
      proposalId: BigNumberish,
      proposalData: BytesLike,
      descriptionHash: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "version"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}