import axios from "axios";
import {redirector} from "../../helper/redirector";

export const post = async (path, dataPack) => {
    let data = {};
    let error = {};
    try {
        const request = await axios.post(path, dataPack);

        if (request) {
            data.status = request.status;
            data.message = request.data.message || "";
            data.count = request.data.count || 0;
            data.result = request.data.result;
        }
    } catch (err) {
        if (err) {
            const status = (err.response && err.response.status) || 500;
            const data = err.response && err.response;
            if (status === 500) redirector("with-load", "/500");
            if (status === 403) redirector("with-load", "/403");
            error.status = status;
            error.data = data;
        }
    }

    return {data, error};
};
