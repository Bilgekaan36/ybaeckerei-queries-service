import { Request, Response } from 'express';

export const getSizes = ({ store }: { store: any }) => {
  return async (req: Request, res: Response) => {
    const sizes = await store.getSizes();

    res.json(sizes);
  };
};
