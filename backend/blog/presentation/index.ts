import express from "express";
import BlogController from "./controller";
import validate from "../../0-framework/validators/validationResult";
import { createBlogValidators } from "../infrastructure/validator/validations";

const route = express.Router();

class BlogRoutes {
    private _controller: BlogController;

    constructor() {
        this._controller = new BlogController();
    }

    get routers() {
        var controller = this._controller;

        route
            .get("/list/:pageNumber", controller.list)
            .post("/", createBlogValidators(), validate, controller.create)
            .post("/get-by-slug", controller.getBySlug)
            .post("/image-upload", controller.imageUpload)
            .post("/bet-by-id", controller.getById);
        return route;
    }
}

export default BlogRoutes;
