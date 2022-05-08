import mongoose from "mongoose";
import DbContext from "../../../service-host/config/DbContext";
import ITokenDomain from "../../domain/ITokenDomain";

const Schema = mongoose.Schema;
const dbContextConnection = DbContext.connection;

class TokenSchema {
    static get schema() {
        var schema = new Schema(
            {
                userId: {
                    type: String,
                },
                token: {
                    type: String,
                },
            },
            { timestamps: true }
        );
        return schema;
    }
}

const schema = dbContextConnection.model<ITokenDomain>(
    "tokens",
    TokenSchema.schema
);
export default schema;
