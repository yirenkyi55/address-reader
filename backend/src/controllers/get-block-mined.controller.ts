import { getPlatformBaseUrl } from '../utils/urlParser';
import { getBlockMined } from '../services/ethereum.service';
import { BlockMinedRequest } from '../models';
export { Request, Response } from 'express';

export function getBlockMinedHandler(req: any, res: any) {
  const query = req.query;

  const baseUrl = getPlatformBaseUrl(query.platform);
  const request: BlockMinedRequest = {
    ...query,
    baseUrl,
  };

  getBlockMined(request)
    .then((response) => {
      return res.status(200).send(response.data);
    })
    .catch((error) => {
      return res.status(400).send(error);
    });
}
