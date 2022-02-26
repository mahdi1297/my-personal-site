import axios from "axios";
import toast from "react-hot-toast";
import { redirector } from "../../helper/redirector";

import Cookie from "universal-cookie";

const cookie = new Cookie();

export const get = async (path, showSuccessToast, showErrorToast, Token) => {
  let data = {};
  let error = {};
  try {
    let request;
    if (Token) {
      request = await axios.get(path, {
        headers: { Authorization: `${Token}` },
      });
    } else {
      request = await axios.get(path);
    }

    if (request) {
      data.status = request.status;
      data.message = request.data.message || "";
      data.count = request.data.count || 0;
      data.result = request.data.result;

      if (
        request.status === 400 ||
        request.status === 401 ||
        request.status === 402 ||
        request.status === 403
      ) {
        cookie.remove("u_v-c");
        window.location.href = "/";
      }

      if (showSuccessToast === true) {
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

        if (
          error.status === 400 ||
          error.status === 401 ||
          error.status === 402 ||
          error.status === 403
        ) {
          cookie.remove("u_v-c");
          window.location.href = "/";
        }

        if (showErrorToast === true) {
          toast.error(err.response.data.message);
        }
      }
    }
  }

  return { data, error };
};
