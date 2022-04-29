import mongoose from "mongoose";
import IBlogDomain from "../../domain/IBlogDomain";
import Context from "../../../config/context";

var Schema = mongoose.Schema;
var mongooseConnection = Context.mongooseConnection;

class BlogSchema {
    static get schema() {
        var schema = new Schema(
            {
                title: {
                    type: String,
                    required: true,
                },
                slug: {
                    type: String,
                    required: true,
                },
                main_image: {
                    type: String,
                    required: true,
                },
                thumbnail: {
                    type: String,
                    required: true,
                },
                description: {
                    type: String,
                    required: true,
                },
                keywords: {
                    type: String,
                },
                main_keyword: {
                    type: String,
                },
                content: {
                    type: String,
                },
                category: {
                    type: String,
                },
                writer: {
                    type: String,
                },
                isPublished: {
                    type: String,
                    default: "false",
                },
                comments_length: {
                    type: String,
                },
                tags: {
                    type: Array,
                },
                isRemoved: {
                    type: Boolean,
                    default: false,
                },
            },
            { timestamps: true }
        );
        return schema;
    }
}
var schema = mongooseConnection.model<IBlogDomain>("blogs", BlogSchema.schema);
export default schema;
