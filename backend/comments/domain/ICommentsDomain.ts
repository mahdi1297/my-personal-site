import mongoose from "mongoose";

interface ICommentsDomain extends mongoose.Document {
    parentId: string;
    isReplyed: string;
    username: string;
    userId: string;
    isConfirmed: string;
    replyedParentId: string;
    profile: string;
    content: string;
}

export { ICommentsDomain };
