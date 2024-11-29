import { connectToDatabase } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import { generateJWTToken } from "@/lib/jwt";


// interface signinBody {
//     email: string;
//     password: string;
// }

export async function POST(req: NextRequest) {
    const body = await req.json();

    if (!body.email || !body.password) {
        return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    const { db } = await connectToDatabase();

    try {
        const user = await db.collection('users').findOne({ email: body.email });

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        const isValidPassword = await bcrypt.compare(body.password, user.password);

        if (!isValidPassword) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        //jwt token
        const token = generateJWTToken(user._id);

        return NextResponse.json(
            { message: 'Signed in successfully', token },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error during signin:', error);
        return NextResponse.json({ error: 'An unexpected error occured' }, { status: 500 });
    }
}

