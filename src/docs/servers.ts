import 'dotenv/config';

const port = process.env.PORT;
const apiServers = {
  servers: [
    {
      url: `http://localhost:${port}/api`,
      description: 'Local Server',
    },
  ],
};

export default apiServers;
