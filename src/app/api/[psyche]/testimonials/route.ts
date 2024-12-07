import { connectToDatabase } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { verifyJWTToken } from "@/lib/jwt";

export const config = {
    runtime: "edge",
};

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, testimonial } = body;

        const token = req.cookies.get("token")?.value;

        // If no token is present, return an error response
        if (!token) {
            return NextResponse.json(
                { error: "Authorization token is required" },
                { status: 403 }
            );
        }

        try {
            await verifyJWTToken(token);

        } catch (error) {
            return NextResponse.json(
                { error: "Invalid or expired token" },
                { status: 403 }
            );
        }

        if (!name || !testimonial) {
            return NextResponse.json(
                { error: "Both name and testimonial are required." },
                { status: 400 }
            );
        }

        const { db } = await connectToDatabase();

        // Insert the testimonial into the "testimonials" collection
        const result = await db.collection("testimonials").insertOne({
            name,
            testimonial,
            createdAt: new Date(),
        });

        return NextResponse.json(
            { message: "Testimonial uploaded successfully!", testimonialId: result.insertedId },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error uploading testimonial:", error);
        return NextResponse.json(
            { error: "An unexpected error occurred while uploading the testimonial." },
            { status: 500 }
        );
    }
}


//GET Testimonials

export async function GET(req: NextRequest) {
    try {
        const { db } = await connectToDatabase();

        const testimonials = await db.collection("testimonials").find().toArray();

        return NextResponse.json(
            { testimonials },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching testimonials:", error);
        return NextResponse.json(
            { error: "An unexpected error occurred while fetching testimonials." },
            { status: 500 }
        );
    }
}



// Testimonial DELETE route 
export async function DELETE(req: NextRequest) {
    try {
        const token = req.cookies.get("token")?.value;

        if (!token) {
            return NextResponse.json(
                { error: "Authorization token is required" },
                { status: 403 }
            );
        }

        try {
            await verifyJWTToken(token);

        } catch (error) {
            return NextResponse.json(
                { error: "Invalid or expired token" },
                { status: 403 }
            );
        }


        const { testimonialId } = await req.json();

        if (!testimonialId) {
            return NextResponse.json(
                { error: "Testimonial ID is required" },
                { status: 400 }
            );
        }

        const { db } = await connectToDatabase();

        // Delete the testimonial by its ID
        const result = await db.collection("testimonials").deleteOne({ _id: testimonialId });

        if (result.deletedCount === 0) {
            return NextResponse.json(
                { error: "Testimonial not found or already deleted" },
                { status: 404 }
            );
        }

        // Return success response
        return NextResponse.json(
            { message: "Testimonial deleted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error deleting testimonial:", error);
        return NextResponse.json(
            { error: "An unexpected error occurred while deleting the testimonial." },
            { status: 500 }
        );
    }
}