import { getErc20TokenBalanceSchema } from './../schema/get-erc20-token-balance.schema';
import express from 'express';
import {
  getBlockMinedHandler,
  getERC20TokenBalanceHandler,
  getERC20TokenTransactionHandler,
  getERC721TokenTransactionHandler,
  getEtherBalanceHandler,
  getInternalTransactionHandler,
  getNormalTransactionHandler,
} from '../controllers';
import validateResource from '../middlewares/validateResource';
import {
  getNormalTransactionSchema,
  getAddressBalanceSchema,
  getERCTokenTransactionSchema,
} from '../schema';
import { getBlockMinedSchema } from '../schema/get-block-mined.schema';

const router = express.Router();

router.get(
  '/etherBalance',
  validateResource(getAddressBalanceSchema),
  getEtherBalanceHandler
);

router.get(
  '/normalTransactions',
  validateResource(getNormalTransactionSchema),
  getNormalTransactionHandler
);

router.get(
  '/internalTransactions',
  validateResource(getNormalTransactionSchema),
  getInternalTransactionHandler
);

router.get(
  '/erc721Transactions',
  validateResource(getERCTokenTransactionSchema),
  getERC721TokenTransactionHandler
);

router.get(
  '/erc20Transactions',
  validateResource(getERCTokenTransactionSchema),
  getERC20TokenTransactionHandler
);

router.get(
  '/blockMined',
  validateResource(getBlockMinedSchema),
  getBlockMinedHandler
);

router.get(
  '/contractAddress/erc20Balance',
  validateResource(getErc20TokenBalanceSchema),
  getERC20TokenBalanceHandler
);

export default router;
