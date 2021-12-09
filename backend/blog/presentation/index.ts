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

        route.get("/list/:pageNumber", controller.list);

        route.post("/", createBlogValidators(), validate, controller.create);
        route.post("/get-by-slug", controller.getBySlug);

        route.post("/image-upload", controller.imageUpload);
        return route;
    }
}

export default BlogRoutes;
