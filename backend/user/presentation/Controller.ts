import UserApplication from "../application/UserApplication";
import express from "express";

class UserController {
    async list(req: express.Request, res: express.Response) {
        const _app = new UserApplication();
        await _app.list(req, res);
    }

    async update(req: express.Request, res: express.Response) {
        const _app = new UserApplication();
        await _app.update(req, res);
    }

    async register(req: express.Request, res: express.Response) {
        const _app = new UserApplication();
        await _app.register(req, res);
    }

    async login(req: express.Request, res: express.Response) {
        const _app = new UserApplication();
        await _app.login(req, res);
    }

    async getById(req: express.Request, res: express.Response) {
        const _app = new UserApplication();
        await _app.getById(req, res);
    }

    async remove(req: express.Request, res: express.Response) {
        const _app = new UserApplication();
        await _app.remove(req, res);
    }

    async refactor(req: express.Request, res: express.Response) {
        const _app = new UserApplication();
        await _app.refactor(req, res);
    }

    async getByToken(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const _app = new UserApplication();
        await _app.getByToken(req, res, next);
    }
}

export default UserController;
