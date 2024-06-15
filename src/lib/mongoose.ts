'use server'

import mongoose from "mongoose";

let isConnected: boolean = false;
export const connectToDatabase = async () => {
  if (!process.env.MONGODB_URL) {
    throw new Error("MONGODB is not set");
  }
  
  console.log(process.env.MONGODB_URL, isConnected);
  if (isConnected) {
    console.log("MONGODB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "nextjsPJ",
    });
    isConnected = true;
    console.log("Using new database connection");
  } catch (error) {
    console.log("Error while connecting to database");
  }
};
