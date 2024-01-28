type Constructor<T = any> = new (...args: any[]) => T;

export function listingMethods<T extends Constructor>(
  base: T
): Constructor & T {
  return class extends base {
    constructor(...args: any[]) {
      super(...args);
    }

    async getStores({ storeId }: { storeId: number }) {
      const query = `
            SELECT *
            FROM "Store"
            ${storeId ? 'WHERE "storeId" = $1' : ''};
            `;
      const result = await this.pool.query(query, storeId ? [storeId] : []);
      return result.rows;
    }

    async getOrderStatus() {
      const query = `
            SELECT *
            FROM "OrderStatus";
            `;

      const result = await this.pool.query(query);
      return result.rows;
    }

    async getOrders({ orderId }: { orderId: number }) {
      const query = `
      SELECT *
      FROM "Order"
      ${orderId ? 'WHERE "orderId" = $1' : ''};
      `;

      const result = await this.pool.query(query, orderId ? [orderId] : []);
      return result.rows;
    }

    async getOrderItems({ orderId }: { orderId: number }) {
      const query = `
              SELECT *
              FROM "OrderItem"
              ${orderId ? 'WHERE "orderId" = $1' : ''};
              `;

      const result = await this.pool.query(query, orderId ? [orderId] : []);
      return result.rows;
    }

    async getCategories() {
      const query = `
            SELECT *
            FROM "Category";
            `;

      const result = await this.pool.query(query);
      return result.rows;
    }

    async getVariants() {
      const query = `
            SELECT *
            FROM "Variant";
            `;
      const result = await this.pool.query(query);
      return result.rows;
    }

    async getSizes() {
      const query = `
            SELECT *
            FROM "Size";
            `;
      const result = await this.pool.query(query);
      return result.rows;
    }

    async getImages() {
      const query = `
            SELECT *
            FROM "Image";
            `;
      const result = await this.pool.query(query);
      return result.rows;
    }

    async getBillboards({ billboardId }: { billboardId: number }) {
      const query = `
            SELECT *
            FROM "Billboard"
            ${billboardId ? 'WHERE "billboardId" = $1' : ''};
            `;
      const result = await this.pool.query(
        query,
        billboardId ? [billboardId] : []
      );
      return result.rows;
    }

    async getProducts() {
      const query = `
            SELECT *
            FROM "Product";
            `;
      const result = await this.pool.query(query);
      return result.rows;
    }

    async getCustomers() {
      const query = `
            SELECT *
            FROM "Customer";
            `;
      const result = await this.pool.query(query);
      return result.rows;
    }
  };
}
