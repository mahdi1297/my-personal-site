import mongoose from "mongoose";

interface IUserDomain extends mongoose.Document {
    username: string;
    password: string;
    email: string;
    phone: string;
    isRegistered: boolean;
    token_id: string;
    role: string;
    profile: string;
}

export default IUserDomain;
