import mongoose from "mongoose";
import Context from "../../../config/context";
import ITokenDomain from "../../domain/ITokenDomain";

const Schema = mongoose.Schema;
const mongooseConnection = Context.mongooseConnection;

class TokenSchema {
    static get schema() {
        var schema = new Schema({
            userId: {
                type: String,
            },
            token: {
                type: String,
            },
        });
        return schema;
    }
}

let schema = mongooseConnection.model<ITokenDomain>(
    "tokens",
    TokenSchema.schema
);
export default schema;
