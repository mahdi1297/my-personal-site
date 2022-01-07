import { body } from "express-validator";

const createPortfolioValidators = () => [
    body("title")
        .isString()
        .withMessage("اطلاعات title را صحیح وارد کنید")
        .notEmpty()
        .isLength({ min: 5, max: 250 })
        .withMessage("اطلاعات title را صحیح وارد کنید"),
    body("slug")
        .isString()
        .withMessage("اطلاعات slug را صحیح وارد کنید")
        .notEmpty()
        .isLength({ min: 5, max: 250 })
        .withMessage("اطلاعات slug را صحیح وارد کنید"),
    body("description")
        .isString()
        .withMessage("اطلاعات description را صحیح وارد کنید")
        .notEmpty()
        .isLength({ min: 5, max: 1000 })
        .withMessage("اطلاعات description را صحیح وارد کنید"),
    body("link")
        .notEmpty()
        .withMessage("اطلاعات link را صحیح وارد کنید")
        .isString()
        .withMessage("اطلاعات link را صحیح وارد کنید")
        .isLength({ min: 5, max: 1000 })
        .withMessage("اطلاعات link را صحیح وارد کنید"),
    body("main_image")
        .notEmpty()
        .withMessage("اطلاعات main_image را صحیح وارد کنید")
        .isLength({ min: 5, max: 3000 })
        .withMessage("اطلاعات main_image را صحیح وارد کنید"),
    body("presentation_images")
        .isArray()
        .withMessage("اطلاعات presentation_images را صحیح وارد کنید"),
    body("technologies")
        .isArray()
        .withMessage("اطلاعات technologies را صحیح وارد کنید"),
];

export { createPortfolioValidators };
