import { Request, Response } from 'express';
import { z } from 'zod';

export const registerBillboard = ({ store }: { store: any }) => {
  return async (req: Request, res: Response) => {
    const { billboardTitle, billboardImageUrl } = req.body;

    const BillboardSchema = z.object({
      billboardTitle: z.string(),
      billboardImageUrl: z.string(),
    });

    try {
      const validatedBillboard = BillboardSchema.parse({
        billboardTitle,
        billboardImageUrl,
      });
      await store.registerBillboard(validatedBillboard);
    } catch (err: any) {
      return res.status(400).end();
    }

    res.json({ billboardTitle });
  };
};
