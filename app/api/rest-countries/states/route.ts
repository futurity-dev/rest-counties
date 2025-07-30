import { connectDB } from "@/lib/mongoose";
import States from "@/model/RestCoutries/states";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    await connectDB();
  try {
    const body = await req.json();

    if (!body.country_id) {
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

    const state = await States.find({
      country_id: body.country_id,
    }).limit(body.limit || 500);

    return NextResponse.json(
      {
        statusCode: 200,
        error: false,
        data: state,
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
