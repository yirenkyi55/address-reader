import { getPlatformBaseUrl } from '../utils/urlParser';
import { getNormalTransaction } from '../services/ethereum.service';
import { TransactionRequest } from '../models';
export { Request, Response } from 'express';

export function getNormalTransactionHandler(req: any, res: any) {
  const query = req.query;
  // Call the service to get the etherBalance
  const baseUrl = getPlatformBaseUrl(query.platform);
  const request: TransactionRequest = {
    ...query,
    baseUrl,
  };
  getNormalTransaction(request)
    .then((response) => {
      return res.status(200).send(response.data);
    })
    .catch((error) => {
      return res.status(400).send(error);
    });
}
