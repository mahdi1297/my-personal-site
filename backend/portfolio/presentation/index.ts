import express from "express";
import { AuthTokenMiddleware } from "../../0-framework/middlewares/auth";
import validate from "../../0-framework/validators/validationResult";
import { getPortfolioBySlugValidations } from "../infrastructure/validator/validations";
import PortfolioController from "./controller";

const route = express.Router();

class PortfolioRoutes {
    private _controller: PortfolioController;

    constructor() {
        this._controller = new PortfolioController();
    }

    get routers() {
        var controller = this._controller;

        route
            .post("/", AuthTokenMiddleware, controller.create)
            .get("/", controller.list)
            .get(
                "/:slug",
                getPortfolioBySlugValidations(),
                validate,
                controller.getBySlug
            );

        return route;
    }
}

export default PortfolioRoutes;
