export const ERC20TokenBalanceParameters = [
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
    name: 'contractAddress',
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
];
