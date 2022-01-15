import express from "express";
import PortfolioRepository from "../infrastructure/repository/PortfolioRepository";
import { IPortfolioDomain } from "../domain/IPortfolioDomain";
import { resError } from "../../0-framework/error-handler/errors";
const app = express();
import fileUpload from "express-fileupload";
import { v4 as uuidv4 } from "uuid";
import { PROBLEM_IN_CREATE_BLOG } from "../../blog/infrastructure/constants/constant";

app.use(fileUpload());

class PortfolioApplication {
    private _repo: PortfolioRepository<IPortfolioDomain>;

    constructor() {
        this._repo = new PortfolioRepository();
    }

    //CREATE NEW COMMENT
    async create(req: any, res: any) {
        console.log(req.body);
        console.log(req.files);

        const { present_image1, present_image2, present_image3, main_image } =
            req.files;

        let filesArray = [present_image1, present_image2, present_image3];

        let filesArrayNames = [];

        const imageStorageId = uuidv4();
        try {
            const img = await main_image.mv(
                `public/uploads/portfolio/mahdi-alipour-portfolio-${
                    imageStorageId + "-" + main_image.name
                }`,
                (err: any) => {
                    const datass = {
                        fileName: main_image.name,
                        filePath: `public/uploads/portfolio/mahdi-alipour-portfolio-${
                            imageStorageId + "-" + main_image.name
                        }`,
                    };
                }
            );

            filesArray.forEach(async (element) => {
                const randomImageStorageId = uuidv4();

                filesArrayNames.push({
                    path: `public/uploads/portfolio/mahdi-alipour-portfolio-${
                        randomImageStorageId + "-" + element.name
                    }`,
                });

                const img = await main_image.mv(
                    `public/uploads/portfolio/mahdi-alipour-portfolio-${
                        randomImageStorageId + "-" + element.name
                    }`,
                    (err: any) => {
                        const datass = {
                            fileName: element.name,
                            filePath: `public/uploads/portfolio/mahdi-alipour-portfolio-${
                                randomImageStorageId + "-" + element.name
                            }`,
                        };
                    }
                );
            });
        } catch (err) {
            return res.status(400).json({ message: PROBLEM_IN_CREATE_BLOG });
        }

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

        console.log(portfolioData);
    }

    //GET LIST OF COMMENTS RELATED TO A POST OR A COURSE TO INDICATE IN FRONTEND UI
    async list(req: any, res: any) {}
}

export default PortfolioApplication;
