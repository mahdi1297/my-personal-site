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
            .post("/edit-list/:pageNumber", controller.editList)
            .post("/", createBlogValidators(), validate, controller.create)
            .put("/", controller.update)
            .post("/get-by-slug", controller.getBySlug)
            .post("/image-upload", controller.imageUpload)
            .post("/get-by-id", controller.getById)
            .post("/get-detail", controller.getDetailById);
        return route;
    }
}

export default BlogRoutes;
