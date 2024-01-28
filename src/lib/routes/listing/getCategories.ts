import { Request, Response } from 'express';

export const getCategories = ({ store }: { store: any }) => {
  return async (req: Request, res: Response) => {
    const categories = await store.getCategories();

    res.json(categories);
  };
};
