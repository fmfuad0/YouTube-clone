import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// MongoDB connection string (adjust it to your MongoDB URI)

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        const dbURI = process.env.MONGODB_URI;
        console.log(dbURI)
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the process if unable to connect
    }
};

// Export the connection function
export {connectDB};
