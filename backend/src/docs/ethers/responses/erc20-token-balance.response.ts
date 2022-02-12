export const erc20TokenBalanceResponse = {
  200: {
    description: 'Results were obtained.',
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/ERCTokenResponse',
        },
      },
    },
  },
  400: {
    description: 'Bad Request',
  },
};
