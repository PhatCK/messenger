import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./configs/viewEngine";
import webRountes from "./routes/web";

let app = express();

//configure view engine

viewEngine(app)

//configure view router

webRountes(app)

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));

let port = process.env.port || 8080;


app.listen(port, () => {
    console.log("listening on port " + port);
}
)