import { Tags } from '../../models';
import { ERC20TokenBalanceParameters } from './parameters';
import { ercTokenResponse } from './responses';

const apiERC20TokenBalance = {
  get: {
    tags: [Tags.ContractAddressTag],
    description: 'Get the current balance of an ERC-20 token of an address',
    parameters: [...ERC20TokenBalanceParameters],
    responses: { ...ercTokenResponse },
  },
};

export default apiERC20TokenBalance;
