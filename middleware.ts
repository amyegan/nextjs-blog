import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
 
// Trigger this middleware to run on the `/secret-page` route
export const config = {
  matcher: '/',
};
 
export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  console.log('host', {host: url.host, hostname: url.hostname})


  // Extract country. Default to US if not found.
  const country = (request.geo && request.geo.country) || 'US';
 
  console.log(`Visitor from ${country}`);

  if (url.host === "test.amyegan.com" || url.hostname === "test.amyegan.com") {
    // Rewrite to URL
    request.nextUrl.pathname = "/blog";
    return NextResponse.rewrite(request.nextUrl);
  }
 
  return NextResponse.next();
}