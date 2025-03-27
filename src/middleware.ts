import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const walletConnected = req.cookies.get("walletConnected")?.value === "true";
  console.log("walletConnected:", walletConnected);

  const { pathname } = req.nextUrl;
  if (walletConnected && pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
  if (!walletConnected && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*"], 
};
