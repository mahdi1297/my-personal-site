import { body, param } from "express-validator";

const createCommentValidators = () => [
    body("parentId").notEmpty().withMessage("ورود parentId الزامیست"),
    body("username").notEmpty().withMessage("ورود username الزامیست"),
    body("userId").notEmpty().withMessage("ورود userId الزامیست"),
    body("profile").notEmpty().withMessage("ورود profile الزامیست"),
    body("content").notEmpty().withMessage("ورود content الزامیست"),
];

const getCommentList = () => [
    body("parentId").notEmpty().withMessage("parentId الزامیست"),
];

export { createCommentValidators, getCommentList };
