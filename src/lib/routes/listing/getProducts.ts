import { Request, Response } from 'express';

export const getProducts = ({ store }: { store: any }) => {
  return async (req: Request, res: Response) => {
    const products = await store.getProducts();

    res.json(products);
  };
};
