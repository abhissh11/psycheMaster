import { connectToDatabase } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'


// interface SignupBody {
//     email: string;
//     password: string;
// }

export async function POST(req: NextRequest) {
    const body = await req.json();

    if (!body.email || !body.password) {
        return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }

    const { db } = await connectToDatabase();

    try {
        const existingUser = await db.collection('users').findOne({ email: body.email });

        if (existingUser) {
            return NextResponse.json({ error: 'User already exists' }, { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(body.password, 10);

        const newUser = {
            email: body.email,
            password: hashedPassword,
            createdAt: new Date()
        }

        const result = await db.collection('users').insertOne(newUser);

        return NextResponse.json(
            { message: 'User created successfully', userId: result.insertedId },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error during signup:', error);
        return NextResponse.json({ error: 'An unexpected error occured' }, { status: 500 });
    }
}