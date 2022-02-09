import { object, string, TypeOf, nativeEnum, number, optional } from 'zod';
import { SortingTypes, SupportedPlatforms } from '../models';

export const getBlockMinedSchema = object({
  query: object({
    address: string({
      required_error: 'address is required',
    }),
    platform: nativeEnum(SupportedPlatforms, {
      required_error: 'Invalid platform type',
    }),
    page: optional(number()),
    offset: optional(number()),
  }),
});

export type GetBlockMined = TypeOf<typeof getBlockMinedSchema>;
