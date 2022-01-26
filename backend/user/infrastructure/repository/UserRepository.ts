import mongoose from "mongoose";
import IUserRepository from "../../domain/IUserRepository";
import UserSchema from "../context/UserSchema";

class UserRepository<T extends mongoose.Document>
    implements IUserRepository<T>
{
    private _model = UserSchema;

    async list(pageNumber: number) {
        return await this._model.find({});
    }

    async create(item: T) {
        return await this._model.create(item);
    }

    async count() {
        return await this._model.count();
    }

    async get(item: any) {
        return await this._model.findOne(item);
    }

    async checkUser(item: any) {
        return await this._model.exists(item);
    }

    async update(_id: string, data: any) {
        return await this._model.findOneAndUpdate({ _id: _id }, data);
    }

    async remove(_id: string) {
        return await this._model.findOneAndUpdate(
            { _id: _id },
            { isRegistered: false }
        );
    }

    async refactor(_id: string) {
        return await this._model.findOneAndUpdate(
            { _id: _id },
            { isRegistered: true }
        );
    }
}

export default UserRepository;
