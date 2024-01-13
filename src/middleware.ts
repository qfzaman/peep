import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";
 
export default authMiddleware({

publicRoutes: ["/"],

  afterAuth(auth, req) {
    // // Handle users who aren't authenticated
    // if (!auth.userId && !auth.isPublicRoute) {
    //   return NextResponse.redirect(new URL("/", req.url));
    // }
    // If the user is logged in and trying to access a protected route, allow them to access route
    if (auth.userId && !auth.isPublicRoute) {
      return NextResponse.next();
    }
    // Allow users visiting public routes to access them
    return NextResponse.next();
  },
});