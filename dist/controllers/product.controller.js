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
const product_model_1 = __importDefault(require("../models/product.model"));
const response_1 = require("../utils/response");
class ProductController {
    getAll(res, rp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield product_model_1.default.getAll();
                if (products[0].length === 0) {
                    return rp.status(404).send({ message: "No products found" });
                }
                return (0, response_1.sendSuccessResponse)(rp, true, "Products fetched successfully", {
                    rows: products[0],
                });
            }
            catch (error) {
                console.error("Error fetching products:", error);
                return rp.status(500).send({ error: "Internal Server Error" });
            }
        });
    }
}
exports.default = new ProductController();
