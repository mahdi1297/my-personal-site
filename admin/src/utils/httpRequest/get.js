import axios from "axios";
import toast from "react-hot-toast";
import { redirector } from "../../helper/redirector";

export const get = async (path, showSuccessToast, showErrorToast) => {
  let data = {};
  let error = {};
  try {
    const request = await axios.get(path);

    if (request) {
      data.status = request.status;
      data.message = request.data.message || "";
      data.count = request.data.count || 0;
      data.result = request.data.result;

      if (showSuccessToast) {
        toast.success(request.data.message);
      }
    }
  } catch (err) {
    if (err) {
      if (err.response) {
        if (err.response.status === 500) redirector("with-load", "/500");
        if (err.response.status === 403) redirector("with-load", "/403");
        error.status = err.response.status | 500;
        error.data = err.response;
        if (showErrorToast) {
          toast.error(err.response.data.message);
        }
      }
    }
  }

  return { data, error };
};
