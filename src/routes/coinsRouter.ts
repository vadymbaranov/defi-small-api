import express from 'express';
import { getWalletBalance } from '../controllers/coinsController';

export const coinsRouter = express.Router();

coinsRouter.get('/coins/balance', (req, res) => {
  res.status(404).send('Please check if you entered the wallet address.');
});
coinsRouter.get('/coins/balance/:address', getWalletBalance);
