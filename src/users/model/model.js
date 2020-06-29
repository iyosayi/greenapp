import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Id from "../../Id";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    default: "supervisor",
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  hash: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Number,
    default: Date.now(),
  },
  modifiedOn: {
    type: Date,
    default: Date.now(),
  },
  _id: {
    type: String,
    required: true,
    default: Id.makeId(),
  },
});

UserSchema.pre("save", async function save(next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (error) {
    console.log(error);
  }
});

UserSchema.methods.validatePassword = async function validatePassword(
  password
) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", UserSchema);
export default User;
