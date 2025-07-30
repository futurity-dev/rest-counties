import { connectDB } from "@/lib/mongoose";
import { Countries } from "@/model/RestCoutries/Country";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
//   const { country_name, city_name, limit } = await req.json();
  const { searchParams } = new URL(req.url);
  const native = searchParams.get("native");
    console.log(native)

  await connectDB();

    const query = native ? { native: new RegExp(`^${native}`, "i") } : {};

    const countries = await Countries.find(query).limit(500);


//   const countries = await Countries.find({native:_native}).limit(500)

  return NextResponse.json(
    {
      statusCode: 200,
      error: false,
      data: countries,
      message: "Countries retrieved successfully",
    },
    { status: 200 }
  );
}
