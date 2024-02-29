import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let cookie = request.cookies.get("token");
  console.log("cookie", cookie);
  return NextResponse.next();
  if (cookie && cookie.value === "valid") {
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// export { default } from "next-auth/middleware";

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:path*",
};
