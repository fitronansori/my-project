import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  // generate token with jwt.sign()
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "30d",
  });

  // return the token as a cookie and in the response body
  res.cookie("token", token, {
    httpOnly: true, // client-side js cannot access the cookie
    secure: process.env.NODE_ENV === "development", // cookie will only be sent over https in production
    sameSite: "strict", // cookie will only be sent in a first-party context and not be sent along with cross-site requests
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });

  return token;
};

export default generateToken;
