import { Request, Response } from 'express';

export const getImages = ({ store }: { store: any }) => {
  return async (req: Request, res: Response) => {
    const images = await store.getImages();

    res.json(images);
  };
};
