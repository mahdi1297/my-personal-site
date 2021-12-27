import mongoose from "mongoose";

interface ICommentsDomain extends mongoose.Document {
    parentId: string;
    isReplyed: string;
    username: string;
    userId: string;
    isConfirmed: string;
    profile: string;
    content: string;
}

export { ICommentsDomain };
