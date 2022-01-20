import { body, param } from "express-validator";

const getPortfolioBySlugValidations = () => [
    param("slug")
        .notEmpty()
        .withMessage("field is required")
        .isLength({ min: 2, max: 300 })
        .withMessage("field length is not correct"),
];

export { getPortfolioBySlugValidations };
