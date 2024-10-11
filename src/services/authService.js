import User from "../models/User.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET } from "../util/constants.js";

const register = async(username, email, password) => {
  const user = await User.findOne({ $or: [{ username }, { email }] })
  
  if (user) {
    throw new Error("User exist");
    
  }

  return User.create({ username, email, password });
};

const login = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User does not exist!");
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error("Password does not match!");
  }

  const payload = {
    _id: user._id,
    username: user.username,
    email: user.email
  };

  const token = jwt.sign(payload, SECRET, { expiresIn: "2h" });

  return token;
};

export default {
  register,
  login,
};
