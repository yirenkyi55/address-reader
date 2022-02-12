import {
  BaseUrlModel,
  BlockMinedRequest,
  ERCTokenTransfersEventsRequest,
  EtherActions,
  GetErc20TokenBalanceRequest,
  QueryDic,
  SortingTypes,
  TransactionRequest,
} from '../models';

export function constructBaseUrlModel(baseUrl: string, address: string) {
  return {
    baseUrl: baseUrl,
    address: address,
  } as BaseUrlModel;
}

export function constructUrl(
  baseQuery: BaseUrlModel,
  dictionaryItems: QueryDic[]
) {
  let url = new URL(baseQuery.baseUrl);
  url.searchParams.append('address', baseQuery.address);

  dictionaryItems.forEach((dicItem) => {
    url.searchParams.append(dicItem.key, dicItem.value);
  });

  return url.href;
}

export function constructTransactionQueries(
  transactionRequest: TransactionRequest,
  action = 'txlist'
): QueryDic[] {
  const query = [
    {
      key: 'module',
      value: 'account',
    },
    {
      key: 'action',
      value: action,
    },
    {
      key: 'page',
      value: transactionRequest.page ?? 1,
    },
    {
      key: 'offset',
      value: transactionRequest.offset ?? 100,
    },
    {
      key: 'sort',
      value: transactionRequest.sort ?? SortingTypes.asc,
    },
  ];

  if (transactionRequest.startblock) {
    query.push({
      key: 'startblock',
      value: transactionRequest.startblock,
    });
  }

  if (transactionRequest.endblock) {
    query.push({
      key: 'endblock',
      value: transactionRequest.endblock,
    });
  }

  return query;
}

export function constructEtherBalanceQueries(): QueryDic[] {
  return [
    {
      key: 'tag',
      value: 'latest',
    },
    {
      key: 'module',
      value: 'account',
    },
    {
      key: 'action',
      value: 'balance',
    },
  ];
}

export function constructERCTokenQueries(
  request: ERCTokenTransfersEventsRequest
): QueryDic[] {
  const query = [
    {
      key: 'module',
      value: 'account',
    },
    {
      key: 'action',
      value: request.action,
    },
    {
      key: 'page',
      value: request.page ?? 1,
    },
    {
      key: 'offset',
      value: request.offset ?? 100,
    },
    {
      key: 'sort',
      value: request.sort ?? SortingTypes.asc,
    },
  ];

  if (request.contractAddress) {
    query.push({
      key: 'contractaddress',
      value: request.contractAddress,
    });
  }

  if (request.startblock) {
    query.push({
      key: 'startblock',
      value: request.startblock,
    });
  }

  if (request.endblock) {
    query.push({
      key: 'endblock',
      value: request.endblock,
    });
  }

  return query;
}

export function constructBlockMinedQueries(
  request: BlockMinedRequest
): QueryDic[] {
  const query = [
    {
      key: 'module',
      value: 'account',
    },
    {
      key: 'action',
      value: EtherActions.BlockedMinedAction,
    },
    {
      key: 'page',
      value: request.page ?? 1,
    },
    {
      key: 'offset',
      value: request.offset ?? 100,
    },
    {
      key: 'blockType',
      value: 'blocks',
    },
  ];

  return query;
}

export function constructERC20TokenBalanceQueries(
  request: GetErc20TokenBalanceRequest
): QueryDic[] {
  const query = [
    {
      key: 'module',
      value: 'account',
    },
    {
      key: 'action',
      value: 'tokenbalance',
    },
    {
      key: 'blockType',
      value: 'blocks',
    },
    {
      key: 'contractaddress',
      value: request.contractAddress,
    },
    {
      key: 'tag',
      value: 'latest',
    },
  ];

  return query;
}
