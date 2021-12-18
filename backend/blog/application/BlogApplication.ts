import express from "express";
import BlogRepository from "../infrastructure/repository/BlogRepository";
import IBlogDomain from "../domain/IBlogDomain";
import fileUpload from "express-fileupload";
import { resError } from "../../0-framework/error-handler/errors";
import { v4 as uuidv4 } from "uuid";

const app = express();

app.use(fileUpload());

class BlogApplication {
    private _repo: BlogRepository<IBlogDomain>;

    constructor() {
        this._repo = new BlogRepository();
    }

    //get list of blog
    async list(req: any, res: any) {
        const { pageNumber } = req.params;
        const result = await this._repo.list(parseInt(pageNumber) || 0);

        try {
            result === undefined ||
                (result === null && resError(res, 400, "Not Found"));
            res.json({
                status: 200,
                message: "blogs list endpoint",
                result,
                count: result.length,
            });
        } catch (err) {
            return res
                .status(400)
                .json({ status: 400, message: "some problem happened" });
        }
    }

    async getBySlug(req: any, res: any) {
        const { slug } = req.body;
        try {
            const result = await this._repo.getBySlug(slug);
            result === undefined ||
                (result === null && resError(res, 400, "Not Found"));
            res.json({
                status: 200,
                message: "blogs list endpoint",
                result,
            });
        } catch (err) {
            return res
                .status(400)
                .json({ status: 400, message: "some problem happened" });
        }
    }
    //create new blog
    async create(req: any, res: any) {
        const image = req.files.image;
        const { title, slug } = req.body;

        if (!image) {
            return res
                .status(400)
                .json({ message: "لطفا تصویر را ارسال کنید" });
        }

        //first check exists this title or slug or not
        const checkByTitle = await this._repo.existsTitle(title);
        if (checkByTitle) {
            return res
                .status(400)
                .json({ message: "این عنوان قبلا انتخاب شده است" });
        }
        const checkBySlug = await this._repo.existsSlug(slug);
        if (checkBySlug) {
            return res
                .status(400)
                .json({ message: "این slug قبلا انتخاب شده است" });
        }

        //then store image in local
        const imageStorageId = uuidv4();
        try {
            const img = await image.mv(
                `public/uploads/blog/mahdi-alipour-blog-${
                    imageStorageId + "-" + image.name
                }`,
                (err: any) => {
                    const datass = {
                        fileName: image.name,
                        filePath: `public/uploads/blog/mahdi-alipour-blog-${
                            imageStorageId + "-" + image.name
                        }`,
                    };
                }
            );
        } catch (err) {
            return res.status(400).json({ message: "مشکلی به وجود آمده است" });
        }

        //finally, store data in dataBase
        try {
            const dataToStore = {
                title: req.body.title,
                slug: req.body.slug,
                main_image: `public/uploads/blog/mahdi-alipour-blog-${
                    imageStorageId + "-" + image.name
                }`,
                thumbnail: `public/uploads/blog/mahdi-alipour-blog-${
                    imageStorageId + "-" + image.name
                }`,
                description: req.body.description,
                keyword: req.body.keyword,
                content: req.body.content,
                tags: req.body.tags,
                writer: req.body.writer,
                comments_length: 0,
            };
            const result = await this._repo.create(<IBlogDomain>dataToStore);

            if (result !== null) {
                return res.json({
                    status: 200,
                    message: " بلاگ با موفقیت ساخته شد",
                    result,
                });
            }
        } catch (err) {}
    }

    //blog image upload
    async imageUpload(req: any, res: any) {
        const image = req.files.image;
        if (!image) {
            return res.status(400).json({ message: "Bad Request" });
        }
        try {
            const imageStorageId = uuidv4();
            const img = await image.mv(
                `public/uploads/blog/mahdi-alipour-blog-${
                    imageStorageId + "-" + image.name
                }`,
                (err: any) => {
                    const datass = {
                        fileName: image.name,
                        filePath: `public/uploads/blog/mahdi-alipour-blog-${
                            imageStorageId + "-" + image.name
                        }`,
                    };
                }
            );
            res.json({
                message: " تصویر با موفقیت دخیره شد",
                url: `public/uploads/blog/mahdi-alipour-blog-${
                    imageStorageId + "-" + image.name
                }`,
            });
        } catch (err) {
            return res.status(400).json({ err });
        }
    }
}

export default BlogApplication;
