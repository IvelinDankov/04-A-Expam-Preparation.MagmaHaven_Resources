import jwt from "jsonwebtoken";
import { SECRET } from "../util/constants.js";

export function authMiddleware(req, res, next) {
  const token = req.cookies["auth"];
  if (!token) {
    return next();
  }

  try {
    const decodedToken = jwt.verify(token, SECRET,);
    
    // const user = {
    //   _id : decodedToken._id,
    //   email :decodedToken.email,
    //   username: decodedToken.username,

    // }

    req.user = decodedToken
    req.username = decodedToken.username
    req.isAuthenticated = true;
    res.locals.isAuthenticated = true;
    res.locals.email = decodedToken.email
    res.locals.username = decodedToken.username
      
       next();
  } catch (error) {
    res.clearCookie('auth')
    return res.redirect('/auth/login')
  }


}
