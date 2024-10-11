
import express, { urlencoded }  from "express";
import handlebars from "express-handlebars";
import router from "./routes.js";

const app = express();

app.use(express.static('./src/public'));
app.use(express.urlencoded({extended: false}))
app.use(router)

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}))

app.set('view engine', 'hbs');
app.set('views', 'src/views')


app.listen(3000, () => console.log('Server is listening on port 3000'));


