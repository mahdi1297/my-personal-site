import express from "express";
import BlogRoutes from "./blog/presentation";
import UserRoutes from "./user/presentation/Routes";
const app = express();

class BaseRoutes {
    get routes() {
        app.use("/api/v1/blog", new BlogRoutes().routers);
        app.use("/api/v1/user", new UserRoutes().routers);
        return app;
    }
}

export default BaseRoutes;
