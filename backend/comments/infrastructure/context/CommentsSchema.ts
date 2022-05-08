import mongoose from "mongoose";
import DbContext from "../../../service-host/config/DbContext";
import { ICommentsDomain } from "../../domain/ICommentsDomain";

const Schema = mongoose.Schema;
const dbConnection = DbContext.connection;

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
                replyedParentId: {
                    type: String,
                    default: "_",
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

const schema = dbConnection.model<ICommentsDomain>(
    "comments",
    CommentSchema.schema
);

export default schema;
