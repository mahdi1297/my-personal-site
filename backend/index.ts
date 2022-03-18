import express from "express";
import helmet from "helmet";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import BaseRoutes from "./BaseRoutes";
import path from "path";
import morgan from "morgan";
import * as dotenv from "dotenv";
// import { SeedUser } from "./Seeder";
const cors = require("cors");

const app = express();

dotenv.config({ path: __dirname + "/.env" });
dotenv.config();

app.use(express.static(path.resolve("./public")));
app.use("/public", express.static(path.resolve("./public")));

app.use(express.static("public"));

app.use(
    cors({
        origin: [
            "http://admin.mahdialipoor.ir",
            "http://localhost:3006",
            "http://127.0.0.1:8080",
            "http://localhost:4200",
        ],
        optionsSuccessStatus: 200,
    })
)
    .use(express.json({ limit: "50mb" }))
    .use(express.urlencoded({ limit: "50mb" }))
    .use(fileUpload())
    .use(helmet())
    .use(cookieParser())
    .use(morgan("dev"));

const route = express.Router();

route.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type, Authorization"
    );
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
});

app.use(new BaseRoutes().routes);

// app.listen(9000, "127.0.0.1", () =>
//     console.log("Api server is running on PORT 9000")
// );
app.listen(5000, () => console.log("Api server is running on PORT 5000"));
// }
