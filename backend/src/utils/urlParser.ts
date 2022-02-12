import { SupportedPlatforms } from '../models';

export const getPlatformBaseUrl = (platform: SupportedPlatforms): string => {
  switch (platform) {
    case SupportedPlatforms.EtherMainNet:
      return process.env.ETHER_MAIN_NET!;
    case SupportedPlatforms.EtherGoerli:
      return process.env.ETHER_GOERLI!;
    case SupportedPlatforms.EtherKovan:
      return process.env.ETHER_KOVAN!;
    case SupportedPlatforms.EtherRinkeby:
      return process.env.ETHER_RINKEBY!;
    case SupportedPlatforms.EtherRopsten:
      return process.env.ETHER_ROPSTEN!;
    default:
      throw new Error('Unsupported platform');
  }
};
