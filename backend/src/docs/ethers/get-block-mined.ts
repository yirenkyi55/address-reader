import { Tags } from '../../models';
import { BlockMinedParameters } from './parameters';
import { blockMinedResponse } from './responses';

const apiBlockMined = {
  get: {
    tags: [Tags.AccountAddressTag],
    description: 'Get a list of block mined by an address',
    parameters: [...BlockMinedParameters],
    responses: { ...blockMinedResponse },
  },
};

export default apiBlockMined;
