import { Tags } from '../../models';

const apiInternalTransaction = {
  get: {
    tags: [Tags.AccountAddressTag],
    description: 'List of internal transactions performed by an address',
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
      {
        in: 'query',
        name: 'startblock',
        required: false,
        type: 'number',
      },
      {
        in: 'query',
        name: 'endblock',
        required: false,
        type: 'number',
      },
      {
        in: 'query',
        name: 'page',
        required: false,
        type: 'number',
      },
      {
        in: 'query',
        name: 'offset',
        required: false,
        type: 'number',
      },
      {
        in: 'query',
        name: 'sort',
        required: false,
        schema: {
          type: 'string',
          enum: ['asc', 'desc'],
        },
      },
    ],
    responses: {
      200: {
        description: 'Results were obtained.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/InternalTransactionResponse',
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

export default apiInternalTransaction;
