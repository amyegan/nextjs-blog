// middleware.ts
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("***href", request.nextUrl.href);
  console.log("***origin", request.nextUrl.origin);
  console.log("***host", request.nextUrl.host);
  console.log("***hostname", request.nextUrl.hostname);
  console.log("***href", request.nextUrl.href);
  return NextResponse.redirect(new URL("/blog", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/",
};
