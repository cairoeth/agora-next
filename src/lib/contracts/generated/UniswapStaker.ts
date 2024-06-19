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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface UniswapStakerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "ALTER_BENEFICIARY_TYPEHASH"
      | "ALTER_DELEGATEE_TYPEHASH"
      | "CLAIM_REWARD_TYPEHASH"
      | "REWARD_DURATION"
      | "REWARD_TOKEN"
      | "SCALE_FACTOR"
      | "STAKE_MORE_TYPEHASH"
      | "STAKE_TOKEN"
      | "STAKE_TYPEHASH"
      | "WITHDRAW_TYPEHASH"
      | "admin"
      | "alterBeneficiary"
      | "alterBeneficiaryOnBehalf"
      | "alterDelegatee"
      | "alterDelegateeOnBehalf"
      | "beneficiaryRewardPerTokenCheckpoint"
      | "claimReward"
      | "claimRewardOnBehalf"
      | "depositorTotalStaked"
      | "deposits"
      | "earningPower"
      | "eip712Domain"
      | "invalidateNonce"
      | "isRewardNotifier"
      | "lastCheckpointTime"
      | "lastTimeRewardDistributed"
      | "multicall"
      | "nonces"
      | "notifyRewardAmount"
      | "permitAndStake"
      | "permitAndStakeMore"
      | "rewardEndTime"
      | "rewardPerTokenAccumulated"
      | "rewardPerTokenAccumulatedCheckpoint"
      | "scaledRewardRate"
      | "scaledUnclaimedRewardCheckpoint"
      | "setAdmin"
      | "setRewardNotifier"
      | "stake(uint256,address)"
      | "stake(uint256,address,address)"
      | "stakeMore"
      | "stakeMoreOnBehalf"
      | "stakeOnBehalf"
      | "surrogates"
      | "totalStaked"
      | "unclaimedReward"
      | "withdraw"
      | "withdrawOnBehalf"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AdminSet"
      | "BeneficiaryAltered"
      | "DelegateeAltered"
      | "EIP712DomainChanged"
      | "RewardClaimed"
      | "RewardNotified"
      | "RewardNotifierSet"
      | "StakeDeposited"
      | "StakeWithdrawn"
      | "SurrogateDeployed"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "ALTER_BENEFICIARY_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ALTER_DELEGATEE_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CLAIM_REWARD_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REWARD_DURATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REWARD_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SCALE_FACTOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "STAKE_MORE_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "STAKE_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "STAKE_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "WITHDRAW_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "alterBeneficiary",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "alterBeneficiaryOnBehalf",
    values: [BigNumberish, AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "alterDelegatee",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "alterDelegateeOnBehalf",
    values: [BigNumberish, AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "beneficiaryRewardPerTokenCheckpoint",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "claimReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewardOnBehalf",
    values: [AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "depositorTotalStaked",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "deposits",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "earningPower",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "eip712Domain",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "invalidateNonce",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isRewardNotifier",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lastCheckpointTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastTimeRewardDistributed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(functionFragment: "nonces", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "notifyRewardAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "permitAndStake",
    values: [
      BigNumberish,
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "permitAndStakeMore",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardEndTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerTokenAccumulated",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerTokenAccumulatedCheckpoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "scaledRewardRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "scaledUnclaimedRewardCheckpoint",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardNotifier",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "stake(uint256,address)",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "stake(uint256,address,address)",
    values: [BigNumberish, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeMore",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeMoreOnBehalf",
    values: [BigNumberish, BigNumberish, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeOnBehalf",
    values: [
      BigNumberish,
      AddressLike,
      AddressLike,
      AddressLike,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "surrogates",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalStaked",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unclaimedReward",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawOnBehalf",
    values: [BigNumberish, BigNumberish, AddressLike, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "ALTER_BENEFICIARY_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ALTER_DELEGATEE_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CLAIM_REWARD_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REWARD_DURATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REWARD_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SCALE_FACTOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "STAKE_MORE_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "STAKE_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "STAKE_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "WITHDRAW_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "alterBeneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "alterBeneficiaryOnBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "alterDelegatee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "alterDelegateeOnBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beneficiaryRewardPerTokenCheckpoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewardOnBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositorTotalStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposits", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "earningPower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "eip712Domain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "invalidateNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isRewardNotifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastCheckpointTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastTimeRewardDistributed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "notifyRewardAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "permitAndStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "permitAndStakeMore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardEndTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerTokenAccumulated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerTokenAccumulatedCheckpoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "scaledRewardRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "scaledUnclaimedRewardCheckpoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRewardNotifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stake(uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stake(uint256,address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stakeMore", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakeMoreOnBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakeOnBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "surrogates", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unclaimedReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawOnBehalf",
    data: BytesLike
  ): Result;
}

export namespace AdminSetEvent {
  export type InputTuple = [oldAdmin: AddressLike, newAdmin: AddressLike];
  export type OutputTuple = [oldAdmin: string, newAdmin: string];
  export interface OutputObject {
    oldAdmin: string;
    newAdmin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BeneficiaryAlteredEvent {
  export type InputTuple = [
    depositId: BigNumberish,
    oldBeneficiary: AddressLike,
    newBeneficiary: AddressLike
  ];
  export type OutputTuple = [
    depositId: bigint,
    oldBeneficiary: string,
    newBeneficiary: string
  ];
  export interface OutputObject {
    depositId: bigint;
    oldBeneficiary: string;
    newBeneficiary: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DelegateeAlteredEvent {
  export type InputTuple = [
    depositId: BigNumberish,
    oldDelegatee: AddressLike,
    newDelegatee: AddressLike
  ];
  export type OutputTuple = [
    depositId: bigint,
    oldDelegatee: string,
    newDelegatee: string
  ];
  export interface OutputObject {
    depositId: bigint;
    oldDelegatee: string;
    newDelegatee: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EIP712DomainChangedEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardClaimedEvent {
  export type InputTuple = [beneficiary: AddressLike, amount: BigNumberish];
  export type OutputTuple = [beneficiary: string, amount: bigint];
  export interface OutputObject {
    beneficiary: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardNotifiedEvent {
  export type InputTuple = [amount: BigNumberish, notifier: AddressLike];
  export type OutputTuple = [amount: bigint, notifier: string];
  export interface OutputObject {
    amount: bigint;
    notifier: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardNotifierSetEvent {
  export type InputTuple = [account: AddressLike, isEnabled: boolean];
  export type OutputTuple = [account: string, isEnabled: boolean];
  export interface OutputObject {
    account: string;
    isEnabled: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StakeDepositedEvent {
  export type InputTuple = [
    owner: AddressLike,
    depositId: BigNumberish,
    amount: BigNumberish,
    depositBalance: BigNumberish
  ];
  export type OutputTuple = [
    owner: string,
    depositId: bigint,
    amount: bigint,
    depositBalance: bigint
  ];
  export interface OutputObject {
    owner: string;
    depositId: bigint;
    amount: bigint;
    depositBalance: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StakeWithdrawnEvent {
  export type InputTuple = [
    depositId: BigNumberish,
    amount: BigNumberish,
    depositBalance: BigNumberish
  ];
  export type OutputTuple = [
    depositId: bigint,
    amount: bigint,
    depositBalance: bigint
  ];
  export interface OutputObject {
    depositId: bigint;
    amount: bigint;
    depositBalance: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SurrogateDeployedEvent {
  export type InputTuple = [delegatee: AddressLike, surrogate: AddressLike];
  export type OutputTuple = [delegatee: string, surrogate: string];
  export interface OutputObject {
    delegatee: string;
    surrogate: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface UniswapStaker extends BaseContract {
  connect(runner?: ContractRunner | null): UniswapStaker;
  waitForDeployment(): Promise<this>;

  interface: UniswapStakerInterface;

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

  ALTER_BENEFICIARY_TYPEHASH: TypedContractMethod<[], [string], "view">;

  ALTER_DELEGATEE_TYPEHASH: TypedContractMethod<[], [string], "view">;

  CLAIM_REWARD_TYPEHASH: TypedContractMethod<[], [string], "view">;

  REWARD_DURATION: TypedContractMethod<[], [bigint], "view">;

  REWARD_TOKEN: TypedContractMethod<[], [string], "view">;

  SCALE_FACTOR: TypedContractMethod<[], [bigint], "view">;

  STAKE_MORE_TYPEHASH: TypedContractMethod<[], [string], "view">;

  STAKE_TOKEN: TypedContractMethod<[], [string], "view">;

  STAKE_TYPEHASH: TypedContractMethod<[], [string], "view">;

  WITHDRAW_TYPEHASH: TypedContractMethod<[], [string], "view">;

  admin: TypedContractMethod<[], [string], "view">;

  alterBeneficiary: TypedContractMethod<
    [_depositId: BigNumberish, _newBeneficiary: AddressLike],
    [void],
    "nonpayable"
  >;

  alterBeneficiaryOnBehalf: TypedContractMethod<
    [
      _depositId: BigNumberish,
      _newBeneficiary: AddressLike,
      _depositor: AddressLike,
      _deadline: BigNumberish,
      _signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  alterDelegatee: TypedContractMethod<
    [_depositId: BigNumberish, _newDelegatee: AddressLike],
    [void],
    "nonpayable"
  >;

  alterDelegateeOnBehalf: TypedContractMethod<
    [
      _depositId: BigNumberish,
      _newDelegatee: AddressLike,
      _depositor: AddressLike,
      _deadline: BigNumberish,
      _signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  beneficiaryRewardPerTokenCheckpoint: TypedContractMethod<
    [account: AddressLike],
    [bigint],
    "view"
  >;

  claimReward: TypedContractMethod<[], [void], "nonpayable">;

  claimRewardOnBehalf: TypedContractMethod<
    [_beneficiary: AddressLike, _deadline: BigNumberish, _signature: BytesLike],
    [void],
    "nonpayable"
  >;

  depositorTotalStaked: TypedContractMethod<
    [depositor: AddressLike],
    [bigint],
    "view"
  >;

  deposits: TypedContractMethod<
    [depositId: BigNumberish],
    [
      [bigint, string, string, string] & {
        balance: bigint;
        owner: string;
        delegatee: string;
        beneficiary: string;
      }
    ],
    "view"
  >;

  earningPower: TypedContractMethod<
    [beneficiary: AddressLike],
    [bigint],
    "view"
  >;

  eip712Domain: TypedContractMethod<
    [],
    [
      [string, string, string, bigint, string, string, bigint[]] & {
        fields: string;
        name: string;
        version: string;
        chainId: bigint;
        verifyingContract: string;
        salt: string;
        extensions: bigint[];
      }
    ],
    "view"
  >;

  invalidateNonce: TypedContractMethod<[], [void], "nonpayable">;

  isRewardNotifier: TypedContractMethod<
    [rewardNotifier: AddressLike],
    [boolean],
    "view"
  >;

  lastCheckpointTime: TypedContractMethod<[], [bigint], "view">;

  lastTimeRewardDistributed: TypedContractMethod<[], [bigint], "view">;

  multicall: TypedContractMethod<[data: BytesLike[]], [string[]], "nonpayable">;

  nonces: TypedContractMethod<[owner: AddressLike], [bigint], "view">;

  notifyRewardAmount: TypedContractMethod<
    [_amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  permitAndStake: TypedContractMethod<
    [
      _amount: BigNumberish,
      _delegatee: AddressLike,
      _beneficiary: AddressLike,
      _deadline: BigNumberish,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  permitAndStakeMore: TypedContractMethod<
    [
      _depositId: BigNumberish,
      _amount: BigNumberish,
      _deadline: BigNumberish,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  rewardEndTime: TypedContractMethod<[], [bigint], "view">;

  rewardPerTokenAccumulated: TypedContractMethod<[], [bigint], "view">;

  rewardPerTokenAccumulatedCheckpoint: TypedContractMethod<
    [],
    [bigint],
    "view"
  >;

  scaledRewardRate: TypedContractMethod<[], [bigint], "view">;

  scaledUnclaimedRewardCheckpoint: TypedContractMethod<
    [account: AddressLike],
    [bigint],
    "view"
  >;

  setAdmin: TypedContractMethod<[_newAdmin: AddressLike], [void], "nonpayable">;

  setRewardNotifier: TypedContractMethod<
    [_rewardNotifier: AddressLike, _isEnabled: boolean],
    [void],
    "nonpayable"
  >;

  "stake(uint256,address)": TypedContractMethod<
    [_amount: BigNumberish, _delegatee: AddressLike],
    [bigint],
    "nonpayable"
  >;

  "stake(uint256,address,address)": TypedContractMethod<
    [_amount: BigNumberish, _delegatee: AddressLike, _beneficiary: AddressLike],
    [bigint],
    "nonpayable"
  >;

  stakeMore: TypedContractMethod<
    [_depositId: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  stakeMoreOnBehalf: TypedContractMethod<
    [
      _depositId: BigNumberish,
      _amount: BigNumberish,
      _depositor: AddressLike,
      _deadline: BigNumberish,
      _signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  stakeOnBehalf: TypedContractMethod<
    [
      _amount: BigNumberish,
      _delegatee: AddressLike,
      _beneficiary: AddressLike,
      _depositor: AddressLike,
      _deadline: BigNumberish,
      _signature: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  surrogates: TypedContractMethod<[delegatee: AddressLike], [string], "view">;

  totalStaked: TypedContractMethod<[], [bigint], "view">;

  unclaimedReward: TypedContractMethod<
    [_beneficiary: AddressLike],
    [bigint],
    "view"
  >;

  withdraw: TypedContractMethod<
    [_depositId: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  withdrawOnBehalf: TypedContractMethod<
    [
      _depositId: BigNumberish,
      _amount: BigNumberish,
      _depositor: AddressLike,
      _deadline: BigNumberish,
      _signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "ALTER_BENEFICIARY_TYPEHASH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "ALTER_DELEGATEE_TYPEHASH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "CLAIM_REWARD_TYPEHASH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "REWARD_DURATION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "REWARD_TOKEN"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "SCALE_FACTOR"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "STAKE_MORE_TYPEHASH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "STAKE_TOKEN"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "STAKE_TYPEHASH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "WITHDRAW_TYPEHASH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "admin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "alterBeneficiary"
  ): TypedContractMethod<
    [_depositId: BigNumberish, _newBeneficiary: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "alterBeneficiaryOnBehalf"
  ): TypedContractMethod<
    [
      _depositId: BigNumberish,
      _newBeneficiary: AddressLike,
      _depositor: AddressLike,
      _deadline: BigNumberish,
      _signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "alterDelegatee"
  ): TypedContractMethod<
    [_depositId: BigNumberish, _newDelegatee: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "alterDelegateeOnBehalf"
  ): TypedContractMethod<
    [
      _depositId: BigNumberish,
      _newDelegatee: AddressLike,
      _depositor: AddressLike,
      _deadline: BigNumberish,
      _signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "beneficiaryRewardPerTokenCheckpoint"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "claimReward"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "claimRewardOnBehalf"
  ): TypedContractMethod<
    [_beneficiary: AddressLike, _deadline: BigNumberish, _signature: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "depositorTotalStaked"
  ): TypedContractMethod<[depositor: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "deposits"
  ): TypedContractMethod<
    [depositId: BigNumberish],
    [
      [bigint, string, string, string] & {
        balance: bigint;
        owner: string;
        delegatee: string;
        beneficiary: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "earningPower"
  ): TypedContractMethod<[beneficiary: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "eip712Domain"
  ): TypedContractMethod<
    [],
    [
      [string, string, string, bigint, string, string, bigint[]] & {
        fields: string;
        name: string;
        version: string;
        chainId: bigint;
        verifyingContract: string;
        salt: string;
        extensions: bigint[];
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "invalidateNonce"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "isRewardNotifier"
  ): TypedContractMethod<[rewardNotifier: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "lastCheckpointTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "lastTimeRewardDistributed"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "multicall"
  ): TypedContractMethod<[data: BytesLike[]], [string[]], "nonpayable">;
  getFunction(
    nameOrSignature: "nonces"
  ): TypedContractMethod<[owner: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "notifyRewardAmount"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "permitAndStake"
  ): TypedContractMethod<
    [
      _amount: BigNumberish,
      _delegatee: AddressLike,
      _beneficiary: AddressLike,
      _deadline: BigNumberish,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "permitAndStakeMore"
  ): TypedContractMethod<
    [
      _depositId: BigNumberish,
      _amount: BigNumberish,
      _deadline: BigNumberish,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "rewardEndTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardPerTokenAccumulated"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardPerTokenAccumulatedCheckpoint"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "scaledRewardRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "scaledUnclaimedRewardCheckpoint"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "setAdmin"
  ): TypedContractMethod<[_newAdmin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRewardNotifier"
  ): TypedContractMethod<
    [_rewardNotifier: AddressLike, _isEnabled: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "stake(uint256,address)"
  ): TypedContractMethod<
    [_amount: BigNumberish, _delegatee: AddressLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "stake(uint256,address,address)"
  ): TypedContractMethod<
    [_amount: BigNumberish, _delegatee: AddressLike, _beneficiary: AddressLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "stakeMore"
  ): TypedContractMethod<
    [_depositId: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "stakeMoreOnBehalf"
  ): TypedContractMethod<
    [
      _depositId: BigNumberish,
      _amount: BigNumberish,
      _depositor: AddressLike,
      _deadline: BigNumberish,
      _signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "stakeOnBehalf"
  ): TypedContractMethod<
    [
      _amount: BigNumberish,
      _delegatee: AddressLike,
      _beneficiary: AddressLike,
      _depositor: AddressLike,
      _deadline: BigNumberish,
      _signature: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "surrogates"
  ): TypedContractMethod<[delegatee: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "totalStaked"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "unclaimedReward"
  ): TypedContractMethod<[_beneficiary: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<
    [_depositId: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawOnBehalf"
  ): TypedContractMethod<
    [
      _depositId: BigNumberish,
      _amount: BigNumberish,
      _depositor: AddressLike,
      _deadline: BigNumberish,
      _signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "AdminSet"
  ): TypedContractEvent<
    AdminSetEvent.InputTuple,
    AdminSetEvent.OutputTuple,
    AdminSetEvent.OutputObject
  >;
  getEvent(
    key: "BeneficiaryAltered"
  ): TypedContractEvent<
    BeneficiaryAlteredEvent.InputTuple,
    BeneficiaryAlteredEvent.OutputTuple,
    BeneficiaryAlteredEvent.OutputObject
  >;
  getEvent(
    key: "DelegateeAltered"
  ): TypedContractEvent<
    DelegateeAlteredEvent.InputTuple,
    DelegateeAlteredEvent.OutputTuple,
    DelegateeAlteredEvent.OutputObject
  >;
  getEvent(
    key: "EIP712DomainChanged"
  ): TypedContractEvent<
    EIP712DomainChangedEvent.InputTuple,
    EIP712DomainChangedEvent.OutputTuple,
    EIP712DomainChangedEvent.OutputObject
  >;
  getEvent(
    key: "RewardClaimed"
  ): TypedContractEvent<
    RewardClaimedEvent.InputTuple,
    RewardClaimedEvent.OutputTuple,
    RewardClaimedEvent.OutputObject
  >;
  getEvent(
    key: "RewardNotified"
  ): TypedContractEvent<
    RewardNotifiedEvent.InputTuple,
    RewardNotifiedEvent.OutputTuple,
    RewardNotifiedEvent.OutputObject
  >;
  getEvent(
    key: "RewardNotifierSet"
  ): TypedContractEvent<
    RewardNotifierSetEvent.InputTuple,
    RewardNotifierSetEvent.OutputTuple,
    RewardNotifierSetEvent.OutputObject
  >;
  getEvent(
    key: "StakeDeposited"
  ): TypedContractEvent<
    StakeDepositedEvent.InputTuple,
    StakeDepositedEvent.OutputTuple,
    StakeDepositedEvent.OutputObject
  >;
  getEvent(
    key: "StakeWithdrawn"
  ): TypedContractEvent<
    StakeWithdrawnEvent.InputTuple,
    StakeWithdrawnEvent.OutputTuple,
    StakeWithdrawnEvent.OutputObject
  >;
  getEvent(
    key: "SurrogateDeployed"
  ): TypedContractEvent<
    SurrogateDeployedEvent.InputTuple,
    SurrogateDeployedEvent.OutputTuple,
    SurrogateDeployedEvent.OutputObject
  >;

  filters: {
    "AdminSet(address,address)": TypedContractEvent<
      AdminSetEvent.InputTuple,
      AdminSetEvent.OutputTuple,
      AdminSetEvent.OutputObject
    >;
    AdminSet: TypedContractEvent<
      AdminSetEvent.InputTuple,
      AdminSetEvent.OutputTuple,
      AdminSetEvent.OutputObject
    >;

    "BeneficiaryAltered(uint256,address,address)": TypedContractEvent<
      BeneficiaryAlteredEvent.InputTuple,
      BeneficiaryAlteredEvent.OutputTuple,
      BeneficiaryAlteredEvent.OutputObject
    >;
    BeneficiaryAltered: TypedContractEvent<
      BeneficiaryAlteredEvent.InputTuple,
      BeneficiaryAlteredEvent.OutputTuple,
      BeneficiaryAlteredEvent.OutputObject
    >;

    "DelegateeAltered(uint256,address,address)": TypedContractEvent<
      DelegateeAlteredEvent.InputTuple,
      DelegateeAlteredEvent.OutputTuple,
      DelegateeAlteredEvent.OutputObject
    >;
    DelegateeAltered: TypedContractEvent<
      DelegateeAlteredEvent.InputTuple,
      DelegateeAlteredEvent.OutputTuple,
      DelegateeAlteredEvent.OutputObject
    >;

    "EIP712DomainChanged()": TypedContractEvent<
      EIP712DomainChangedEvent.InputTuple,
      EIP712DomainChangedEvent.OutputTuple,
      EIP712DomainChangedEvent.OutputObject
    >;
    EIP712DomainChanged: TypedContractEvent<
      EIP712DomainChangedEvent.InputTuple,
      EIP712DomainChangedEvent.OutputTuple,
      EIP712DomainChangedEvent.OutputObject
    >;

    "RewardClaimed(address,uint256)": TypedContractEvent<
      RewardClaimedEvent.InputTuple,
      RewardClaimedEvent.OutputTuple,
      RewardClaimedEvent.OutputObject
    >;
    RewardClaimed: TypedContractEvent<
      RewardClaimedEvent.InputTuple,
      RewardClaimedEvent.OutputTuple,
      RewardClaimedEvent.OutputObject
    >;

    "RewardNotified(uint256,address)": TypedContractEvent<
      RewardNotifiedEvent.InputTuple,
      RewardNotifiedEvent.OutputTuple,
      RewardNotifiedEvent.OutputObject
    >;
    RewardNotified: TypedContractEvent<
      RewardNotifiedEvent.InputTuple,
      RewardNotifiedEvent.OutputTuple,
      RewardNotifiedEvent.OutputObject
    >;

    "RewardNotifierSet(address,bool)": TypedContractEvent<
      RewardNotifierSetEvent.InputTuple,
      RewardNotifierSetEvent.OutputTuple,
      RewardNotifierSetEvent.OutputObject
    >;
    RewardNotifierSet: TypedContractEvent<
      RewardNotifierSetEvent.InputTuple,
      RewardNotifierSetEvent.OutputTuple,
      RewardNotifierSetEvent.OutputObject
    >;

    "StakeDeposited(address,uint256,uint256,uint256)": TypedContractEvent<
      StakeDepositedEvent.InputTuple,
      StakeDepositedEvent.OutputTuple,
      StakeDepositedEvent.OutputObject
    >;
    StakeDeposited: TypedContractEvent<
      StakeDepositedEvent.InputTuple,
      StakeDepositedEvent.OutputTuple,
      StakeDepositedEvent.OutputObject
    >;

    "StakeWithdrawn(uint256,uint256,uint256)": TypedContractEvent<
      StakeWithdrawnEvent.InputTuple,
      StakeWithdrawnEvent.OutputTuple,
      StakeWithdrawnEvent.OutputObject
    >;
    StakeWithdrawn: TypedContractEvent<
      StakeWithdrawnEvent.InputTuple,
      StakeWithdrawnEvent.OutputTuple,
      StakeWithdrawnEvent.OutputObject
    >;

    "SurrogateDeployed(address,address)": TypedContractEvent<
      SurrogateDeployedEvent.InputTuple,
      SurrogateDeployedEvent.OutputTuple,
      SurrogateDeployedEvent.OutputObject
    >;
    SurrogateDeployed: TypedContractEvent<
      SurrogateDeployedEvent.InputTuple,
      SurrogateDeployedEvent.OutputTuple,
      SurrogateDeployedEvent.OutputObject
    >;
  };
}