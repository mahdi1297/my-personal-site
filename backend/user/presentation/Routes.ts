import express from "express";
import validate from "../../0-framework/validators/validationResult";
import {
    createUserValidators,
    loginUserValidations,
    getByTokenValidations,
} from "../infrastructure/validator/validations";
import UserController from "./Controller";

const route = express.Router();

class UserRoutes {
    private _controller: UserController;

    constructor() {
        this._controller = new UserController();
    }

    get routers() {
        var controller = this._controller;

        route
            .post("/", createUserValidators(), validate, controller.register)
            .post("/login", loginUserValidations(), validate, controller.login)
            .post(
                "/get-user",
                getByTokenValidations(),
                validate,
                controller.getByToken
            );

        return route;
    }
}

export default UserRoutes;
