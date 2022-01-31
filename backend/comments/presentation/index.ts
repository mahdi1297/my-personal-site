import express from "express";
import CommentsController from "./controller";
import validate from "../../0-framework/validators/validationResult";
import {
    removeOrConfirmCommentValidator,
    getCommentEditListValidators,
    getCommentListValidators,
    createCommentValidators,
} from "../infrastructure/validator/validations";

const route = express.Router();

class CommentsRoutes {
    private _controller: CommentsController;

    constructor() {
        this._controller = new CommentsController();
    }

    get routers() {
        var controller = this._controller;

        route
            .post("/", createCommentValidators(), validate, controller.create)
            .post(
                "/list",
                getCommentListValidators(),
                validate,
                controller.list
            )
            .post(
                "/edit-list/:page",
                getCommentEditListValidators(),
                validate,
                controller.editList
            )
            .put(
                "/",
                removeOrConfirmCommentValidator(),
                validate,
                controller.confirm
            )
            .delete(
                "/",
                removeOrConfirmCommentValidator(),
                validate,
                controller.remove
            );

        return route;
    }
}

export default CommentsRoutes;
