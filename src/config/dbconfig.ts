import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const connectDb = async () => {
  const DB_URL: any = process.env.MONGODB_URL;
  const dbopt: any = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
  await mongoose.connect(DB_URL, dbopt);
  console.log('connected to db!');
};

export { connectDb }