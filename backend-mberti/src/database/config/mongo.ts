import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const dbConnection : () => string = function () : string {

  let url = process.env.MONGO_CONNECTION_URL;

  if (typeof url == "string") {
    return url
  }

  return ""
};

  mongoose.connect(dbConnection());


export default mongoose;