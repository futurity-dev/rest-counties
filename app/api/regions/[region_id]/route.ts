import { connectDB } from "@/lib/mongoose";
import { Countries } from "@/model/RestCoutries/Country";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ region_id: string }> }
) {
  const param = await params;
  if (!param.region_id) {
    return NextResponse.json(
      {
        statusCode: 400,
        error: true,
        data: null,
        message: "region_id is required",
      },
      { status: 400 }
    );
  }

  await connectDB();

  const regions = await Countries.find({
    region_id: param.region_id,
  }).limit(500);

  return NextResponse.json(
    {
      statusCode: 200,
      error: false,
      data: regions,
      message: "Countries retrieved successfully",
    },
    { status: 200 }
  );
}
