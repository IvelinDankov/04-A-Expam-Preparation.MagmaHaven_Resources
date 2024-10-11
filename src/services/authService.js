import User from "../models/User.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const register = (username, email, password) => {
  User.create({ username, email, password });
};

const login = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User does not exist!");
  }

  const name = await bcrypt.compare(password, user.password);

  if (!name) {
    throw new Error("Password does not match!");
  }

  const payload = {
    _id: user._id,
    email: user.email,
  };

  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "2h" });

  return token;
};



export default {
  register,
  login,
};
