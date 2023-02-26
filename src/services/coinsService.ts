import fs from 'fs/promises';
import path from 'path';
import { AbiItem } from 'web3-utils';
import { web3, balanceOfAbi } from '../config/config';
import { dirName, resultFileName } from '../helpers/getERC20Tokens';
import { walletDirName, walletFileName, whaleWalletFileName } from '../config/config';
import { FilteredToken } from '../types/FilteredToken';
import { WalletToken } from 'src/types/WalletToken';

export const getCoinBalanceFromTestWallet = async (address: string) => {
  const coinListFilePath: string = path.resolve(dirName, resultFileName);
  const data = await fs.readFile(coinListFilePath, 'utf-8');
  const parsedData: FilteredToken[] = JSON.parse(data);
  const walletFilePath: string = path.resolve(walletDirName, walletFileName);
  const result: WalletToken[] = [];

  parsedData.forEach(async({ name, platforms: { ethereum }}) => {
    const contract = new web3.eth.Contract(balanceOfAbi as AbiItem[], ethereum);
    const coinBalance = await contract.methods.balanceOf(address).call().catch(console.log);

    if (coinBalance > 0 && typeof coinBalance !== 'undefined') {
      const balance = web3.utils.fromWei(
        web3.utils.toBN(coinBalance),
        'ether'
      );

      const amount: WalletToken = {
        name,
        contract: ethereum,
        balance,
        dateFetched: new Date(),
      };

      result.push(amount);
    }
  });

  const ETHbalance = await web3.eth.getBalance(address);
  const nativeBalance = web3.utils.fromWei(
    web3.utils.toBN(ETHbalance),
    'ether'
  )

  const native = {
    name: 'ETH',
    contract: '',
    balance: nativeBalance,
    dateFetched: new Date(),
  };

  result.push(native);

  await fs.writeFile(walletFilePath, JSON.stringify(result));

  return result;
}

// This funciton violates the DRY principles, but I thought it would be easier to understand that if I included it as an if statement in the main function

export const getCoinBalanceFromWhaleWallet = async (address: string) => {
  const coinListFilePath: string = path.resolve(dirName, resultFileName);
  const data = await fs.readFile(coinListFilePath, 'utf-8');
  const parsedData: FilteredToken[] = JSON.parse(data);
  const walletFilePath: string = path.resolve(walletDirName, whaleWalletFileName);
  const result: WalletToken[] = [];

  parsedData.forEach(async({ name, platforms: { ethereum }}) => {
    const contract = new web3.eth.Contract(balanceOfAbi as AbiItem[], ethereum);
    const coinBalance = await contract.methods.balanceOf(address).call().catch(console.log);

    if (coinBalance > 0 && typeof coinBalance !== 'undefined') {
      const balance = web3.utils.fromWei(
        web3.utils.toBN(coinBalance),
        'ether'
      );

      const amount: WalletToken = {
        name,
        contract: ethereum,
        balance,
        dateFetched: new Date(),
      };

      result.push(amount);
    }
  });

  const ETHbalance = await web3.eth.getBalance(address);
  const nativeBalance = web3.utils.fromWei(
    web3.utils.toBN(ETHbalance),
    'ether'
  )

  const native = {
    name: 'ETH',
    contract: '',
    balance: nativeBalance,
    dateFetched: new Date(),
  };

  result.push(native);

  await fs.writeFile(walletFilePath, JSON.stringify(result));

  return result;
}
