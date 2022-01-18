import express from "express";
import validate from "../../0-framework/validators/validationResult";
import PortfolioController from "./controller";

const route = express.Router();

class CommentsRoutes {
    private _controller: PortfolioController;

    constructor() {
        this._controller = new PortfolioController();
    }

    get routers() {
        var controller = this._controller;

        route.post("/", controller.create).get("/", controller.list);

        return route;
    }
}

export default CommentsRoutes;
