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
exports.db = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const env_1 = require("./env");
exports.db = promise_1.default.createPool({
    host: env_1.CONFIG.DB.HOST,
    user: env_1.CONFIG.DB.USER,
    password: env_1.CONFIG.DB.PASSWORD,
    database: env_1.CONFIG.DB.DATABASE,
    port: env_1.CONFIG.DB.PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield exports.db.getConnection();
        console.log("Database connection established successfully.");
    }
    catch (error) {
        console.error("Error connecting to the database:", error);
    }
}))();
