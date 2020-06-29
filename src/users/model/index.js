import User from "./model";
import jwt from "jsonwebtoken";
import makeUsersDb from "./users-db";
import dotenv from "dotenv";

dotenv.config();

function accessToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2d" });
}

const usersDb = makeUsersDb({ User, accessToken });
export default usersDb;
