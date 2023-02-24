import fs from 'fs/promises';
import path from 'path';
import { Coin } from 'src/types/Coin';
import { FilteredToken } from 'src/types/FilteredToken';

// Best way is to put pathName into environment variable in .env file
// Which should look like this
// const dirName: string = process.env.DIR_NAME || '';
// const fileName: string = process.env.FILE_NAME || '';
export const dirName: string = 'src/config';
       const fileName: string = 'coins-list-unsorted.json';
export const resultFileName: string = 'ERC20-coins.json';


export async function getERC20() {
  const filePath: string = path.resolve(dirName, fileName);
  const resultFilePath: string = path.resolve(dirName, resultFileName);
  const data = await fs.readFile(filePath, 'utf-8');
  const parsedData: Coin[] = JSON.parse(data);
  const tokens: FilteredToken[] = parsedData
    .filter(item => item.platforms.ethereum && item.platforms.ethereum.includes('0x'))
    .map(({ name, platforms: { ethereum } }) => ({ name, platforms: { ethereum }}));

  return await fs.writeFile(resultFilePath, JSON.stringify(tokens));
}

// getERC20();
