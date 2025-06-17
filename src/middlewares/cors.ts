export const corsOptions = {
    origin: [
        'http://localhost:3600',
        'https://your-production-domain.com'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
    optionsSuccessStatus: 204,
}