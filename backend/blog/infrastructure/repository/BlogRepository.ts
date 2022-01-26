import mongoose from "mongoose";
import IBlogRepository from "../../domain/IBlogRepository";
import BlogSchema from "../context/BlogSchema";

class BlogRepository<T extends mongoose.Document>
    implements IBlogRepository<T>
{
    private _model = BlogSchema;

    async list(pageNumber: number) {
        return await this._model
            .find({})
            .limit(12)
            .skip(12 * (pageNumber - 1))
            .sort({ createdAt: "-1" });
    }

    async editList(pageNumber: number) {
        return await this._model
            .find({}, ["_id", "title", "writer", "thumbnail", "createdAt"])
            .limit(12)
            .skip(12 * (pageNumber - 1))
            .sort({ createdAt: "-1" });
    }

    async count() {
        return await this._model.count({});
    }

    async getByID(parentId: string) {
        return await this._model.findOne({ _id: parentId }, ["title", "slug"]);
    }

    async getDetailByID(_id: string) {
        return await this._model.findOne({ _id: _id });
    }

    async getBySlug(slug: string) {
        return await this._model.findOne({ slug: slug });
    }

    async create(item: T) {
        return await this._model.create(item);
    }

    async existsSlug(slug: string) {
        return await this._model.exists({ slug: slug });
    }

    async existsTitle(title: string) {
        return await this._model.exists({ title: title });
    }

    async update(_id: string, data: object) {
        return await this._model.findOneAndUpdate({ _id: _id }, data);
    }
    remove: (_id: string) => void;
}

export default BlogRepository;
