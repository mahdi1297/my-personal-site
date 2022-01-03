import mongoose from "mongoose";
import { ICommentsRepository } from "../../domain/ICommentsRepository";
import CommentSchema from "../context/CommentsSchema";

class CommentRepository<T extends mongoose.Document>
    implements ICommentsRepository<T>
{
    private _model = CommentSchema;

    async create(item: any) {
        return await this._model.create(item);
    }

    async get(_id: string) {
        return await this._model.findOne({ _id: _id });
    }

    async list(parentId: string) {
        return await this._model
            .find({ parentId, isConfirmed: "true" })
            .sort({ createdAt: "-1" });
    }

    async editList(pageNumber: number) {
        const res = await this._model.count({});
        return await this._model
            .find({})
            .limit(12)
            .skip(12 * (pageNumber - 1))
            .sort({ createdAt: "-1" });
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

export default CommentRepository;
