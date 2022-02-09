import { SupportedPlatforms } from '../models';
import config from 'config';

export const getPlatformBaseUrl = (platform: SupportedPlatforms) => {
  switch (platform) {
    case SupportedPlatforms.EtherMainNet:
      return config.get<string>('etherMainnet');
    case SupportedPlatforms.EtherGoerli:
      return config.get<string>('etherGoerli');
    case SupportedPlatforms.EtherKovan:
      return config.get<string>('etherKovan');
    case SupportedPlatforms.EtherRinkeby:
      return config.get<string>('etherRinkeby');
    case SupportedPlatforms.EtherRopsten:
      return config.get<string>('etherRopsten');
    default:
      throw new Error('Unsupported platform');
  }
};
