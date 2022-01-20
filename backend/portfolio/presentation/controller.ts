import express from "express";
import PortfolioApplication from "../application/PortfolioApplication";

class PortfolioController {
    async create(req: express.Request, res: express.Response) {
        const _app = new PortfolioApplication();
        await _app.create(req, res);
    }

    async list(req: express.Request, res: express.Response) {
        const _app = new PortfolioApplication();
        await _app.list(req, res);
    }

    async getBySlug(req: express.Request, res: express.Response) {
        const _app = new PortfolioApplication();
        _app.getBySlug(req, res);
    }
}

export default PortfolioController;
