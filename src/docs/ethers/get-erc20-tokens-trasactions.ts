import { Tags } from '../../models';
import { ERCTokenParameters } from './parameters';
import { ercTokenResponse } from './responses';

const apiEtherBalance = {
  get: {
    tags: [Tags.AccountAddressTag],
    description: 'Get a list of ERC20 Token Transfer events by address',
    parameters: [...ERCTokenParameters],
    responses: { ...ercTokenResponse },
  },
};

export default apiEtherBalance;
