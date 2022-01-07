import express from "express";
import validate from "../../0-framework/validators/validationResult";
import { createPortfolioValidators } from "../infrastructure/validator/validation";
import PortfolioController from "./controller";

const route = express.Router();

class PortfolioRoute {
    private _controller: PortfolioController;

    constructor() {
        this._controller = new PortfolioController();
    }

    get routers() {
        var _controller = this._controller;

        route.post(
            "/",
            // createPortfolioValidators(),
            validate,
            _controller.create
        );

        return route;
    }
}

export default PortfolioRoute;
