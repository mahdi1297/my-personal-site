import mongoose from "mongoose";
import DbContext from "../../../service-host/config/DbContext";
import IUserDomain from "../../domain/IUserDomain";

const Schema = mongoose.Schema;
const dbContextConnection = DbContext.connection;

class UserSchema {
    static get schema() {
        var schema = new Schema(
            {
                username: {
                    type: String,
                },
                password: {
                    type: String,
                },
                email: {
                    type: String,
                },
                iSRegistered: {
                    type: String,
                    default: "true",
                },
                token_id: {
                    type: String,
                },
                role: {
                    type: String,
                    default: "user",
                },
                profile: {
                    type: String,
                    default: "public/static/avatar.png",
                },
            },
            { timestamps: true }
        );
        return schema;
    }
}
const schema = dbContextConnection.model<IUserDomain>(
    "users",
    UserSchema.schema
);
export default schema;
