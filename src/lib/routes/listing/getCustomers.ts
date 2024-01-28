import { Request, Response } from 'express';

export const getCustomers = ({ store }: { store: any }) => {
  return async (req: Request, res: Response) => {
    const customers = await store.getCustomers();

    res.json(customers);
  };
};
