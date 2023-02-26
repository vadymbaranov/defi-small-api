import express from 'express';
import cors from 'cors';
import { coinsRouter } from './routes/coinsRouter';
import { balanceJob } from './helpers/balanceJob';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/', coinsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http:/localhost:${PORT}`)
});

balanceJob();
