import express from "express";
import handlebars from "express-handlebars";
import router from "./routes.js";
import { connect } from "mongoose";
import cookieParser from "cookie-parser";
import { authMiddleware } from "./middlewares/authMiddleware.js";

const app = express();

// DB Mongoose
const url = "mongodb://localhost:27017";
// FIXME: dbName
connect(url, { dbName: "volcanoes" })
  .then(() => console.log("DB connected - :)"))
  .catch(() => console.log("DB Fail - (:"));

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", "src/views");

app.use(express.urlencoded({ extended: false }));
app.use(express.static("./src/public"));

// cookieParser
app.use(cookieParser());
app.use(authMiddleware);
// ROUTER MUST BE LAST
app.use(router);

app.listen(3000, () => console.log("Server is listening on port 3000"));
