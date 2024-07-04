// require('dotenv').config({path: './env'})

import dotenv from "dotenv"

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
import { app } from "./app.js";


dotenv.config({
    path: './env'
})


connectDB()
    // console.log(process.env.PORT)
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`hello harsh this is port: ${process.env.PORT}`)
            // console.log("hello harsh this is port")
        })
    })
    .catch((error) => {
        console.log("Mongo DB connection failed...!!", error);
    })





/*

import express from "express"
const app = express()

; (async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/ ${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERROR: ", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listning on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.error("ERROR", error)
        throw error
    }
})()

*/