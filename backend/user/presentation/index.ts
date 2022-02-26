import express from "express";
import UserController from "./Controller";
import validate from "../../0-framework/validators/validationResult";
import {
    AuthMiddleware,
    AuthTokenMiddleware,
} from "../../0-framework/middlewares/auth";
import {
    createUserValidators,
    loginUserValidations,
    getByTokenValidations,
    updateUserValidators,
    getUserValidations,
} from "../infrastructure/validator/validations";

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
            .post("/list", AuthTokenMiddleware, controller.list)
            .post(
                "/get-by-id",
                getUserValidations(),
                validate,
                controller.getById
            )
            .delete("/", AuthTokenMiddleware, controller.remove)
            .put("/refactor", AuthTokenMiddleware, controller.refactor)
            .put("/", updateUserValidators(), validate, controller.update)
            .post("/login", loginUserValidations(), validate, controller.login)
            .post(
                "/login-admin",
                AuthMiddleware,
                loginUserValidations(),
                validate,
                controller.login
            )
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
