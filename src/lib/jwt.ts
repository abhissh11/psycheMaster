import { SignJWT, jwtVerify } from "jose";

const isProduction = process.env.NODE_ENV === "production";
const JWT_SECRET = process.env.JWT_SECRET_KEY || (isProduction ? "" : "development_secret_12345");

if (!JWT_SECRET) {
    throw new Error("JWT_SECRET_KEY is not defined. Set it in the environment variables.");
}

// Use a TextEncoder to transform the secret into a Uint8Array for Edge compatibility
const secretKey = new TextEncoder().encode(JWT_SECRET);

interface TokenPayload {
    userId: string;
}

/**
 * Generate a JWT token
 * @param userId - User's unique identifier
 * @returns JWT token as a string
 */
export async function generateJWTToken(userId: string): Promise<string> {
    return new SignJWT({ userId }) // Add any payload you need
        .setProtectedHeader({ alg: "HS256" }) // Algorithm: HMAC-SHA256
        .setIssuedAt() // Token issued timestamp
        .setExpirationTime("1h") // Token expiration time (e.g., 1 hour)
        .sign(secretKey);
}

/**
 * Verify and decode a JWT
 * @param token - JWT token string
 * @returns Decoded payload if verification succeeds
 * @throws Error if verification fails
 */
export async function verifyJWTToken(token: string): Promise<TokenPayload> {
    try {
        const { payload } = await jwtVerify(token, secretKey); // Verify the token
        if (!payload.userId) {
            throw new Error("Invalid token payload");
        }

        return { userId: payload.userId as string };
    } catch (error: unknown) {
        console.error("JWT verification error:", (error as Error).message);

        // Re-throw the error with a user-friendly message
        if (error instanceof Error) {
            if (error.message.includes("JWT expired")) {
                throw new Error("Token has expired");
            } else if (error.message.includes("invalid token")) {
                throw new Error("Invalid token");
            }
        }

        throw new Error("Token verification failed");
    }
}
