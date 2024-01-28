import { Request, Response } from 'express';

export const getOrderItems = ({ store }: { store: any }) => {
  return async (req: Request, res: Response) => {
    const { orderId } = req.query;
    const orderItems = await store.getOrderItems({ orderId });
    res.json(orderItems);
  };
};
