import { Request, Response } from 'express';

export const getOrders = ({ store }: { store: any }) => {
  return async (req: Request, res: Response) => {
    const { orderId } = req.query;
    const orders = await store.getOrders({ orderId });
    res.json(orders);
  };
};
