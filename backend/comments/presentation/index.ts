import express from "express";
import validate from "../../0-framework/validators/validationResult";
import {
    createCommentValidators,
    getCommentList,
} from "../infrastructure/validator/validations";
import CommentsController from "./controller";

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
            .post("/list", getCommentList(), validate, controller.list);

        return route;
    }
}

export default CommentsRoutes;
