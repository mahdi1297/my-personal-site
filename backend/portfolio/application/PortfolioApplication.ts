import express from "express";
import fileUpload from "express-fileupload";
import PortfolioRepository from "../infrastructure/repository/PortfolioRepository";
import {
    PORTFOLIO_NOT_FOUND,
    PROBLEM_IN_CREATE_BLOG,
    PROBLEM_IN_GETTING_PORTFOLIOS,
    SUCCESS_IN_CREATE_PORTFOLIO,
} from "../../blog/infrastructure/constants/constant";
import { FileUploaderHelper } from "../../0-framework/helper/file-uploader/FileUploader";
import { IPortfolioDomain } from "../domain/IPortfolioDomain";
import { v4 as uuidv4 } from "uuid";

const app = express();

app.use(fileUpload());

class PortfolioApplication {
    private _repo: PortfolioRepository<IPortfolioDomain>;

    constructor() {
        this._repo = new PortfolioRepository();
    }

    //CREATE NEW COMMENT
    async create(req: any, res: any) {
        const { present_image1, present_image2, present_image3, main_image } =
            req.files;

        let filesArray = [];
        if (present_image1) filesArray.push(present_image1);
        if (present_image2) filesArray.push(present_image2);
        if (present_image3) filesArray.push(present_image3);

        let filesArrayNames = [];

        const imageStorageId = uuidv4();
        try {
            await FileUploaderHelper(
                imageStorageId,
                main_image,
                "public/uploads/portfolio/mahdi-alipour-portfolio",
                res
            );
            filesArray.forEach(async (element) => {
                const randomImageStorageId = uuidv4();

                if (element.name)
                    filesArrayNames.push({
                        path: `public/uploads/portfolio/mahdi-alipour-portfolio-${
                            randomImageStorageId + "-" + element.name
                        }`,
                    });

                await FileUploaderHelper(
                    randomImageStorageId,
                    element,
                    "public/uploads/portfolio/mahdi-alipour-portfolio",
                    res
                );
            });

            const portfolioData = {
                title: req.body.title,
                description: req.body.description,
                link: req.body.link,
                isConfirmed: "true",
                main_image: `public/uploads/portfolio/mahdi-alipour-portfolio-${
                    imageStorageId + "-" + main_image.name
                }`,
                slug: req.body.slug,
                presentation_images: filesArrayNames,
                technologies: req.body.technologies,
            };

            const result = await this._repo.create(
                <IPortfolioDomain>portfolioData
            );
            if (!result) {
                return res
                    .status(400)
                    .json({ message: PROBLEM_IN_CREATE_BLOG });
            }
            return res.json({
                status: 200,
                message: SUCCESS_IN_CREATE_PORTFOLIO,
                result,
            });
        } catch (err) {
            return res.status(400).json({ message: PROBLEM_IN_CREATE_BLOG });
        }
    }

    //GET LIST OF COMMENTS RELATED TO A POST OR A COURSE TO INDICATE IN FRONTEND UI
    async list(req: any, res: any) {
        try {
            const result = await this._repo.list();
            if (!result) {
                return res.status(404).json({ message: PORTFOLIO_NOT_FOUND });
            }
            return res.json({
                status: 200,
                message: SUCCESS_IN_CREATE_PORTFOLIO,
                result,
            });
        } catch (err) {
            return res.status(400).json({ message: PROBLEM_IN_GETTING_PORTFOLIOS });
        }
    }
}

export default PortfolioApplication;
