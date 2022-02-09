import { getPlatformBaseUrl } from './../utils/urlParser';
import { getEtherBalance } from '../services/ethereum.service';
export { Request, Response } from 'express';

export function getEtherBalanceHandler(req: any, res: any) {
  const query = req.query;
  // Call the service to get the etherBalance
  const baseUrl = getPlatformBaseUrl(query.platform);
  getEtherBalance(query.address, baseUrl)
    .then((response) => {
      return res.status(200).send(response.data);
    })
    .catch((error) => {
      return res.status(400).send(error);
    });
}
