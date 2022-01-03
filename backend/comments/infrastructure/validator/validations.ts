import { body, param } from "express-validator";

const createCommentValidators = () => [
    body("parentId").notEmpty().withMessage("ورود parentId الزامیست"),
    body("username").notEmpty().withMessage("ورود username الزامیست"),
    body("userId").notEmpty().withMessage("ورود userId الزامیست"),
    body("profile").notEmpty().withMessage("ورود profile الزامیست"),
    body("content")
        .isLength({ min: 5, max: 550 })
        .withMessage("content را صحیح وارد کنید"),
];

const getCommentListValidators = () => [
    body("parentId").notEmpty().withMessage("parentId الزامیست"),
];
const getCommentEditListValidators = () => [
    param("page").notEmpty().withMessage("ارسال دیتا الزامیست"),
];

const removeOrConfirmCommentValidator = () => [
    body("_id").notEmpty().withMessage("field is required"),
];

export {
    createCommentValidators,
    getCommentListValidators,
    removeOrConfirmCommentValidator,
    getCommentEditListValidators,
};
