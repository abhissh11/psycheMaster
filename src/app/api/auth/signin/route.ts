import { connectToDatabase } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { generateJWTToken } from "@/lib/jwt";

// Ensure API key is defined at runtime
const VALID_API_KEY = process.env.API_KEY;
if (!VALID_API_KEY) {
    throw new Error("API_KEY is not set in the environment variables.");
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        console.log('Received request body:', JSON.stringify(body));

        // Validate API Key
        const apiKeyBuffer = Buffer.from(VALID_API_KEY!, "utf-8");
        const bodyApiKeyBuffer = Buffer.from(body.apiKey || "", "utf-8");

        console.log('Validating API key...');
        if (!body.apiKey || bodyApiKeyBuffer.length !== apiKeyBuffer.length || !crypto.timingSafeEqual(apiKeyBuffer, bodyApiKeyBuffer)) {
            console.log('API key validation failed');
            return NextResponse.json(
                { message: "Invalid API Key!" },
                { status: 403 }
            );
        }

        console.log('API key validated successfully');

        // Validate email and password input
        if (!body.email || !body.password) {
            return NextResponse.json(
                { error: 'Email and password are required' },
                { status: 400 }
            );
        }

        // Connect to the database
        const { db } = await connectToDatabase();

        // Find user by email
        const user = await db.collection('users').findOne({ email: body.email });

        if (!user) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        // Compare the provided password with the hashed password in the database
        const isValidPassword = await bcrypt.compare(body.password, user.password);

        if (!isValidPassword) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }

        // Generate JWT token for the authenticated user
        const token = generateJWTToken(user._id.toString());

        return NextResponse.json(
            { message: 'Signed in successfully', token },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error during sign-in:', error);
        return NextResponse.json(
            { error: 'An unexpected error occurred' },
            { status: 500 }
        );
    }
}
