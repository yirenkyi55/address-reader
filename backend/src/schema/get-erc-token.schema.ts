import { object, string, TypeOf, nativeEnum, number, optional } from 'zod';
import { SortingTypes, SupportedPlatforms } from '../models';

export const getERCTokenTransactionSchema = object({
  query: object({
    address: string({
      required_error: 'address is required',
    }),
    platform: nativeEnum(SupportedPlatforms, {
      required_error: 'Invalid platform type',
    }),
    contractAddress: optional(string()),
    startblock: optional(number()),
    endblock: optional(number()),
    page: optional(number()),
    offset: optional(number()),
    sort: optional(nativeEnum(SortingTypes)),
  }),
});

export type GetERCTokenTransaction = TypeOf<
  typeof getERCTokenTransactionSchema
>;
