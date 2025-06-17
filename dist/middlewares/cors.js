"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = void 0;
exports.corsOptions = {
    origin: [
        'http://localhost:3600',
        'https://your-production-domain.com'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
    optionsSuccessStatus: 204,
};
