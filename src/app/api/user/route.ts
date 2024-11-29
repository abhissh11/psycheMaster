import { NextResponse } from 'next/server';
// import { connectToDatabase } from '@/lib/db';

export async function GET() {
    // const { db } = await connectToDatabase();
    // const collection = db.collection('test');

    // const result = await collection.insertOne({ message: 'Hello from Next.js!' });

    return NextResponse.json({ message: 'Hello from PsycheMaster' })

    // return NextResponse.json({ message: 'hello from PsycheMaster', id: result.insertedId }, { status: 201 });
}
