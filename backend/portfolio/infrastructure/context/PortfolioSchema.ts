import mongoose from "mongoose";
import DbContext from "../../../service-host/config/DbContext";
import { IPortfolioDomain } from "../../domain/IPortfolioDomain";

const Schema = mongoose.Schema;
const dbConnection = DbContext.connection;

class PortfolioSchema {
    static get schema() {
        var schema = new Schema(
            {
                title: {
                    type: String,
                },
                description: {
                    type: String,
                },
                link: {
                    type: String,
                },
                isConfirmed: {
                    type: String,
                    default: "true",
                },
                main_image: {
                    type: String,
                },
                slug: {
                    type: String,
                },
                presentation_images: {
                    type: Array,
                },
                technologies: {
                    type: Array,
                },
            },
            { timestamps: true }
        );

        return schema;
    }
}

const schema = dbConnection.model<IPortfolioDomain>(
    "portfolios",
    PortfolioSchema.schema
);

export default schema;
