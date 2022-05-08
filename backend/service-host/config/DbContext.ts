import mongoose from "mongoose";

class DbContext {
    static mongooseInstance: any;
    static connection: mongoose.Connection;

    constructor() {
        DbContext.connect();
    }

    static connect(): mongoose.Connection {
        this.connection = mongoose.connection;
        this.connection.once("open", () => {
            console.log("connected to db successfully");
        });
        this.mongooseInstance = mongoose.connect(
            `mongodb://localhost:27017/mahdi_alipour`
        );
        return this.mongooseInstance;
    }
}

DbContext.connect();
export default DbContext;
