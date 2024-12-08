import { connectToDatabase } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { verifyJWTToken } from "@/lib/jwt";
import { ObjectId } from "mongodb";

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
            console.log("Error while uploading testimonial: ", error);
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


// GET Testimonials
export async function GET() {
    try {
        const { db } = await connectToDatabase();

        // Fetch testimonials and sort by createdAt in descending order (newest first)
        const testimonials = await db
            .collection("testimonials")
            .find()
            .sort({ createdAt: -1 }) // -1 for descending order
            .toArray();

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
        // Get the token from cookies
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
            console.error("Error while verifying JWT token:", error);
            return NextResponse.json(
                { error: "Invalid or expired token" },
                { status: 403 }
            );
        }

        // Get testimonial ID from request body
        const { testimonialId } = await req.json();

        if (!testimonialId || typeof testimonialId !== "string") {
            return NextResponse.json(
                { error: "Testimonial ID must be a valid string" },
                { status: 400 }
            );
        }

        // Connect to the database
        const { db } = await connectToDatabase();

        // Delete the testimonial by its ID
        const result = await db.collection("testimonials").deleteOne({ _id: new ObjectId(testimonialId) });

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