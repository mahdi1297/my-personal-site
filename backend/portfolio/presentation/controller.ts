import express from "express";
import PortfolioApplication from "../application/PortfolioApplication";

class PortfolioController {
    async create(req: express.Request, res: express.Response) {
        const _app = new PortfolioApplication();
        await _app.create(req, res);
    }
}

export default PortfolioController;
