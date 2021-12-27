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
        return await this._model.find({ parentId, isConfirmed: "true" });
    }

    editList: (item: any) => any;

    confirm: (_id: string) => any;
    remove: (_id: string) => any;
}

export default CommentRepository;
