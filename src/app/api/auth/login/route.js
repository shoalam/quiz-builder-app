import { connectToDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { createToken } from "@/lib/auth";

export async function POST(req) {
  try {
    await connectToDB();
    const { email, password } = await req.json();

    const user = await User.findOne({ email });

    if (!user) {
      return Response.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return Response.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // ✅ Sign JWT with secret from env
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET, // <-- MUST be defined
      { expiresIn: "1h" }
    );

    return Response.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
