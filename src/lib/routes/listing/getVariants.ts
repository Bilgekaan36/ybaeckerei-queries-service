import { Request, Response } from 'express';

export const getVariants = ({ store }: { store: any }) => {
  return async (req: Request, res: Response) => {
    const variants = await store.getVariants();

    res.json(variants);
  };
};
