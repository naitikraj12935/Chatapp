import mongoose from "mongoose";


import dotenv from 'dotenv';
dotenv.config();

const URL = process.env.DB_URL 
const Connection = async () => {
    try {
        await mongoose.connect(URL);
        console.log('DB is connected');
    } catch (error) {
        console.error('Error connecting to database:', error.message);
    }
};

export default Connection;
