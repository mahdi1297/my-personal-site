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

    async editList(req: any, res: any) {
        const _app = new CommentApplication();
        await _app.editList(req, res);
    }

    async confirm(req: any, res: any) {
        const _app = new CommentApplication();
        await _app.confirm(req, res);
    }
    async remove(req: any, res: any) {
        const _app = new CommentApplication();
        await _app.remove(req, res);
    }
}

export default CommentsController;
