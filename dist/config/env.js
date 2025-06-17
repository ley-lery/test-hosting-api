"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.CONFIG = {
    PORT: Number(process.env.PORT) || 7700,
    JWT_SECRET: String(process.env.JWT_SECRET),
    DB: {
        HOST: process.env.DB_HOST,
        USER: process.env.DB_USER,
        PASSWORD: process.env.DB_PASSWORD,
        DATABASE: process.env.DB_NAME,
        PORT: Number(process.env.DB_PORT) || 3306,
    },
};
