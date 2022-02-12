import express from "express";
import { hashPassword } from "./0-framework/middlewares/bcrypt";
import { Signjwt } from "./0-framework/middlewares/jwt";
import User from "./user/infrastructure/context/UserSchema";
import Token from "./token/infrastructure/context/TokenSchema";

export async function SeedUser() {
    try {
        const isExistsUser = await User.exists({
            $or: [
                {
                    username: "mahdi alipour",
                },
                {
                    email: "alipour@1297.com",
                },
            ],
        });

        if (isExistsUser) {
            console.log("user exists");
            return;
        }

        //bestgrade
        const passwordHashed = await hashPassword("bestgrade");

        if (!passwordHashed) {
            console.log("password not hashed");
            return;
        }

        const result = await User.create({
            username: "mahdi alipour",
            password: passwordHashed,
            email: "alipour@1297.com",
            iSRegistered: "true",
            role: "admin",
            profile: "public/static/avatar.png",
        });
        if (!result) {
            console.log("user not created");
            return;
        }

        const tokenGenerator = Signjwt(`${result._id}`, "user");

        if (!tokenGenerator) {
            console.log("token not created");
            return;
        }

        const tokenPack = {
            token: tokenGenerator,
            userId: `${result._id}`,
        };

        try {
            const saveToken = await Token.create(tokenPack);
        } catch (err) {
            console.log("token not saved", err);
            return;
        }
    } catch (err) {
        console.log(err);
    }
}
