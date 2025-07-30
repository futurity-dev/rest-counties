import { connectDB } from "@/lib/mongoose";
import { Region } from "@/model/RestCoutries/region";
import {  NextResponse } from "next/server";

export async function GET() {
    await connectDB();
  try {

    const regions = await Region.find({});

    return NextResponse.json(
      {
        statusCode: 200,
        error: false,
        data: regions,
        message: "States retrieved successfully",
      },
      { status: 200 }
    );


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err:any) {
    console.log(err);
    return NextResponse.json(
      {
        statusCode: 500,
        error: true,
        data: null,
        message: err?.message ||  "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
