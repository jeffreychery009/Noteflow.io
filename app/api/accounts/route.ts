import { NextResponse } from "next/server";

import User from "@/database/user.model";
import handleError from "@/lib/handlers/error";
import { ValidationError } from "@/lib/http-errors";
import { APIErrorResponse } from "@/types/global";
import connectDb from "@/lib/mongoose";
import { UserSchema } from "@/lib/validation";

export async function GET() {
  try {
    await connectDb();

    const users = await User.find();
    return NextResponse.json({ success: true, data: users }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

export async function POST(request: Request) {
  try {
    await connectDb();

    const body = await request.json();
    const validateData = UserSchema.safeParse(body);

    if (!validateData.success) {
      throw new ValidationError(validateData.error.flatten().fieldErrors);
    }

    const { email, username } = validateData.data;

    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error("User already exists");

    const existingUsername = await User.findOne({ username });
    if (existingUsername) throw new Error("Username already exists");

    const newUser = await User.create(validateData.data);

    return NextResponse.json({ success: true, data: newUser }, { status: 201 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
