import jwt, { JwtPayload } from "jsonwebtoken";
import { FastifyReply, FastifyRequest } from "fastify";
import { CONFIG } from "../config/env";

// Define the expected payload structure
interface AuthUserPayload extends JwtPayload {
    user_id: number;
    email: string;
    username: string;
    assign_type: string;
}

interface RequestWithUser extends FastifyRequest {
    user?: AuthUserPayload;
}

const authenticateToken = async (req: RequestWithUser, res: FastifyReply): Promise<void> => {
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
        if (!CONFIG.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined");
        }
        const decoded = jwt.verify(token, CONFIG.JWT_SECRET) as AuthUserPayload;
        req.user = decoded;
    } catch (error) {
        console.error("Token verification failed:", error);
        res.status(401).send({ message: 'Access Denied: Invalid token' });
        return;
    }
};

export { authenticateToken, AuthUserPayload, RequestWithUser };