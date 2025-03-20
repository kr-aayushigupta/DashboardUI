
import mongoose from "mongoose";
// Import your DB connection function
import { NextResponse } from 'next/server';
import User from '@/models/users';
import connectToDatabase from '@/lib/mongodb';


export async function GET() {
  try {
    await connectToDatabase(); // Ensure DB is connected

    // Fetch user statistics
    const totalUsers = await User.countDocuments();
    const workingUsers = await User.countDocuments({ profession: "working" });
    const femaleUsers = await User.countDocuments({ gender: "female" });

    return NextResponse.json({ totalUsers, workingUsers, femaleUsers });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data count" }, { status: 500 });
  }
}
