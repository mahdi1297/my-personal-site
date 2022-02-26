import { body } from "express-validator";

const createUserValidators = () => [
    body("username")
        .isLength({ min: 5, max: 255 })
        .withMessage("طول نام کاربری مجاز نیست"),
    body("email")
        .isEmail()
        .withMessage("فرمت ایمیل صحیح نیست")
        .isLength({ min: 5, max: 255 })
        .withMessage("طول ایمیل مجاز نیست"),
    body("password")
        .isLength({ min: 8, max: 255 })
        .withMessage("طول رمز عبور مجاز نیست"),
];
const updateUserValidators = () => [
    body("_id").isLength({ min: 24, max: 24 }).withMessage("طول _id مجاز نیست"),
    body("email")
        .isEmail()
        .withMessage("فرمت ایمیل صحیح نیست")
        .isLength({ min: 8, max: 255 })
        .withMessage("طول ایمیل مجاز نیست"),
    body("username")
        .notEmpty()
        .withMessage("ورود نام کاربری الزامیست")
        .isLength({ min: 8, max: 255 })
        .withMessage("طول نام کاربری مجاز نیست"),
    body("role")
        .notEmpty()
        .withMessage("ورود نام کاربری الزامیست")
        .isBoolean()
        .withMessage("نوع داده ی نقش مجاز نیست"),
];

const loginUserValidations = () => [
    body("email").isEmail().withMessage("فرمت ایمیل صحیح نیست"),
    body("email")
        .isLength({ min: 5, max: 255 })
        .withMessage("طول ایمیل مجاز نیست"),
    body("password")
        .isLength({ min: 8, max: 255 })
        .withMessage("طول رمز عبور مجاز نیست"),
];
const getUserValidations = () => [
    body("role")
        .notEmpty()
        .withMessage("نقش کاربر اجباریست")
        .isLength({ min: 2, max: 100 })
        .withMessage("اطلاعات نقش کاربر صحیح نیست"),
    body("_id").isLength({ min: 24, max: 24 }).withMessage("طول _id مجاز نیست"),
];
const getByTokenValidations = () => [body("token").isString()];

export {
    createUserValidators,
    loginUserValidations,
    getByTokenValidations,
    updateUserValidators,
    getUserValidations,
};
