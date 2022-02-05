import mongoose from "mongoose";
import IUserDomain from "../../domain/IUserDomain";
import Context from "../../../config/context";

var Schema = mongoose.Schema;
var mongooseConnection = Context.mongooseConnection;

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
var schema = mongooseConnection.model<IUserDomain>("users", UserSchema.schema);
export default schema;
