import IPortfolioDomain from "../domain/IPortfolioDomain";
import PortfolioRepository from "../infrastructure/repository/PortfolioRepository";
import { resError } from "../../0-framework/error-handler/errors";

class PortfolioApplication {
    private _repo: PortfolioRepository<IPortfolioDomain>;

    constructor() {
        this._repo = new PortfolioRepository();
    }

    async create(req: any, res: any) {
        try {
            const result = await this._repo.create(req.body);
            if (!result) return resError(res, 400, "Problem Happened");

            res.json({ message: "با موفقیت ساخته شد", result });
        } catch (err) {
            return resError(res, 400, "Problem Happened");
        }
    }
}

export default PortfolioApplication;
