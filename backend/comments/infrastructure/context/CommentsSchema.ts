import mongoose from "mongoose";
import Context from "../../../config/context";
import { ICommentsDomain } from "../../domain/ICommentsDomain";

var Schema = mongoose.Schema;
var dbConnection = Context.mongooseConnection;

class CommentSchema {
    static get schema() {
        var schema = new Schema(
            {
                parentId: {
                    type: String,
                },
                isReplyed: {
                    type: String,
                    default: "false",
                },
                username: {
                    type: String,
                },
                isConfirmed: {
                    type: String,
                    default: "false",
                },
                userId: {
                    type: String,
                },
                profile: {
                    type: String,
                },
                content: {
                    type: String,
                },
            },
            { timestamps: true }
        );

        return schema;
    }
}

var schema = dbConnection.model<ICommentsDomain>(
    "comments",
    CommentSchema.schema
);

export default schema;
