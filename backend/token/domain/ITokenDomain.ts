import mongoose from "mongoose";

interface ITokenDomain extends mongoose.Document {
    token: string;
    userId: string;
}

export default ITokenDomain;
