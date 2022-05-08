import express from "express";
import helmet from "helmet";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import path from "path";
import morgan from "morgan";
import mongoSanitize from "express-mongo-sanitize";
import cors from "cors";
import * as dotenv from "dotenv";
import BaseRoutes from "./BaseRoutes";

function AppBootstraper() {
    const app = express();
    const route = express.Router();

    dotenv.config({ path: __dirname + "/.env" });
    dotenv.config();

    app.use(express.static(path.resolve("./public")))
        .use("/public", express.static(path.resolve("./public")))
        .use(express.static("public"))
        .use(
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
        .use(express.json({ limit: "3mb" }))
        .use(express.urlencoded({ limit: "3mb" }))
        .use(fileUpload())
        .use(helmet.frameguard({ action: "SAMEORIGIN" }))
        .use(cookieParser())
        .use(morgan("dev"))
        .use(mongoSanitize());

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

    return app;
}

export default AppBootstraper;
