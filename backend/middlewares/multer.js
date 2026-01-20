import multer from "multer";

const storage = multer.memoryStorage(); //because we are storing the file in memory and uploading it to cloudinary

export const singleUpload = multer({ storage }).single("file");