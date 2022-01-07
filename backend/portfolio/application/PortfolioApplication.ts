import express from "express";
import IPortfolioDomain from "../domain/IPortfolioDomain";
import PortfolioRepository from "../infrastructure/repository/PortfolioRepository";
import { resError } from "../../0-framework/error-handler/errors";
import { v4 as uuidv4 } from "uuid";
import fileUpload from "express-fileupload";

const app = express();
app.use(fileUpload());

class PortfolioApplication {
    private _repo: PortfolioRepository<IPortfolioDomain>;

    constructor() {
        this._repo = new PortfolioRepository();
    }

    async create(req: any, res: any) {
        const files = req.files;
        const body = req.body;

        const { present_image1, present_image2, present_image3 } = files;

        let imageArray = [];

        imageArray.push(present_image1);
        imageArray.push(present_image2);
        imageArray.push(present_image3);

        const main_protfolio_image = req.files.main_image;

        const imageStorageId = uuidv4();

        try {
            //upload image
            try {
                const imgsss = await main_protfolio_image.mv(
                    `public/uploads/portfolio/mahdi-alipour-portfolio-${
                        imageStorageId + "-" + main_protfolio_image.name
                    }`,
                    (err: any) => {
                        const datass = {
                            fileName: main_protfolio_image.name,
                            filePath: `public/uploads/blog/mahdi-alipour-portfolio-${
                                imageStorageId + "-" + main_protfolio_image.name
                            }`,
                        };
                    }
                );
            } catch (err) {
                return resError(res, 400, "Problem Happened");
            }

            //upload image array

            let present_images = [];
            imageArray.forEach((imgElement) => {
                const newImageStorageId = uuidv4();

                try {
                    const imgs = imgElement.mv(
                        `public/uploads/portfolio/mahdi-alipour-portfolio-${
                            newImageStorageId + "-" + imgElement.name
                        }`,
                        (err: any) => {
                            const datass = {
                                fileName: imgElement.name,
                                filePath: `public/uploads/blog/mahdi-alipour-portfolio-${
                                    newImageStorageId + "-" + imgElement.name
                                }`,
                            };
                        }
                    );
                } catch (err) {
                    return resError(res, 400, "Problem Happened");
                }
                present_images.push({
                    path: `public/uploads/blog/mahdi-alipour-portfolio-${
                        newImageStorageId + "-" + imgElement.name
                    }`,
                });
            });

            const dataToSave = {
                title: req.body.title,
                link: req.body.link,
                main_image: `public/uploads/blog/mahdi-alipour-portfolio-${
                    imageStorageId + "-" + main_protfolio_image.name
                }`,
                slug: req.body.slug,
                presentation_images: present_images,
                technologies: [],
            };

            const result = await this._repo.create(
                <IPortfolioDomain>dataToSave
            );
            if (!result) return resError(res, 400, "Problem Happened");

            res.json({ message: "با موفقیت ساخته شد", result });
        } catch (err) {
            return resError(res, 400, "Problem Happened");
        }
    }
}

export default PortfolioApplication;
