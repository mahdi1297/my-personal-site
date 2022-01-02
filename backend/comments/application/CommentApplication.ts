import express from "express";
import CommentRepository from "../infrastructure/repository/CommentRepository";
import { ICommentsDomain } from "../domain/ICommentsDomain";
import { resError } from "../../0-framework/error-handler/errors";
import {
    PROBLEM_IN_CREATE_NEW_COMMENT,
    PROBLEM_IN_GETTING_COMMENTS,
} from "./../infrastructure/constants/constant";

const app = express();

class CommentApplication {
    private _repo: CommentRepository<ICommentsDomain>;

    constructor() {
        this._repo = new CommentRepository();
    }

    //CREATE NEW COMMENT
    async create(req: any, res: any) {
        try {
            const result = await this._repo.create(<ICommentsDomain>req.body);
            if (result === null)
                return resError(res, 400, PROBLEM_IN_CREATE_NEW_COMMENT);

            res.json({ status: 200, message: "Ok", result });
        } catch (err) {
            return resError(res, 400, PROBLEM_IN_CREATE_NEW_COMMENT);
        }
    }

    //GET LIST OF COMMENTS RELATED TO A POST OR A COURSE TO INDICATE IN FRONTEND UI
    async list(req: any, res: any) {
        const { parentId } = req.body;
        try {
            const result = await this._repo.list(parentId);
            if (result === null)
                return resError(res, 400, PROBLEM_IN_GETTING_COMMENTS);

            res.json({
                status: 200,
                message: "Ok",
                result,
                count: result.length | 0,
            });
        } catch (err) {
            return resError(res, 400, PROBLEM_IN_GETTING_COMMENTS);
        }
    }

    async editList(req: any, res: any) {
        try {
            const result = await this._repo.editList();
            if (result === null)
                return resError(res, 400, PROBLEM_IN_GETTING_COMMENTS);

            res.json({
                status: 200,
                message: "Ok",
                result,
                count: result.length | 0,
            });
        } catch (err) {
            return resError(res, 400, PROBLEM_IN_GETTING_COMMENTS);
        }
    }

    async confirm(req: any, res: any) {
        const { _id } = req.body;

        try {
            const result = await this._repo.confirm(_id);
            if (result === null)
                return resError(res, 400, PROBLEM_IN_GETTING_COMMENTS);

            res.json({
                status: 200,
                message: "با موفقیت تایید شد",
                result,
            });
        } catch (err) {
            return resError(res, 400, PROBLEM_IN_GETTING_COMMENTS);
        }
    }

    async remove(req: any, res: any) {
        const { _id } = req.body;

        try {
            const result = await this._repo.remove(_id);
            if (result === null)
                return resError(res, 400, PROBLEM_IN_GETTING_COMMENTS);

            res.json({
                status: 200,
                message: "با موفقیت حذف شد",
                result,
            });
        } catch (err) {
            return resError(res, 400, PROBLEM_IN_GETTING_COMMENTS);
        }
    }
}

export default CommentApplication;
