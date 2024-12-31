import mongoose from "mongoose";

export const connectDb = async (uri) => {
  
    await mongoose
      .connect(uri)
      .then(() => {
        console.log("Kết nối đến MongoDB Atlas thành công!");
      })
      .catch((err) => {
        console.error("Lỗi kết nối đến MongoDB Atlas:", err);
      });
  
};
