export const BlockMinedParameters = [
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
];
