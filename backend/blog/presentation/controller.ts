import BlogApplication from "../application/BlogApplication";
import express from "express";

class BlogController {
    async list(req: express.Request, res: express.Response) {
        const _app = new BlogApplication();
        await _app.list(req, res);
    }

    async getBySlug(req: express.Request, res: express.Response) {
        const _app = new BlogApplication();
        await _app.getBySlug(req, res);
    }

    async create(req: express.Request, res: express.Response) {
        const _app = new BlogApplication();
        await _app.create(req, res);
    }

    async imageUpload(req: express.Request, res: express.Response) {
        const _app = new BlogApplication();
        await _app.imageUpload(req, res);
    }

    async getById(req: express.Request, res: express.Response) {
        const _app = new BlogApplication();
        await _app.getById(req, res);
    }
}

export default BlogController;
