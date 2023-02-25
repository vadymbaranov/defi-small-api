import { web3 } from '../config/config';
import { AbiItem } from 'web3-utils';

export async function getBalance(
  abi: AbiItem[], 
  contractAddress: string, 
  walletAddress: string
  ): Promise<string> {

  try {
    const contract = new web3.eth.Contract(abi, contractAddress);
    const coinBalance = await contract.methods.balanceOf(walletAddress).call();
    console.log(coinBalance);

    if (coinBalance > 0 && typeof coinBalance !== 'undefined') {
      const format = web3.utils.fromWei(
        web3.utils.toBN(coinBalance),
        'ether'
      );
    }

    return format;
  } catch(err) {
    console.log(err);
    return 'not found';
  }
}
