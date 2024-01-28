import { Request, Response } from 'express';

export const getStores = ({ store }: { store: any }) => {
  return async (req: Request, res: Response) => {
    const { storeId } = req.query;
    const stores = await store.getStores({ storeId });
    res.json(stores);
  };
};
