import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import expressValidator from "express-validator";

const app = express();

app.set("port", process.env.PORT || 8000);

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

export default app;
