import { NextResponse } from "next/server";

export const config = {
    runtime: "edge", // Edge runtime for compatibility
};

// Sign-out route
export async function POST() {
    try {
        // Clear the token cookie
        const response = NextResponse.json(
            { message: "Signed out successfully" },
            { status: 200 }
        );

        response.cookies.set("token", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            sameSite: "strict",
            expires: new Date(0), // Expire immediately
        });

        return response;
    } catch (error) {
        console.error("Error during sign-out:", error);
        return NextResponse.json(
            { error: "An unexpected error occurred" },
            { status: 500 }
        );
    }
}
