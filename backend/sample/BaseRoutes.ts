import express from "express";
import CommentsRoutes from "../comments/presentation";
import PortfolioRoutes from "../portfolio/presentation";
import UserRoutes from "../user/presentation";
import BlogRoutes from "./blog/presentation";
const app = express();

class BaseRoutes {
    get routes() {
        app.use("/api/v1/blog", new BlogRoutes().routers);
        app.use("/api/v1/user", new UserRoutes().routers);
        app.use("/api/v1/comment", new CommentsRoutes().routers);
        app.use("/api/v1/portfolio", new PortfolioRoutes().routers);
        return app;
    }
}

export default BaseRoutes;
