// lib/mongoose.js

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export async function connectToDB() {
  if (mongoose.connection.readyState === 1) {
    // Already connected
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "quiz-builder", // replace with your DB name
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
}

export async function disconnectFromDB() {
  try {
    await mongoose.disconnect();
    console.log("MongoDB disconnected");
  } catch (err) {
    console.error("MongoDB disconnection error:", err);
    throw err;
  }
}
