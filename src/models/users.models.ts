import mongoose, { Schema } from "mongoose";
import IUser from "../interfaces/users";

const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  firstname: { type: String, required: true },
  middlename: { type: String, required: true },
  lastname: { type: String, required: true },
  age: { type: Number, required: true }
}, { timestamps: true, versionKey: false });

export default mongoose.model<IUser>('User', UserSchema);