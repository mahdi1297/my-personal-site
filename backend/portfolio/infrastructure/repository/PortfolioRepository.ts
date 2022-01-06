import mongoose from "mongoose";
import IPortfolioRepository from "../../domain/IPortfoilioRepository";
import PortfolioSchema from "./../context/PortfolioSchema";

class PortfolioRepository<T extends mongoose.Document>
    implements IPortfolioRepository<T>
{
    private _model = PortfolioSchema;

    async create(item: any) {
        return await this._model.create(item);
    }

    async list(pageNumber: number) {
        return await this._model
            .find({ isConfirmed: "true" })
            .limit(9)
            .skip(9 * (pageNumber - 1))
            .sort({ createdAt: "-1" });
    }

    async editList(pageNumber: number) {
        return await this._model
            .find({})
            .limit(9)
            .skip(9 * (pageNumber - 1))
            .sort({ createdAt: "-1" });
    }

    async update(_id: string, data: any) {
        return await this._model.findOneAndUpdate({ _id: _id }, data);
    }

    async remove(_id: string) {
        return await this._model.findOneAndUpdate(
            { _id: _id },
            { isConfirmed: "false" }
        );
    }

    async refactor(_id: string) {
        return await this._model.findOneAndUpdate(
            { _id: _id },
            { isConfirmed: "true" }
        );
    }
}

export default PortfolioRepository;
