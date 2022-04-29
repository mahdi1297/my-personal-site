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
    PROBLEM_IN_GETTING_BLOG,
    PROBLEM_IN_UPDATING_BLOG,
} from "../infrastructure/constants/constant";
import { FileUploaderHelper } from "../../0-framework/helper/file-uploader/FileUploader";

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

    async editList(req: any, res: any) {
        const { page } = req.params;

        try {
            const commentsCount = await this._repo.count();

            if (!commentsCount) {
                return resError(res, 400, PROBLEM_IN_GETTING_BLOG);
            }

            const result = await this._repo.editList(page);
            if (!result) return resError(res, 400, PROBLEM_IN_GETTING_BLOG);

            res.json({
                status: 200,
                total: commentsCount,
                message: "Ok",
                result,
                count: result.length | 0,
            });
        } catch (err) {
            return resError(res, 400, PROBLEM_IN_GETTING_BLOG);
        }
    }

    //GET BLOG BY SLUG
    async getBySlug(req: any, res: any) {
        const { slug } = req.body;
        try {
            const result = await this._repo.getBySlug(slug);
            if (!result) {
                resError(res, 400, BLOG_NOT_FOUND);
            }
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
                main_keyword: req.body.main_keyword,
                writer: req.body.writer,
                category: req.body.category,
                comments_length: 0,
                isPublished: "false",
            };
            const result = await this._repo.create(<IBlogDomain>dataToStore);

            if (!result) {
                return res.status(400).json({ message: "Bad Request" });
            }
            return res.json({
                status: 200,
                message: SUCCESS_IN_CREATE_BLOG,
                result,
            });
        } catch (err) {}
    }

    // PUBLISH NEW BLOG
    async publish(req: any, res: any) {
        const { _id, isPublished } = req.body;

        try {
            const result = await this._repo.publish(_id, isPublished);
            if (!result) {
                return resError(res, 400, PROBLEM_IN_UPDATING_BLOG);
            }
            console.log(result);
            res.json({
                status: 200,
                message: "با موفقیت ویرایش شد",
                result: "Ok",
            });
        } catch (err) {
            return resError(res, 400, PROBLEM_IN_UPDATING_BLOG);
        }
    }

    // IMAGE UPLOAD SECTION FOR CREATE BLOG PROCCESS
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

    async getDetailById(req: any, res: any) {
        const { _id } = req.body;
        try {
            const result = await this._repo.getDetailByID(_id);
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

    async update(req: any, res: any) {
        const { _id } = req.body;

        if (req.files && req.files.main_image !== null) {
            try {
                const imageStorageId = uuidv4();
                await FileUploaderHelper(
                    imageStorageId,
                    req.files.main_image,
                    "public/uploads/blog/mahdi-alipour-blog",
                    res
                );

                const dataToStore = {
                    title: req.body.title,
                    slug: req.body.slug,
                    main_image: `public/uploads/blog/mahdi-alipour-blog-${
                        imageStorageId + "-" + req.files.main_image.name
                    }`,
                    thumbnail: `public/uploads/blog/mahdi-alipour-blog-${
                        imageStorageId + "-" + req.files.main_image.name
                    }`,
                    description: req.body.description,
                    keyword: req.body.keyword,
                    main_keyword: req.body.main_keyword,
                    content: req.body.content,
                    category: req.body.category,
                    tags: req.body.tags,
                    writer: req.body.writer,
                    comments_length: 0,
                };

                const result = await this._repo.update(_id, dataToStore);

                if (!result) {
                    return resError(res, 400, PROBLEM_IN_UPDATING_BLOG);
                }
                return res.json({
                    status: 200,
                    message: OK,
                    result,
                });
            } catch (err) {
                return resError(res, 400, PROBLEM_IN_UPDATING_BLOG);
            }
        }

        if (req.body && req.body.main_image !== null) {
            try {
                const dataToStore = {
                    title: req.body.title,
                    slug: req.body.slug,
                    main_image: req.body.main_image,
                    thumbnail: req.body.main_image,
                    description: req.body.description,
                    main_keyword: req.body.main_keyword,
                    keyword: req.body.keyword,
                    content: req.body.content,
                    tags: req.body.tags,
                    writer: req.body.writer,
                    category: req.body.category,
                    comments_length: 0,
                };

                const result = await this._repo.update(_id, dataToStore);
                if (!result) {
                    return resError(res, 400, PROBLEM_IN_UPDATING_BLOG);
                }
                return res.json({
                    status: 200,
                    message: OK,
                    result,
                });
            } catch (err) {
                return resError(res, 400, PROBLEM_IN_UPDATING_BLOG);
            }
        }
    }

    async getByCategory(req: any, res: any) {
        const { category } = req.body;
        if (!category) {
            return res
                .status(400)
                .json({ status: 400, message: "لطفا category را وارد نمایید" });
        }

        try {
            const result = await this._repo.getByCategory(category);
            if (!result) {
                return resError(res, 400, BLOG_NOT_FOUND);
            }
            return res.json({
                status: 200,
                count: result.length,
                message: OK,
                result,
            });
        } catch (err) {
            console.log(err);
            return resError(res, 400, "Something bad happened");
        }
    }
}

export default BlogApplication;
