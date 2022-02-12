import { SortingTypes } from './platforms.models';

export interface BaseUrlModel {
  baseUrl: string;
  address: string;
}

interface BaseResponse {
  status: string;
  message: string;
}

interface BaseRequest {
  baseUrl: string;
  address: string;
}

export interface EtherBalanceModel {
  status: string;
  message: string;
  result: string;
}

export interface TransactionRequest extends BaseRequest {
  startblock?: number;
  endblock?: number;
  page?: number;
  offset?: number;
  sort?: SortingTypes;
}

export interface Transaction {
  blockNumber: string;
  timeStamp: string;
  hash: string;
  nonce: string;
  blockHash: string;
  transactionIndex: string;
  from: string;
  to: string;
  value: string;
  gas: string;
  gasPrice: string;
  isError: string;
  txreceipt_status: string;
  input: string;
  contractAddress: string;
  cumulativeGasUsed: string;
  gasUsed: string;
  confirmations: string;
}

export interface InternalTransaction {
  blockNumber: string;
  timeStamp: string;
  from: string;
  to: string;
  value: string;
  contractAddress: string;
  input: string;
  type: string;
  gas: string;
  gasUsed: string;
  isError: string;
  errCode: string;
}

export interface ERCTokenTransfersEventsRequest extends BaseRequest {
  contractAddress?: string;
  startblock?: number;
  endblock?: number;
  page?: number;
  offset?: number;
  sort?: SortingTypes;
  action: string;
}

export interface ERCTokenTransfers {
  blockNumber: string;
  timeStamp: string;
  hash: string;
  nonce: string;
  blockHash: string;
  from: string;
  contractAddress: string;
  to: string;
  value: string;
  tokenName: string;
  tokenSymbol: string;
  tokenDecimal: string;
  transactionIndex: string;
  gas: string;
  gasPrice: string;
  gasUsed: string;
  cumulativeGasUsed: string;
  input: string;
  confirmations: string;
}

export interface EtherResponse<T> extends BaseResponse {
  result: T[];
}

export interface EthResponse extends BaseResponse {
  result: string;
}

export interface BlockMined {
  blockNumber: string;
  timeStamp: string;
  blockReward: string;
}

export interface BlockMinedRequest extends BaseRequest {
  page?: number;
  offset?: number;
}

export interface GetErc20TokenBalanceRequest extends BaseRequest {
  contractAddress: string;
}

export const EtherActions = {
  ERC20Action: 'tokentx',
  ERC721Action: 'tokennfttx',
  InternalTransactionAction: 'txlistinternal',
  BlockedMinedAction: 'getminedblocks',
};

export const Tags = {
  AccountAddressTag: 'Ethereum Platform Account Address',
  ContractAddressTag: 'Ethereum Platform Contract Address',
};

export interface QueryDic {
  key: string;
  value: any;
}
