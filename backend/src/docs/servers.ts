import 'dotenv/config';

const port = process.env.PORT;
const apiServers = {
  servers: [
    {
      url: 'https://eth-reader.herokuapp.com/api',
      description: 'Staging',
    },
    {
      url: `http://localhost:${port}/api`,
      description: 'Local Server',
    },
  ],
};

export default apiServers;
