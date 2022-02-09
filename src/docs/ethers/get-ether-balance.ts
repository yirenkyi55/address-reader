import { Tags } from '../../models';

const apiEtherBalance = {
  get: {
    tags: [Tags.AccountAddressTag],
    description: 'Get Balance of Ethereum address',
    parameters: [
      {
        in: 'query',
        name: 'address',
        type: 'string',
        required: true,
      },
      {
        in: 'query',
        name: 'platform',
        required: true,
        schema: {
          type: 'string',
          enum: ['MainNet', 'Goerli', 'Kovan', 'Rinkeby', 'Ropsten'],
        },
      },
    ],
    responses: {
      200: {
        description: 'Results were obtained.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/EtherBalanceModel',
            },
          },
        },
      },
      400: {
        description: 'Bad Request',
      },
    },
  },
};

export default apiEtherBalance;
