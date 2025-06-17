import { db } from "../config/db";

class ProductModel {
    async getAll(): Promise<any[]> {
        return await db.query("SELECT * FROM product");
    }
}

export default new ProductModel();
