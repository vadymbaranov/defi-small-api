import { Request, Response } from 'express';
import { isValid } from '../helpers/isValidAddress';
import { getCoinBalanceFromTestWallet, getCoinBalanceFromWhaleWallet } from '../services/coinsService';
import { FIRST_TEST_WALLET_ADDRESS, SECOND_TEST_WALLET_ADDRESS } from '../config/config';

export const getWalletBalance = async (req: Request, res: Response) => {
  const { address } = req.params;

  const validEthereumAddress = await isValid(address);
  console.log(validEthereumAddress);

  if (!validEthereumAddress) {
    res.status(400).send('Please check the wallet address entered. The server accepts only Ethereum network addresses.')

    return;
  }

  if (address.length !== 42) {
    res.status(400).send('Please check the length of wallet address entered. The address length should be 42 characters.')

    return;
  }

  if (address.includes(FIRST_TEST_WALLET_ADDRESS)) {
    const coins = await getCoinBalanceFromTestWallet(String(address));

    res.send(coins);
  }

  if (address.includes(SECOND_TEST_WALLET_ADDRESS)) {
    const coins = await getCoinBalanceFromWhaleWallet(String(address));

    res.send(coins);
  }

  return;
}
