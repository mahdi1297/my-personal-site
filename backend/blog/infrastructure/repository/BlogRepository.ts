import mongoose from "mongoose";
import IBlogRepository from "../../domain/IBlogRepository";
import BlogSchema from "../context/BlogSchema";

class BlogRepository<T extends mongoose.Document>
    implements IBlogRepository<T>
{
    private _model = BlogSchema;

    async list(pageNumber: number) {
        return await this._model
            .find({ isPublished: "true" })
            .limit(12)
            .skip(12 * (pageNumber - 1))
            .sort({ createdAt: "-1" });
    }

    async editList(pageNumber: number) {
        return await this._model
            .find({}, [
                "_id",
                "title",
                "writer",
                "thumbnail",
                "createdAt",
                "isPublished",
                "category",
            ])
            .limit(12)
            .skip(12 * (pageNumber - 1))
            .sort({ createdAt: "-1" });
    }

    async count() {
        return await this._model.count({});
    }

    async publish(_id: string, isPublished: string) {
        return await this._model.findOneAndUpdate(
            { _id: _id },
            { isPublished: isPublished }
        );
    }

    async getByID(parentId: string) {
        return await this._model.findOne(
            { _id: parentId, isPublished: "true" },
            ["title", "slug"]
        );
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

    async getByCategory(category: any) {
        return await this._model.find(
            {
                main_keyword: { $regex: category, $options: "i" },
            },
            ["_id", "slug", "main_image", "title"]
        );
    }
}

export default BlogRepository;
