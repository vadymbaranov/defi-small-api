import fs from 'fs/promises';
import path from 'path';
import { AbiItem } from 'web3-utils';
import { web3, balanceOfAbi } from '../config/config';
// import { getBalance } from '../helpers/getCoinBalance';
import { dirName, resultFileName } from '../helpers/getERC20Tokens';
import { walletDirName, walletFileName } from '../config/config';
import { FilteredToken } from '../types/FilteredToken';
import { WalletToken } from 'src/types/WalletToken';

export const getAllCoinBalance = async (address: string) => {
  const coinListFilePath: string = path.resolve(dirName, resultFileName);
  const data = await fs.readFile(coinListFilePath, 'utf-8');
  const parsedData: FilteredToken[] = JSON.parse(data);
  const walletFilePath: string = path.resolve(walletDirName, walletFileName);
  const result: WalletToken[] = [];

  parsedData.forEach(async({ name, platforms: { ethereum }}) => {
    const contract = new web3.eth.Contract(balanceOfAbi as AbiItem[], ethereum);
    const coinBalance = await contract.methods.balanceOf(address).call().catch(console.log);
    console.log(coinBalance);

    if (coinBalance > 0) {
      const balance = web3.utils.fromWei(
        web3.utils.toBN(coinBalance),
        'ether'
      );

      const amount: WalletToken = {
        name,
        contract: ethereum,
        balance,
      };

      result.push(amount);
      console.log(result);
    }



    // const balance = await getBalance(balanceOfAbi as AbiItem[], ethereum, address);
  });

  const ETHbalance = await web3.eth.getBalance(address, (err, bal) => {
    const balance = web3.utils.fromWei(bal, 'ether');
    return balance;
  });

  const native = {
    name: 'ETH',
    contract: '',
    balance: ETHbalance,
  };

  result.push(native);

  await fs.writeFile(walletFilePath, JSON.stringify(result));

  return result;
}

// export const getGoodById = async (goodId: number) => {
//   return Good.findByPk(goodId);
// }

// export const addGood = async (name: string, colorId: number) => {
//   const newGood = {
//     name,
//     colorId,
//   }

//   return Good.create(newGood);
// }

// export const removeGood = async (goodId: number) => {
//   return Good.destroy({
//     where: {
//       id: goodId,
//     }
//   });
// }
