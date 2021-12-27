import express from "express";
import CommentApplication from "../application/CommentApplication";

class CommentsController {
    async create(req: express.Request, res: express.Response) {
        const _app = new CommentApplication();
        await _app.create(req, res);
    }

    async list(req: any, res: any) {
        const _app = new CommentApplication();
        await _app.list(req, res);
    }
}

export default CommentsController;
