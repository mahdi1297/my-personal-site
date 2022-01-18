import mongoose from "mongoose";
import { IPortfolioRepository } from "../../domain/IPortfolioRepository";
import PortfolioSchema from "../context/PortfolioSchema";

class PortfolioRepository<T extends mongoose.Document>
    implements IPortfolioRepository<T>
{
    private _model = PortfolioSchema;

    async create(item: any) {
        return await this._model.create(item);
    }

    async get(_id: string) {
        return await this._model.findOne({ _id: _id });
    }

    async list() {
        return await this._model
            .find({ isConfirmed: "true" }, ["title", "slug", "main_image"])
            .sort({ createdAt: "-1" })
            .lean();
    }

    async editList(pageNumber: number) {
        const res = await this._model.count({});
        return await this._model.find({}).sort({ createdAt: "-1" });
    }

    async count() {
        return await this._model.count({});
    }

    async confirm(_id: string) {
        return await this._model.findOneAndUpdate(
            { _id: _id },
            { isConfirmed: "true" }
        );
    }
    async remove(_id: string) {
        return await this._model.findOneAndUpdate(
            { _id: _id },
            { isConfirmed: "false" }
        );
    }
}

export default PortfolioRepository;
