import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { apiError } from "./apiError.js";

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        console.log("Local file path:", localFilePath);

        if (!localFilePath) return null;

        console.log("Uploading file to Cloudinary...");
        const response = await cloudinary.uploader.upload(localFilePath, { resource_type: "auto" });

        console.log("File uploaded successfully to Cloudinary:", response.url);

        // Delete the local file after uploading
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }
        return response;

    } catch (error) {
        // Handle file deletion if the upload fails
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }
        console.error("Error uploading file to Cloudinary:", error);
        throw new apiError(401, "Failed to upload file to Cloudinary.");
    }
}

export { uploadOnCloudinary };