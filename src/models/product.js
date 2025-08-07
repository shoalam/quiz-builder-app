// models/Product.js

import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
});

// Avoid model overwrite issue in dev
export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
