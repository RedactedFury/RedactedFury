import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSetInitBond } from "./types/ledger/tx";
import { MsgSetEraUnbondLimit } from "./types/ledger/tx";
import { MsgSetUnbondCommission } from "./types/ledger/tx";
import { MsgAddNewPool } from "./types/ledger/tx";
import { MsgSetReceiver } from "./types/ledger/tx";
import { MsgSetLeastBond } from "./types/ledger/tx";
import { MsgClearCurrentEraSnapShots } from "./types/ledger/tx";
import { MsgSetCommission } from "./types/ledger/tx";
import { MsgSetChainBondingDuration } from "./types/ledger/tx";
import { MsgRemovePool } from "./types/ledger/tx";
import { MsgSetPoolDetail } from "./types/ledger/tx";
import { MsgLiquidityUnbond } from "./types/ledger/tx";
import { MsgSetUnbondFee } from "./types/ledger/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgSetInitBond: (data: MsgSetInitBond) => EncodeObject;
    msgSetEraUnbondLimit: (data: MsgSetEraUnbondLimit) => EncodeObject;
    msgSetUnbondCommission: (data: MsgSetUnbondCommission) => EncodeObject;
    msgAddNewPool: (data: MsgAddNewPool) => EncodeObject;
    msgSetReceiver: (data: MsgSetReceiver) => EncodeObject;
    msgSetLeastBond: (data: MsgSetLeastBond) => EncodeObject;
    msgClearCurrentEraSnapShots: (data: MsgClearCurrentEraSnapShots) => EncodeObject;
    msgSetCommission: (data: MsgSetCommission) => EncodeObject;
    msgSetChainBondingDuration: (data: MsgSetChainBondingDuration) => EncodeObject;
    msgRemovePool: (data: MsgRemovePool) => EncodeObject;
    msgSetPoolDetail: (data: MsgSetPoolDetail) => EncodeObject;
    msgLiquidityUnbond: (data: MsgLiquidityUnbond) => EncodeObject;
    msgSetUnbondFee: (data: MsgSetUnbondFee) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
