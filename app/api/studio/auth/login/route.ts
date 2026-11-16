import { NextResponse } from "next/server";
import { checkAdminPassword, setAdminSession } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json() as { password?: string };
    const password = body.password || "";

    if (!password) {
      return NextResponse.json({ error: "Password is required." }, { status: 400 });
    }

    if (!checkAdminPassword(password)) {
      return NextResponse.json({ error: "Invalid password." }, { status: 401 });
    }

    await setAdminSession();
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Authentication failed." }, { status: 500 });
  }
}
