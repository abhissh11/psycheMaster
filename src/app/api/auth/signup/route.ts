import { connectToDatabase } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { User } from "@/lib/schema";

// Ensure API key is defined at runtime
const VALID_API_KEY = process.env.API_KEY;
if (!VALID_API_KEY) {
    throw new Error("API_KEY is not set in the environment variables.");
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        console.log("Received request body:", JSON.stringify(body));

        // Validate API Key
        if (!body.apiKey || body.apiKey !== VALID_API_KEY) {
            console.log("API key validation failed");
            return NextResponse.json(
                { message: "Invalid API Key!" },
                { status: 403 }
            );
        }

        console.log("API key validated successfully");

        // Validate Input
        if (!body.email || !body.password) {
            return NextResponse.json(
                { error: "Email and password are required" },
                { status: 400 }
            );
        }

        if (!/^\S+@\S+\.\S+$/.test(body.email)) {
            return NextResponse.json(
                { error: "Invalid email format" },
                { status: 400 }
            );
        }

        if (body.password.length < 8) {
            return NextResponse.json(
                { error: "Password must be at least 8 characters long" },
                { status: 400 }
            );
        }

        // Connect to Database
        const { db } = await connectToDatabase();

        // Check for Existing User
        const existingUser = await db.collection<User>("users").findOne({
            email: body.email,
        });

        if (existingUser) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 409 }
            );
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(body.password, 10);

        // Create New User
        const newUser: Omit<User, "_id"> = {
            email: body.email,
            password: hashedPassword,
            createdAt: new Date(),
        };

        const result = await db.collection<User>("users").insertOne(newUser);

        console.log("User created successfully");

        // Return Success Response
        return NextResponse.json(
            {
                message: "User created successfully",
                userId: result.insertedId,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error during signup:", error);
        return NextResponse.json(
            { error: "An unexpected error occurred" },
            { status: 500 }
        );
    }
}
