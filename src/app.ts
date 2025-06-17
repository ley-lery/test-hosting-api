import fastify from "fastify";
import cors from "@fastify/cors";
import routes from "./routes/index";
import { corsOptions } from "./middlewares/cors";

const app = fastify({
    logger: true,
});
app.register(cors, corsOptions);
app.register(routes);

// Error handling no route found
app.setNotFoundHandler((request, reply) => {
    reply.status(404).send({ error: "Route Not Found" });
});

export default app;
