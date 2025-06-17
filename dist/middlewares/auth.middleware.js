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
exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../config/env");
const authenticateToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.headers.authorization || '';
    if (!authHeader.startsWith('Bearer ')) {
        res.status(401).send({ message: "Access Denied: Invalid token format" });
        return;
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        res.status(401).send({ message: 'Access Denied: No token provided' });
        return;
    }
    try {
        if (!env_1.CONFIG.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined");
        }
        const decoded = jsonwebtoken_1.default.verify(token, env_1.CONFIG.JWT_SECRET);
        req.user = decoded;
    }
    catch (error) {
        console.error("Token verification failed:", error);
        res.status(401).send({ message: 'Access Denied: Invalid token' });
        return;
    }
});
exports.authenticateToken = authenticateToken;
