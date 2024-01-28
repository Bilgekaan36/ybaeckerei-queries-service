import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { getStores } from './routes/listing/getStores';
import { getCategories } from './routes/listing/getCategories';
import { getBillboards } from './routes/listing/getBillboards';
import { getVariants } from './routes/listing/getVariants';
import { getImages } from './routes/listing/getImages';
import { getProducts } from './routes/listing/getProducts';
import { getSizes } from './routes/listing/getSizes';
import { getCustomers } from './routes/listing/getCustomers';
import { getOrderStatus } from './routes/listing/getOrderStatus';
import { getOrders } from './routes/listing/getOrders';
import { getOrderItems } from './routes/listing/getOrderItems';

export const getApi = ({ store }: { store: any }) => {
  const api = express();

  api.use(cors());
  api.use(bodyParser.json());

  // Queries API
  api.get('/listing/stores?:storeId', getStores({ store }));
  api.get('/listing/categories', getCategories({ store }));
  api.get('/listing/billboards?:billboardId', getBillboards({ store }));
  api.get('/listing/variants', getVariants({ store }));
  api.get('/listing/images', getImages({ store }));
  api.get('/listing/products', getProducts({ store }));
  api.get('/listing/sizes', getSizes({ store }));
  api.get('/listing/customers', getCustomers({ store }));
  api.get('/listing/orderStatus', getOrderStatus({ store }));
  api.get('/listing/orderItems?:orderId', getOrderItems({ store }));
  api.get('/listing/orders?:orderId', getOrders({ store }));

  return api;
};
