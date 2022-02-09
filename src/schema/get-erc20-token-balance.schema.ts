import { object, string, TypeOf, nativeEnum } from 'zod';
import { SupportedPlatforms } from '../models';

export const getErc20TokenBalanceSchema = object({
  query: object({
    address: string({
      required_error: 'address is required',
    }),
    contractAddress: string({
      required_error: 'contract address is required',
    }),
    platform: nativeEnum(SupportedPlatforms, {
      required_error: 'Invalid platform type',
    }),
  }),
});

export type GetErc20TokenBalance = TypeOf<typeof getErc20TokenBalanceSchema>;
