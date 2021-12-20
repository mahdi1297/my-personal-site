import express from "express";
import TokenRepository from "../../token/infrastructure/repository/TokenRepository";
import UserRepository from "../infrastructure/repository/UserRepository";
import ITokenDomain from "../../token/domain/ITokenDomain";
import IUserDomain from "../domain/IUserDomain";
import fileUpload from "express-fileupload";
import {
    comparePassword,
    hashPassword,
} from "../../0-framework/middlewares/bcrypt";
import { resError } from "../../0-framework/error-handler/errors";
import { Signjwt } from "../../0-framework/middlewares/jwt";

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

    async login(req: any, res: any) {
        const { email, password } = req.body;

        try {
            //get user by email
            const result = await this._repo.get({
                email: email,
            });
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
                messaeg: "ورود موفق",
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
                messaeg: "حساب شما با موفقیت ساخته شد",
                result,
            });
        } catch (err) {
            return resError(res, 400, "مشکلی پیش آمد");
        }
    }
}

export default UserApplication;
