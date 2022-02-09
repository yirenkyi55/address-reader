export const ERCTokenParameters = [
  {
    in: 'query',
    name: 'address',
    required: true,
    schema: {
      type: 'string',
    },
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
    name: 'contractAddress',
    schema: {
      type: 'string',
    },
    required: false,
  },
  {
    in: 'query',
    name: 'startblock',
    required: false,
    schema: {
      type: 'number',
    },
  },
  {
    in: 'query',
    name: 'endblock',
    required: false,
    schema: {
      type: 'number',
    },
  },
  {
    in: 'query',
    name: 'page',
    required: false,
    schema: {
      type: 'number',
    },
  },
  {
    in: 'query',
    name: 'offset',
    required: false,
    schema: {
      type: 'number',
    },
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
];
