import mongoose from "mongoose";
import IBlogRepository from "../../domain/IBlogRepository";
import BlogSchema from "../context/BlogSchema";

class BlogRepository<T extends mongoose.Document>
    implements IBlogRepository<T>
{
    private _model = BlogSchema;

    async list(pageNumber: number) {
        console.log(pageNumber - 1);
        return await this._model
            .find({})
            .limit(12)
            .skip(12 * (pageNumber - 1));
    }

    async getByID(_id: string) {
        return await this._model.find({ _id: _id }).select(["title", "slug"]);
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
