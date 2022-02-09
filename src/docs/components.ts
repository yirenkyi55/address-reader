const sharedResponse = (schemaRef: string) => {
  return {
    type: 'object',
    properties: {
      status: {
        type: 'string',
      },
      message: {
        type: 'string',
      },
      result: {
        type: 'array',
        items: {
          $ref: schemaRef,
        },
      },
    },
  };
};

const apiComponents = {
  components: {
    schemas: {
      //ether balance model
      Transaction: {
        type: 'object',
        properties: {
          blockNumber: {
            type: 'string',
          },
          timeStamp: {
            type: 'string',
          },
          hash: {
            type: 'string',
          },
          nonce: {
            type: 'string',
          },
          blockHash: {
            type: 'string',
          },
          transactionIndex: {
            type: 'string',
          },
          from: {
            type: 'string',
          },
          to: {
            type: 'string',
          },
          gas: {
            type: 'number',
          },
          gasPrice: {
            type: 'number',
          },
          isError: {
            type: 'boolean',
          },
          txreceipt_status: {
            type: 'string',
          },
          input: {
            type: 'string',
          },
          contractAddress: {
            type: 'string',
          },
          cumulativeAddress: {
            type: 'string',
          },
          cumulativeGasUsed: {
            type: 'string',
          },
          gasUsed: {
            type: 'string',
          },
          confirmation: {
            type: 'string',
          },
        },
      },
      EtherBalanceModel: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
          },
          message: {
            type: 'string',
          },
          result: {
            type: 'string',
          },
        },
      },
      TransactionResponse: {
        ...sharedResponse('#/components/schemas/Transaction'),
      },
      InternalTransaction: {
        type: 'object',
        properties: {
          blockNumber: {
            type: 'string',
          },
          timeStamp: {
            type: 'string',
          },
          from: {
            type: 'string',
          },
          to: {
            type: 'string',
          },
          value: {
            type: 'string',
          },
          gas: {
            type: 'string',
          },
          gasUsed: {
            type: 'string',
          },
          isError: {
            type: 'string',
          },
          errCode: {
            type: 'string',
          },
          input: {
            type: 'string',
          },
          contractAddress: {
            type: 'string',
          },
          cumulativeAddress: {
            type: 'string',
          },
        },
      },
      InternalTransactionResponse: {
        ...sharedResponse('#/components/schemas/InternalTransaction'),
      },
      BlockMinedModel: {
        type: 'object',
        properties: {
          blockNumber: {
            type: 'string',
          },
          timeStamp: {
            type: 'string',
          },
          blockReward: {
            type: 'string',
          },
        },
      },
      BlockMinedResponse: {
        ...sharedResponse('#/components/schemas/BlockMinedModel'),
      },
      ErcTokenModel: {
        type: 'object',
        properties: {
          blockNumber: {
            type: 'string',
          },
          timeStamp: {
            type: 'string',
          },

          hash: {
            type: 'string',
          },
          nonce: {
            type: 'string',
          },
          blockHash: {
            type: 'string',
          },
          from: {
            type: 'string',
          },
          contractAddress: {
            type: 'string',
          },
          to: {
            type: 'string',
          },
          value: {
            type: 'string',
          },
          tokenName: {
            type: 'string',
          },
          tokenNameSymbol: {
            type: 'string',
          },
          tokenDecimal: {
            type: 'string',
          },
          transactionIndex: {
            type: 'string',
          },
          gas: {
            type: 'string',
          },
          gasUsed: {
            type: 'string',
          },
          cumulativeGasUsed: {
            type: 'string',
          },
          input: {
            type: 'string',
          },
          confirmations: {
            type: 'string',
          },
        },
      },
      ERCTokenResponse: {
        ...sharedResponse('#/components/schemas/ErcTokenModel'),
      },
    },
  },
};

export default apiComponents;
