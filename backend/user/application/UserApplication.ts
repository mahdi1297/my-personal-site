import express from "express";
import fileUpload from "express-fileupload";
import { resError } from "../../0-framework/error-handler/errors";
import UserRepository from "../infrastructure/repository/UserRepository";
import IUserDomain from "../domain/IUserDomain";
import { hashPassword } from "../../0-framework/middlewares/bcrypt";
import TokenRepository from "../../token/infrastructure/repository/TokenRepository";
import ITokenDomain from "../../token/domain/ITokenDomain";

const app = express();

app.use(fileUpload());

class UserApplication {
    private _repo: UserRepository<IUserDomain>;
    private _tokenRepo: TokenRepository<ITokenDomain>;

    constructor() {
        this._repo = new UserRepository();
    }

    async list(req: any, res: any) {}

    async register(req: any, res: any) {
        const { username, password, email, phone } = req.body;

        const isExistsUser = await this._repo.checkUser({
            $or: [
                {
                    username: req.body.username,
                },
                {
                    email: req.body.email,
                },
                {
                    phone: req.body.phone,
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
            console.log(result);
            console.log(result._id);
            // const tokenPack = {

            // }
            // const userToken = await this._tokenRepo.create()

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
