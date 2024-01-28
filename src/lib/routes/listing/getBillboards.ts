import { Request, Response } from 'express';

export const getBillboards = ({ store }: { store: any }) => {
  return async (req: Request, res: Response) => {
    const { billboardId } = req.query;
    const billboards = await store.getBillboards({ billboardId });
    res.json(billboards);
  };
};
