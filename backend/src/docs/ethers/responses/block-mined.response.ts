export const blockMinedResponse = {
  200: {
    description: 'Results were obtained.',
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/BlockMinedResponse',
        },
      },
    },
  },
  400: {
    description: 'Bad Request',
  },
};
