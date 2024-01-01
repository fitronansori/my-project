import mongoose from "mongoose";

const dbConfig = {
    url: process.env.MONGO_URI || "", // Ensure that dbConfig.url is not undefined
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
};

const connectDB = async () => {
    try {
        await mongoose.connect(dbConfig.url);
        console.log("MongoDB connected");
    } catch (error: any) { // Cast error to the Error type
        console.error((error as Error).message);
        process.exit(1);
    }
};

export default connectDB;