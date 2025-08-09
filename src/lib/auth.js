import jwt from "jsonwebtoken";

export function createToken(user) {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return null;
  }
}
export function getUserFromToken(token) {
  const decoded = verifyToken(token);
  if (!decoded) return null;
  return { id: decoded.id, role: decoded.role };
}
