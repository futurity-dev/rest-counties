import { connectDB } from "@/lib/mongoose";
import { Countries } from "@/model/RestCoutries/Country";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const native = searchParams.get("native");

  await connectDB();

  const query = native ? { native: new RegExp(`^${native}`, "i") } : {};

  const countries = await Countries.find(query)
    .select("name native nationality")
    .limit(500);

  return NextResponse.json(
    {
      statusCode: 200,
      error: false,
      data: countries,
      message: "Language retrieved successfully",
    },
    { status: 200 }
  );
}
