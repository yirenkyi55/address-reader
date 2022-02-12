import { object, string, TypeOf, nativeEnum, number, optional } from 'zod';
import { SortingTypes, SupportedPlatforms } from '../models';

export const getNormalTransactionSchema = object({
  query: object({
    address: string({
      required_error: 'address is required',
    }),
    platform: nativeEnum(SupportedPlatforms, {
      required_error: 'Invalid platform type',
    }),
    startblock: optional(number()),
    endblock: optional(number()),
    page: optional(number()),
    offset: optional(number()),
    sort: optional(nativeEnum(SortingTypes)),
  }),
});

export type GetNormalTransaction = TypeOf<typeof getNormalTransactionSchema>;
