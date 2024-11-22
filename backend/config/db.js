import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://arunlalto:8606838208@cluster0.bxvas.mongodb.net/Tomato-food-delivery-app"
    )
    .then(() => {
      console.log("DB Connected");
    });
};
