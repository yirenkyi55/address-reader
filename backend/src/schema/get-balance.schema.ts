import { object, string, TypeOf, nativeEnum } from 'zod';
import { SupportedPlatforms } from '../models';

export const getAddressBalanceSchema = object({
  query: object({
    address: string({ 
      required_error: 'address is required',
    }),
    platform: nativeEnum(SupportedPlatforms, {
      required_error: 'Invalid platform type',
    }),
  }),
});

export type GetAddressBalance = TypeOf<typeof getAddressBalanceSchema>;
