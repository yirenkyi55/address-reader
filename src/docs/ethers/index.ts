import getEtherBalance from './get-ether-balance';
import normalTransactions from './get-normal-transaction';
import internalTransactions from './get-internal-transaction';
import erc721TokenTransactions from './get-erc721-tokens.transactions';
import erc20TokenTransactions from './get-erc20-tokens-trasactions';
import blockMined from './get-block-mined';
import erc20TokenBalance from './get-erc20-tokens-balance';

const ethersEndpoints = {
  paths: {
    '/ethers/etherBalance': {
      ...getEtherBalance,
    },
    '/ethers/normalTransactions': {
      ...normalTransactions,
    },
    '/ethers/internalTransactions': {
      ...internalTransactions,
    },
    '/ethers/erc721Transactions': {
      ...erc721TokenTransactions,
    },
    '/ethers/erc20Transactions': {
      ...erc20TokenTransactions,
    },
    '/ethers/blockMined': {
      ...blockMined,
    },
    '/ethers/contractAddress/erc20Balance': {
      ...erc20TokenBalance,
    },
  },
};

export default ethersEndpoints;
