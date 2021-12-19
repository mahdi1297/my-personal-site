import { body } from "express-validator";

const createUserValidators = () => {
    return [
        body("username")
            .isLength({ min: 5, max: 255 })
            .withMessage("طول نام کاربری مجاز نیست"),
        body("email").isEmail().withMessage("فرمت ایمیل صحیح نیست"),
        body("email")
            .isLength({ min: 5, max: 255 })
            .withMessage("طول ایمیل مجاز نیست"),
        body("password")
            .isLength({ min: 8, max: 255 })
            .withMessage("طول رمز عبور مجاز نیست"),
    ];
};

const loginUserValidations = () => [
    body("email").isEmail().withMessage("فرمت ایمیل صحیح نیست"),
    body("email")
        .isLength({ min: 5, max: 255 })
        .withMessage("طول ایمیل مجاز نیست"),
    body("password")
        .isLength({ min: 8, max: 255 })
        .withMessage("طول رمز عبور مجاز نیست"),
];

export { createUserValidators, loginUserValidations };
