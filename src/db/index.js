import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default async function run() {
  console.log("Starting up");
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Database connected");
}

// run().catch((error) => console.log(error));
