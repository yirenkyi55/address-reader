import config from 'config';

const port = config.get<number>('port');
const apiServers = {
  servers: [
    {
      url: `http://localhost:${port}/api`,
      description: 'Local Server',
    },
  ],
};

export default apiServers;
