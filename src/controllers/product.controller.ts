import { FastifyReply, FastifyRequest } from "fastify";
import productModel from "../models/product.model";

class ProductController {
    async getAll(res: FastifyRequest, rp: FastifyReply) {
        try {
            const products = await productModel.getAll();
            return rp.status(200).send(products);
        } catch (error) {
            console.error("Error fetching products:", error);
            return rp.status(500).send({ error: "Internal Server Error" });
        }
    }
}

export default new ProductController();
