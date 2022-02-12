import express, { Request, Response } from 'express';
import swaggerUI from 'swagger-ui-express';
import cors from 'cors';
import 'dotenv/config';

import docs from './docs';
import logger from './utils/logger';
import etherRouter from './routes/ether';

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

console.log(process.env);
app.get('/', (req: Request, res: Response) => {
  return res.status(200).send({ message: 'API is up and running!' });
});

app.use('/api/ethers', etherRouter);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

app.listen(port, async () => {
  logger.info(`Started API at port ${port}`);
});
