import express from 'express';
import cors from 'cors';
// import { getERC20 } from './helpers/getERC20Tokens';
import { coinsRouter } from './routes/coinsRouter';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/', coinsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http:/localhost:${PORT}`)
});

// getERC20();
