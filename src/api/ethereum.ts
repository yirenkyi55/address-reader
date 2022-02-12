import axios from 'axios';

const etherApiKey = process.env.ETHER_API_KEY;
const ethereum = axios.create({
  params: {
    apiKey: etherApiKey,
  },
});

export default ethereum;
