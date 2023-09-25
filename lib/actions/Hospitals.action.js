"use server";

import { connectToDB } from "../mongoose";

import Hospital from "../models/Hospital";

export async function getTopRankedHospitals() {
  // Ensure database is connected
  await connectToDB();

  // Fetch first 10 ranked hospitals sorted by rank
  const hospitals = await Hospital.find().sort({ rank: 1 }).limit(10);

  return hospitals;
}
