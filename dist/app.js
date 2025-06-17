"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const index_1 = __importDefault(require("./routes/index"));
const cors_2 = require("./middlewares/cors");
const app = (0, fastify_1.default)({
    logger: true,
});
app.register(cors_1.default, cors_2.corsOptions);
app.register(index_1.default);
// Error handling no route found
app.setNotFoundHandler((request, reply) => {
    reply.status(404).send({ error: "Route Not Found" });
});
exports.default = app;
