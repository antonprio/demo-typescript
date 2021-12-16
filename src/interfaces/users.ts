import { Document } from 'mongoose';

export default interface IUser extends Document {
  username: string;
  firstname: string;
  middlename: string;
  lastname: string;
  age: number
};