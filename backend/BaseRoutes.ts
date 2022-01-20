import express from "express";
import UserRoutes from "./user/presentation/Routes";
import BlogRoutes from "./blog/presentation";
import CommentsRoutes from "./comments/presentation";
import PortfolioRoute from "./portfolio/presentation";
const app = express();

class BaseRoutes {
    get routes() {
        app.use("/api/v1/blog", new BlogRoutes().routers);
        app.use("/api/v1/user", new UserRoutes().routers);
        app.use("/api/v1/comment", new CommentsRoutes().routers);
        app.use("/api/v1/portfolio", new PortfolioRoute().routers);
        return app;
    }
}

export default BaseRoutes;
