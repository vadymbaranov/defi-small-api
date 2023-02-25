import cron from 'node-cron';
import { getCoinBalanceFromTestWallet } from 'src/services/coinsService';
import { FIRST_TEST_WALLET_ADDRESS } from 'src/config/config';

cron.schedule('* * * * *', function() {
  console.log('Running balance job every minute');
  getCoinBalanceFromTestWallet(FIRST_TEST_WALLET_ADDRESS);
});
