import { body } from "express-validator";

const createBlogValidators = () => {
    return [
        body("title")
            .isLength({ min: 5 })
            .withMessage("طول عنوان باید بیشتر از 5 کاراکتر باشد"),
        // body("comments_length").isNumeric(),
    ];
};

const getEditListValidators = () => [
    body("pageNumber")
        .isLength({ min: 1, max: 20 })
        .withMessage("pageNumber is required"),
];

export { createBlogValidators, getEditListValidators };
