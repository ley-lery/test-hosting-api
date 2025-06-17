import { FastifyReply, FastifyRequest } from "fastify";
import productModel from "../models/product.model";
import { sendSuccessResponse } from "../utils/response";

class ProductController {
    async getAll(res: FastifyRequest, rp: FastifyReply) {
        try {
            const products = await productModel.getAll();
            if (products[0].length === 0) {
                return rp.status(404).send({ message: "No products found" });
            }
            return sendSuccessResponse(rp, true, "Products fetched successfully", {
                rows: products[0],
            });
        } catch (error) {
            console.error("Error fetching products:", error);
            return rp.status(500).send({ error: "Internal Server Error" });
        }
    }
}

export default new ProductController();
