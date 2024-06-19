import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        console.log("hello testing");
        // console.log(process.env.MONGODB_URI);
        // console.log(DB_NAME);
        // console.log(process)
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // console.log(connectionInstance);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
   
    } catch (error) {
        console.log("MongoDB connection failed ", error);
        process.exit(1)
    }
}

export default connectDB