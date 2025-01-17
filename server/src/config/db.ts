import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "", {
      // Add any additional options here
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};


export const disconnect = async (): Promise<void> => {
  try {
    await mongoose.connection.close(); // Closes the Mongoose connection
    console.log("Database connection closed.");
  } catch (error) {
    console.error("Error closing database connection:", error);
    throw error;
  }
};


export default connectDB;