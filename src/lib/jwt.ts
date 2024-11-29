import jwt, { JwtPayload } from 'jsonwebtoken';

const isProduction = process.env.NODE_ENV === 'production';
const JWT_SECRET = process.env.JWT_SECRET_KEY || (isProduction ? '' : 'development_secret_12345');


if (!JWT_SECRET) {
    throw new Error('JWT_SECRET_KEY is not defined. Set it in the environment variables.');
}


interface TokenPayload {
    userId: string;
}

export function generateJWTToken(userId: string): string {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
}

// Verify and decode a JWT
export function verifyJWTToken(token: string): TokenPayload {
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload & TokenPayload;
        return { userId: decoded.userId }; // Ensure `userId` is always returned as part of the payload
    } catch (error: any) {
        console.error('JWT verification error:', error.message);

        // Re-throw the error with a user-friendly message
        if (error instanceof jwt.TokenExpiredError) {
            throw new Error('Token has expired');
        } else if (error instanceof jwt.JsonWebTokenError) {
            throw new Error('Invalid token');
        } else {
            throw new Error('Token verification failed');
        }
    }
}
