import { connectDB } from "@/lib/mongoose";
import { Cities } from "@/model/RestCoutries";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { country_name, city_name, limit } = await req.json();

  if (!country_name) {
    return NextResponse.json(
      {
        statusCode: 400,
        error: true,
        data: null,
        message: "country_name is required",
      },
      { status: 400 }
    );
  }

  await connectDB();

  const countryRegex = new RegExp(`^${country_name}$`, "i");
  const cityRegex = city_name
    ? new RegExp(`^${city_name}`, "i")
    : /.*/;

  const cities = await Cities.find({
    country_name: { $regex: countryRegex },
    name: { $regex: cityRegex },
  }).limit(limit || 500);

  return NextResponse.json(
    {
      statusCode: 200,
      error: false,
      data: cities,
      message: "Cities retrieved successfully",
    },
    { status: 200 }
  );
}
