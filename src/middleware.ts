import { NextRequest, NextResponse } from "next/server";
import { ALLOWED_ORIGINS } from "./constants/config";
import { verifyJWTToken } from "./lib/jwt";

export function middleware(request: NextRequest) {
    const origin = request.headers.get("origin");

    // Handle CORS
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
        return NextResponse.json(
            { error: "CORS policy error: Origin not allowed" },
            { status: 403 }
        );
    }

    const response = NextResponse.next();

    // Handle preflight requests
    if (request.method === "OPTIONS") {
        response.headers.set("Access-Control-Allow-Origin", origin || "*");
        response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
        response.headers.set("Access-Control-Max-Age", "86400");
        return response;
    }

    // Set CORS headers for other requests
    if (origin) {
        response.headers.set("Access-Control-Allow-Origin", origin);
        response.headers.set("Access-Control-Allow-Credentials", "true");
    }

    const token = request.cookies.get("token")?.value;

    const protectedRoutes = ["/admin-dashboard"];
    const pathName = request.nextUrl.pathname;

    if (protectedRoutes.some((route) => pathName.startsWith(route))) {
        if (!token) {
            console.log("No token found");
            return NextResponse.redirect(new URL("/auth/signin", request.url));
        }

        try {
            const decodedToken = verifyJWTToken(token);

            if (!decodedToken) {
                console.log("Invalid token");
                return NextResponse.redirect(new URL("/auth/signin", request.url));
            }
        } catch (error) {
            console.error("JWT verification error:", error);
            return NextResponse.redirect(new URL("/auth/signin", request.url));
        }
    } else if (pathName === "/auth/signin" && token) {
        // Redirect to dashboard if already authenticated
        return NextResponse.redirect(new URL("/admin-dashboard", request.url));
    }


}