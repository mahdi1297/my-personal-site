import express from "express";
import TokenRepository from "../../token/infrastructure/repository/TokenRepository";
import UserRepository from "../infrastructure/repository/UserRepository";
import ITokenDomain from "../../token/domain/ITokenDomain";
import IUserDomain from "../domain/IUserDomain";
import fileUpload from "express-fileupload";
import jwt_decode from "jwt-decode";
import jwt from "jsonwebtoken";
import { resError } from "../../0-framework/error-handler/errors";
import { Signjwt } from "../../0-framework/middlewares/jwt";
import {
    comparePassword,
    hashPassword,
} from "../../0-framework/middlewares/bcrypt";

const app = express();

app.use(fileUpload());

class UserApplication {
    private _repo: UserRepository<IUserDomain>;
    private _tokenRepo: TokenRepository<ITokenDomain>;

    constructor() {
        this._repo = new UserRepository();
        this._tokenRepo = new TokenRepository();
    }

    async list(req: any, res: any) {}

    async getByToken(req: any, res: any, next: any) {
        const { token } = req.body;
        if (token === "") {
            return resError(res, 400, "درخواست اشتباه");
        }

        try {
            var decoded: any = jwt_decode(token);

            const token_id = decoded["identity"];
            if (
                token_id === undefined ||
                token_id === null ||
                token_id === ""
            ) {
                return resError(res, 400, "درخواست اشتباه");
            }

            jwt.verify(
                token,
                process.env.JWT_SECRET_KEY as string,
                async (err: any, data: any) => {
                    // renew token
                    if (err === null) {
                        console.log("error");
                        try {
                            const result: any = await this._repo.get({
                                _id: token_id,
                            });
                            if (result === null) {
                                return resError(res, 400, "درخواست اشتباه");
                            }
                            result.password = "";
                            result.createdAt = "";
                            result.updatedAt = "";
                            res.json({
                                message: "عملیات با موفقیت انجام شد",
                                result,
                            });
                        } catch (err) {
                            return res.status(403).json({
                                message: "شما دسترسی لازم را ندارید",
                                status: 403,
                            });
                        }
                    }
                    if (err) {
                        const tokenGenerator = Signjwt(`${token_id}`, "user");
                        const renewToken = await this._tokenRepo.update(
                            token_id,
                            {
                                token: tokenGenerator,
                                userId: `${token_id}`,
                            }
                        );

                        if (renewToken === null) {
                            return res.status(403).json({
                                message: "شما دسترسی لازم را ندارید",
                                status: 403,
                            });
                        }
                        try {
                            const result: any = await this._repo.get({
                                _id: token_id,
                            });
                            if (result === null) {
                                return resError(res, 400, "درخواست اشتباه");
                            }
                            result.password = "";
                            result.createdAt = "";
                            result.updatedAt = "";
                            res.json({
                                message: "عملیات با موفقیت انجام شد",
                                result,
                                token: renewToken.token,
                            });
                        } catch (err) {
                            return res.status(403).json({
                                message: "1شما دسترسی لازم را ندارید",
                                status: 403,
                            });
                        }
                        // await getUserDataByToken(res, token_id);
                    }
                    //get user data
                }
            );
        } catch (err) {
            // console.log(err);
            return res.status(403).json({
                message: "1شما دسترسی لازم را ندارید",
                status: 403,
                err,
            });
        }
    }

    async login(req: any, res: any) {
        const { email, password, username, from } = req.body;

        console.log(req.body);

        try {
            let result;
            if (from && from === "admin" && username) {
                //get user by email and username
                result = await this._repo.get({
                    email: email,
                    username: username,
                });
                console.log(result);
            } else {
                //get user by email
                result = await this._repo.get({
                    email: email,
                });
            }

            if (result === null || result === undefined) {
                return resError(res, 404, "ایمیل یا رمز عبور اشتباه است");
            }

            //compare incoming password with Db password
            const comparePasses = await comparePassword(
                password,
                result.password
            );
            if (!comparePasses) {
                return resError(res, 404, "ایمیل یا رمز عبور اشتباه است");
            }

            const getUserToken = await this._tokenRepo.get({
                userId: result._id,
            });
            if (
                getUserToken.token === undefined ||
                !getUserToken.token ||
                getUserToken.token === null
            ) {
                return resError(res, 404, "ایمیل یا رمز عبور اشتباه است");
            }

            res.json({
                status: 200,
                message: "ورود موفق",
                result: getUserToken.token,
            });
        } catch (err) {
            return resError(res, 404, "ایمیل یا رمز عبور اشتباه است");
        }
    }

    async register(req: any, res: any) {
        const isExistsUser = await this._repo.checkUser({
            $or: [
                {
                    username: req.body.username,
                },
                {
                    email: req.body.email,
                },
            ],
        });

        if (isExistsUser)
            return resError(res, 400, "نام کاربری یا ایمیل قبلا ثبت شده است.");

        const passwordHashed = await hashPassword(req.body.password);

        if (!passwordHashed) return resError(res, 400, "مشکلی پیش آمد");

        const requestBodyData = {
            username: req.body.username,
            email: req.body.email,
            password: passwordHashed,
        };

        try {
            const result = await this._repo.create(
                <IUserDomain>requestBodyData
            );
            if (result === null || result === undefined) {
                return resError(res, 400, "مشکلی پیش آمد");
            }

            if (
                result._id === undefined ||
                result._id === "" ||
                result._id === null
            ) {
                return resError(res, 400, "مشکلی پیش آمد");
            }

            const tokenGenerator = Signjwt(`${result._id}`, "user");

            if (
                tokenGenerator === null ||
                tokenGenerator === undefined ||
                tokenGenerator === ""
            ) {
                return resError(res, 400, "مشکلی پیش آمد");
            }

            const tokenPack = {
                token: tokenGenerator,
                userId: `${result._id}`,
            };

            try {
                const saveToken = await this._tokenRepo.create(
                    <ITokenDomain>tokenPack
                );
            } catch (err) {
                return resError(res, 400, "مشکلی پیش آمد");
            }

            res.json({
                status: 200,
                message: "حساب شما با موفقیت ساخته شد",
                result,
            });
        } catch (err) {
            return resError(res, 400, "مشکلی پیش آمد");
        }
    }
}

export default UserApplication;
