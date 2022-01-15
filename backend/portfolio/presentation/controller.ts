import express from "express";
import PortfolioApplication from "../application/PortfolioApplication";

class PortfolioController {
    async create(req: express.Request, res: express.Response) {
        const _app = new PortfolioApplication();
        await _app.create(req, res);
    }

    async list(req: any, res: any) {
        const _app = new PortfolioApplication();
        await _app.list(req, res);
    }
}

export default PortfolioController;
