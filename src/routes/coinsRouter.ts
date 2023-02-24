import express from 'express';
import { getWalletBalance } from '../controllers/coinsController';

export const coinsRouter = express.Router();

coinsRouter.get('/coins/balance', (req, res) => {
  res.end('Looking for address');
});
coinsRouter.get('/coins/balance/:address', getWalletBalance);
