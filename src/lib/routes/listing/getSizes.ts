import { Request, Response } from 'express';

export const getSizes = ({ store }: { store: any }) => {
  return async (req: Request, res: Response) => {
    const { sizeId } = req.query;
    const sizes = await store.getSizes({ sizeId });
    res.json(sizes);
  };
};
