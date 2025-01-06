import mongoose from "mongoose";

const connectDb = async () => {
  const MONGO_URI = process.env.MONGO_URI;

  if (!MONGO_URI) {
    throw new Error("Mongo URI is missing or undefined");
  }
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: "noteflow",
    });
    console.log("Connection to database is successful");
  } catch (error) {
    console.error("Could not connect to the database", error);
  }
};

export default connectDb;
