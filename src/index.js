import express from "express";
import handlebars from "express-handlebars";
import router from "./routes.js";
import { connect } from "mongoose";

const app = express();

// DB Mongoose
const url = "mongodb://localhost:27017";
// FIXME: dbName
connect(url, { dbName: "volcanoes" })
.then(() => console.log('DB connected - :)'))
.catch(() => console.log('DB Fail - (:'));

// View Engine

app.use(express.static("./src/public"));
app.use(express.urlencoded({ extended: false }));
app.use(router);

// hbs

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", "src/views");

app.listen(3000, () => console.log("Server is listening on port 3000"));
