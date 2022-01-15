import mongoose from "mongoose";
import Context from "../../../config/context";
import { IPortfolioDomain } from "../../domain/IPortfolioDomain";

var Schema = mongoose.Schema;
var dbConnection = Context.mongooseConnection;

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

var schema = dbConnection.model<IPortfolioDomain>(
    "portfolios",
    PortfolioSchema.schema
);

export default schema;
