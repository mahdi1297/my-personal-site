import express from "express";
import PortfolioRepository from "../infrastructure/repository/PortfolioRepository";
import { IPortfolioDomain } from "../domain/IPortfolioDomain";
import { resError } from "../../0-framework/error-handler/errors";

class PortfolioApplication {
    private _repo: PortfolioRepository<IPortfolioDomain>;

    constructor() {
        this._repo = new PortfolioRepository();
    }

    //CREATE NEW COMMENT
    async create(req: any, res: any) {
        
    }

    //GET LIST OF COMMENTS RELATED TO A POST OR A COURSE TO INDICATE IN FRONTEND UI
    async list(req: any, res: any) {}
}

export default PortfolioApplication;
