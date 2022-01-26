import express from "express";
import validate from "../../0-framework/validators/validationResult";
import {
    createUserValidators,
    loginUserValidations,
    getByTokenValidations,
    updateUserValidators,
    getUserValidations,
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
            .post("/list", updateUserValidators(), validate, controller.list)
            .post(
                "/get-by-id",
                getUserValidations(),
                validate,
                controller.getById
            )
            .delete("/", controller.remove)
            .put("/refactor", controller.refactor)
            .put("/", controller.update)
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
