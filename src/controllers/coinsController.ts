import { Request, Response } from 'express';
import { getAllCoinBalance } from '../services/coinsService';

export const getWalletBalance = async (req: Request, res: Response) => {
  const { address } = req.params;
  console.log(address);
  const coins = await getAllCoinBalance(String(address));

  res.send(coins);
}

// export const getOne = async (req: Request, res: Response) => {
//   const { goodId } = req.params;
//   const foundGood = await goodsService.getGoodById(+goodId);

//   if (!foundGood) {
//     res.sendStatus(404);
//     return;
//   }

//   res.send(foundGood);
// }

// export const add = async (req: Request, res: Response) => {
//   const { name, colorId } = req.body;

//   if (!name || !colorId) {
//     res.sendStatus(422);
//     return;
//   }

//   const newGood = await goodsService.addGood(name, colorId);

//   res.statusCode = 201;
//   res.json(newGood);
// }

// export const remove = async (req: Request, res: Response) => {
//   const { goodId } = req.params;
//   const foundGood = await goodsService.getGoodById(+goodId);

//   if (!foundGood) {
//     res.sendStatus(404);
//     return;
//   }

//   await goodsService.removeGood(+goodId);
//   res.sendStatus(204);
// }
