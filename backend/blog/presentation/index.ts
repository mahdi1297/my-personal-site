import express from "express";
import BlogController from "./controller";
import validate from "../../0-framework/validators/validationResult";
import { createBlogValidators } from "../infrastructure/validator/validations";
import { AuthTokenMiddleware } from "../../0-framework/middlewares/auth";

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
            .post(
                "/edit-list/:pageNumber",
                AuthTokenMiddleware,
                controller.editList
            )
            .put("/publish", controller.publish)
            .post(
                "/",
                AuthTokenMiddleware,
                createBlogValidators(),
                validate,
                controller.create
            )
            .put("/", AuthTokenMiddleware, controller.update)
            .post("/get-by-slug", controller.getBySlug)
            .post("/image-upload", controller.imageUpload)
            .post("/get-by-id", AuthTokenMiddleware, controller.getById)
            .post("/get-detail", controller.getDetailById)
            .post("/get-related", controller.getByCategory);
        return route;
    }
}

export default BlogRoutes;
