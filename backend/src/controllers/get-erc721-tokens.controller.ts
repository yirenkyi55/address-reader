import { getPlatformBaseUrl } from '../utils/urlParser';
import { getERC721TokenTransfers } from '../services/ethereum.service';
import { ERCTokenTransfersEventsRequest } from '../models';
export { Request, Response } from 'express';

export function getERC721TokenTransactionHandler(req: any, res: any) {
  const query = req.query;
  // Call the service to get the etherBalance
  const baseUrl = getPlatformBaseUrl(query.platform);
  const request: ERCTokenTransfersEventsRequest = {
    ...query,
    baseUrl,
  };

  getERC721TokenTransfers(request)
    .then((response) => {
      return res.status(200).send(response.data);
    })
    .catch((error) => {
      return res.status(400).send(error);
    });
}
