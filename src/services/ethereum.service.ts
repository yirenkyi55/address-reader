import ethereum from '../api/ethereum';
import {
  ERCTokenTransfersEventsRequest,
  EtherResponse,
  EtherActions,
  EtherBalanceModel,
  TransactionRequest,
  ERCTokenTransfers,
  InternalTransaction,
  Transaction,
  BlockMinedRequest,
  BlockMined,
  GetErc20TokenBalanceRequest,
  EthResponse,
} from '../models';
import {
  constructBaseUrlModel,
  constructBlockMinedQueries,
  constructERC20TokenBalanceQueries,
  constructERCTokenQueries,
  constructEtherBalanceQueries,
  constructTransactionQueries,
  constructUrl,
} from '../utils';

export const getEtherBalance = (address: string, etherBaseUrl: string) => {
  const baseQuery = constructBaseUrlModel(etherBaseUrl, address);
  const queryDic = constructEtherBalanceQueries();
  const url = constructUrl(baseQuery, queryDic);

  return ethereum.get<EtherBalanceModel>(url);
};

export const getNormalTransaction = (
  transactionRequest: TransactionRequest
) => {
  const baseQuery = constructBaseUrlModel(
    transactionRequest.baseUrl,
    transactionRequest.address
  );
  const queryDic = constructTransactionQueries(transactionRequest);
  const url = constructUrl(baseQuery, queryDic);
  return ethereum.get<EtherResponse<Transaction>>(url);
};

export const getInternalTransaction = (
  transactionRequest: TransactionRequest
) => {
  const baseQuery = constructBaseUrlModel(
    transactionRequest.baseUrl,
    transactionRequest.address
  );
  const queryDic = constructTransactionQueries(
    transactionRequest,
    EtherActions.InternalTransactionAction
  );
  const url = constructUrl(baseQuery, queryDic);
  return ethereum.get<EtherResponse<InternalTransaction>>(url);
};

export const getERC20TokenTransfers = (
  request: ERCTokenTransfersEventsRequest
) => {
  const baseQuery = constructBaseUrlModel(request.baseUrl, request.address);
  request.action = EtherActions.ERC20Action;
  const queryDic = constructERCTokenQueries(request);

  const url = constructUrl(baseQuery, queryDic);
  return ethereum.get<EtherResponse<ERCTokenTransfers>>(url);
};

export const getERC721TokenTransfers = (
  request: ERCTokenTransfersEventsRequest
) => {
  const baseQuery = constructBaseUrlModel(request.baseUrl, request.address);
  request.action = EtherActions.ERC721Action;
  const queryDic = constructERCTokenQueries(request);

  const url = constructUrl(baseQuery, queryDic);
  return ethereum.get<EtherResponse<ERCTokenTransfers>>(url);
};

export const getBlockMined = (request: BlockMinedRequest) => {
  const baseQuery = constructBaseUrlModel(request.baseUrl, request.address);
  const queryDic = constructBlockMinedQueries(request);

  const url = constructUrl(baseQuery, queryDic);
  return ethereum.get<EtherResponse<BlockMined>>(url);
};

export const getERC20TokenBalance = (request: GetErc20TokenBalanceRequest) => {
  const baseQuery = constructBaseUrlModel(request.baseUrl, request.address);
  const queryDic = constructERC20TokenBalanceQueries(request);

  const url = constructUrl(baseQuery, queryDic);
  return ethereum.get<EthResponse>(url);
};
