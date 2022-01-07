import mongoose from "mongoose";
import Context from "../../../config/context";
import IPortfolioDomain from "../../domain/IPortfolioDomain";

const Schema = mongoose.Schema;
const dbConnection = Context.mongooseConnection;

class PortfolioSchema {
    static get schema() {
        var schema = new Schema({
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
        });

        return schema;
    }
}

var schema = dbConnection.model<IPortfolioDomain>(
    "portfolio",
    PortfolioSchema.schema
);

export default schema;
