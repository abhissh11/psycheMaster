import { NextRequest, NextResponse } from "next/server";
import { ALLOWED_ORIGINS } from "./constants/config";

export function middleware(request: NextRequest) {
    const origin = request.headers.get("origin");

    if (!origin) {
        return NextResponse.next();
    }

    // Validate the origin against allowed origins
    if (!ALLOWED_ORIGINS.includes(origin)) {
        return NextResponse.json(
            { error: "CORS policy error: Origin not allowed" },
            { status: 403 }
        );
    }

    const response = NextResponse.next();

    // Handle preflight requests (OPTIONS method)
    if (request.method === "OPTIONS") {
        response.headers.set("Access-Control-Allow-Origin", origin);
        response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        response.headers.set(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization"
        );
        response.headers.set("Access-Control-Max-Age", "86400");
        return response;
    }

    // For non-OPTIONS requests, set CORS headers
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set("Access-Control-Allow-Credentials", "true");

    return response;



}
