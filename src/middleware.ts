import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAuthenticated = true; //authenticate(request);

  // If the user is authenticated, continue as normal
  if (isAuthenticated) {
    return NextResponse.next();
  }

  // Redirect to login page if not authenticated
  return NextResponse.redirect(
    new URL("/login?error=Area Privata", request.url)
  );
}

export const config = {
  matcher: "/dashboard/:path*",
};
