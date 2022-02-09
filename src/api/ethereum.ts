import axios from 'axios';
import config from 'config';

const etherApiKey = config.get<string>('etherApiKey');

const ethereum = axios.create({
  params: {
    apiKey: etherApiKey,
  },
});

export default ethereum;
