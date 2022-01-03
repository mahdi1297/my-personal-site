import express from "express";
import BlogRepository from "../infrastructure/repository/BlogRepository";
import IBlogDomain from "../domain/IBlogDomain";
import fileUpload from "express-fileupload";
import { resError } from "../../0-framework/error-handler/errors";
import { v4 as uuidv4 } from "uuid";
import {
    PROBLEM_IN_GET_LIST_OF_BLOG,
    PROBLEM_IN_CREATE_BLOG,
    SUCCESS_IN_CREATE_BLOG,
    SUCCESS_IN_UPLOAD_IMAGE,
    PROBLEM_IN_GET_BLOG,
    BLOG_LIST_NOT_FOUND,
    PLEASE_INSERT_IMAGE,
    REPEATED_TITLE,
    BLOG_NOT_FOUND,
    REPEATED_SLUG,
    OK,
} from "../infrastructure/constants/constant";

const app = express();

app.use(fileUpload());

class BlogApplication {
    private _repo: BlogRepository<IBlogDomain>;

    constructor() {
        this._repo = new BlogRepository();
    }

    //GET LIST OF BLOG
    async list(req: any, res: any) {
        const { pageNumber } = req.params;
        const result = await this._repo.list(parseInt(pageNumber) || 0);

        try {
            result === undefined ||
                (result === null && resError(res, 400, BLOG_LIST_NOT_FOUND));
            res.json({
                status: 200,
                message: OK,
                result,
                count: result.length,
            });
        } catch (err) {
            return res
                .status(400)
                .json({ status: 400, message: PROBLEM_IN_GET_LIST_OF_BLOG });
        }
    }

    //GET BLOG BY SLUG
    async getBySlug(req: any, res: any) {
        const { slug } = req.body;
        try {
            const result = await this._repo.getBySlug(slug);
            result === undefined ||
                (result === null && resError(res, 400, BLOG_NOT_FOUND));
            res.json({
                status: 200,
                message: "blogs list endpoint",
                result,
            });
        } catch (err) {
            return res
                .status(400)
                .json({ status: 400, message: PROBLEM_IN_GET_BLOG });
        }
    }

    //CREATE NEW BLOG
    async create(req: any, res: any) {
        const image = req.files.image;
        const { title, slug } = req.body;

        if (!image) {
            return res.status(400).json({ message: PLEASE_INSERT_IMAGE });
        }

        //CHECK EXISTING TITLE OR SLUG
        const checkByTitle = await this._repo.existsTitle(title);
        if (checkByTitle) {
            return res.status(400).json({ message: REPEATED_TITLE });
        }
        const checkBySlug = await this._repo.existsSlug(slug);
        if (checkBySlug) {
            return res.status(400).json({ message: REPEATED_SLUG });
        }

        //STORE IMAGE IN LOCAL FILE
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
            return res.status(400).json({ message: PROBLEM_IN_CREATE_BLOG });
        }

        //FINALLY STORE IMAGE IN DB
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
                    message: SUCCESS_IN_CREATE_BLOG,
                    result,
                });
            }
        } catch (err) {}
    }

    //IMAGE UPLOAD SECTION FOR CREATE BLOG PROCCESS
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
                message: SUCCESS_IN_UPLOAD_IMAGE,
                url: `public/uploads/blog/mahdi-alipour-blog-${
                    imageStorageId + "-" + image.name
                }`,
            });
        } catch (err) {
            return res.status(400).json({ err });
        }
    }

    async getById(req: any, res: any) {
        const { parentId } = req.body;

        try {
            const result = await this._repo.getByID(parentId);
            if (result === null) {
                return resError(res, 400, BLOG_NOT_FOUND);
            }
            return res.json({
                status: 200,
                message: OK,
                result,
            });
        } catch (err) {
            resError(res, 400, BLOG_NOT_FOUND);
        }
    }
}

export default BlogApplication;
