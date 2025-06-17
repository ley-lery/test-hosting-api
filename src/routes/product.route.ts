import { FastifyInstance } from "fastify";
import ProgramController from "../controllers/product.controller";
export const productRoutes = async (fastify: FastifyInstance): Promise<void> => {
    fastify.get("/list", ProgramController.getAll);
};
