import cron from 'node-cron';
import { getCoinBalanceFromTestWallet } from '../services/coinsService';
import { FIRST_TEST_WALLET_ADDRESS } from '../config/config';

let getCoinBalanceRunning = false;

async function runGetCoinBalance() {
  if (!getCoinBalanceRunning) {
    getCoinBalanceRunning = true;
    await getCoinBalanceFromTestWallet(FIRST_TEST_WALLET_ADDRESS);
    getCoinBalanceRunning = false;
  } else {
    return;
  }
}

export function balanceJob() {
  cron.schedule('* * * * *', function() {
    console.log('Running balance job every minute');
    runGetCoinBalance();
  });
}

