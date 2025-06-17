"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const env_1 = require("./config/env");
require("./config/db");
const PORT = env_1.CONFIG.PORT || 7700;
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield app_1.default.listen({ port: PORT, host: "0.0.0.0" });
        console.log(`Fastify server is running on http://localhost:${PORT}`);
    }
    catch (err) {
        app_1.default.log.error(err);
        process.exit(1);
    }
});
start().then(r => {
    console.log(`Server started on port ${PORT}`);
}).catch(err => {
    console.error('Error starting server:', err);
    process.exit(1);
});
