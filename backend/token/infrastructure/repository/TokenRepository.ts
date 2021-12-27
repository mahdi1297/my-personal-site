import mongoose from "mongoose";
import TokenSchema from "./../context/TokenSchema";
import ITokenRepository from "../../domain/ITokenRepository";

class TokenRepository<T extends mongoose.Document>
    implements ITokenRepository<T>
{
    private _model = TokenSchema;

    async get(item: object) {
        return await this._model.findOne(item);
    }

    async create(item: T) {
        return await this._model.create(item);
    }

    async update(_id: string, updatePack: any) {
        return await this._model.findOneAndUpdate({ userId: _id }, updatePack);
    }

    async exist(userId: string) {
        return await this._model.exists({ userId: userId });
    }
}

export default TokenRepository;
