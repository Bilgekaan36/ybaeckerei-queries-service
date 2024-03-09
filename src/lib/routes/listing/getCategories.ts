import { Request, Response } from 'express';

export const getCategories = ({ store }: { store: any }) => {
  return async (req: Request, res: Response) => {
    const { categoryId } = req.query;
    const categories = await store.getCategories({ categoryId });
    res.json(categories);
  };
};
