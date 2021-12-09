import mongoose from "mongoose";
import IBlogRepository from "../../domain/IBlogRepository";
import BlogSchema from "../context/BlogSchema";

class BlogRepository<T extends mongoose.Document>
    implements IBlogRepository<T>
{
    private _model = BlogSchema;
    async list(pageNumber: number) {
        console.log(pageNumber);
        return await this._model.find({}).limit(15).skip(pageNumber);
    }

    async getByID(_id: string) {
        return await this._model.find({ _id: _id });
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

    update: (_id: string, data: object) => any;
    remove: (_id: string) => void;
}

export default BlogRepository;
