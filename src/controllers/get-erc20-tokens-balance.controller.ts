import { getPlatformBaseUrl } from '../utils/urlParser';
import { getERC20TokenBalance } from '../services/ethereum.service';
import { GetErc20TokenBalanceRequest } from '../models';
export { Request, Response } from 'express';

export function getERC20TokenBalanceHandler(req: any, res: any) {
  const query = req.query;
  // Call the service to get the etherBalance
  const baseUrl = getPlatformBaseUrl(query.platform);
  const request: GetErc20TokenBalanceRequest = {
    ...query,
    baseUrl,
  };

  getERC20TokenBalance(request)
    .then((response) => {
      return res.status(200).send(response.data);
    })
    .catch((error) => {
      return res.status(400).send(error);
    });
}
