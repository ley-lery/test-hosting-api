"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showValidationError = exports.showValidation = exports.notFoundResponse = exports.sendSuccessResponse = exports.handleError = void 0;
const zod_1 = require("zod");
const handleError = (res, error, message = "An error occurred", statusCode = 500) => {
    console.log(error);
    res.status(statusCode).send({
        error: error.message || "Internal Server Error",
        message: message,
    });
};
exports.handleError = handleError;
const sendSuccessResponse = (res, success, message, data, statusCode = 200) => {
    res.status(statusCode).send({
        success: success,
        message: message,
        data: data,
    });
};
exports.sendSuccessResponse = sendSuccessResponse;
const notFoundResponse = (res, success, message, statusCode = 200, id) => {
    res.status(statusCode).send(Object.assign(Object.assign({}, (id !== undefined && { id })), { success,
        message }));
};
exports.notFoundResponse = notFoundResponse;
const showValidation = (err, res) => {
    if (err instanceof Error && err.message.startsWith("{")) {
        return res.send({
            success: false,
            message: "Validation failed",
            errors: JSON.parse(err.message)
        });
    }
};
exports.showValidation = showValidation;
const showValidationError = (error, rp) => {
    if (error instanceof zod_1.ZodError) {
        // Format validation errors
        const formattedErrors = error.errors.map(err => ({
            path: err.path.join('.'),
            message: err.message,
        }));
        return rp.status(400).send({
            success: false,
            message: "Validation failed",
            errors: formattedErrors,
        });
    }
};
exports.showValidationError = showValidationError;
