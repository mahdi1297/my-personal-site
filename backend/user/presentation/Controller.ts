import UserApplication from "../application/UserApplication";
import express from "express";

class UserController {
    async register(req: express.Request, res: express.Response) {
        const _app = new UserApplication();
        await _app.register(req, res);
    }

    async login(req: express.Request, res: express.Response) {
        const _app = new UserApplication();
        await _app.login(req, res);
    }
}

export default UserController;
