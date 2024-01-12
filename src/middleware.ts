import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";
 
export default authMiddleware({

publicRoutes: ["/"],

  afterAuth() {
    // Allow users visiting public routes to access them
    return NextResponse.next();
  },
});