import express from "express";
import cluster from "cluster";
import helmet from "helmet";
import totalCPUs from "os";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import BaseRoutes from "./BaseRoutes";
import path from "path";
import morgan from "morgan";
import * as dotenv from "dotenv";
import { SeedUser } from "./Seeder";
const cors = require("cors");

const app = express();

dotenv.config({ path: __dirname + "/.env" });
dotenv.config();

// app.use("/favicon.png", express.static("uploads/static/favicon.png"));

app.use(express.static(path.resolve("./public")));
app.use("/public", express.static(path.resolve("./public")));

if (cluster.isPrimary) {
    for (let i = 0; i < totalCPUs.cpus().length; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        console.log("Let's fork another worker!");
        cluster.fork();
    });
} else {
    app.use(express.static("public"));

    app.use(
        cors({
            origin: [
                "http://localhost:3006",
                "http://localhost:4200",
                "http://localhost:4000",
                "http://localhost:9000",
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

    //SeedUser();

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

    app.listen(process.env.PORT || 5000, () =>
        console.log("Api server is running on PORT 5000")
    );
}
