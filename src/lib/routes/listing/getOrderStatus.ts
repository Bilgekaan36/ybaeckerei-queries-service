import { Request, Response } from 'express';

export const getOrderStatus = ({ store }: { store: any }) => {
  return async (req: Request, res: Response) => {
    const orderStates = await store.getOrderStatus();

    res.json(orderStates);
  };
};
