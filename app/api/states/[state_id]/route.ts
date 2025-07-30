import { connectDB } from "@/lib/mongoose";
import { Cities } from "@/model/RestCoutries";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ state_id: string }> }
) {
  const param = await params;
  if (!param.state_id) {
    return NextResponse.json(
      {
        statusCode: 400,
        error: true,
        data: null,
        message: "state_id is required",
      },
      { status: 400 }
    );
  }
  await connectDB();
  const states = await Cities.find({ state_id: param.state_id });
  return NextResponse.json(
    {
      statusCode: 200,
      error: false,
      data: states,
      message: "States retrieved successfully",
    },
    { status: 200 }
  );
}
