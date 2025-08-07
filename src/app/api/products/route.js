// app/api/products/route.js
import { connectToDB } from "@/lib/db";
import Product from "@/models/product";

export async function GET() {
  try {
    await connectToDB();

    const products = await Product.find();
    return Response.json(products);
  } catch (err) {
    console.error("GET error:", err);
    return new Response("Failed to fetch products", { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    await connectToDB();

    const newProduct = await Product.create(data);
    return Response.json(newProduct);
  } catch (err) {
    console.error("POST error:", err);
    return new Response("Failed to create product", { status: 500 });
  }
}
