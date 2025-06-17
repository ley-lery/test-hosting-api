import { FastifyInstance } from "fastify";
import { productRoutes } from "./product.route";

export default async function (fastify: FastifyInstance) {
    fastify.register(productRoutes, { prefix: "v1/api/product" });
}
