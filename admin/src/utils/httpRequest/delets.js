import axios from "axios";
import { redirector } from "../../helper/redirector";
import toast from "react-hot-toast";

import Cookie from "universal-cookie";

const cookie = new Cookie();

export const del = async (
  path,
  dataPack,
  showSuccessToast,
  showErrorToast,
  Token
) => {
  let data = {};
  let error = {};
  try {
    let request;
    if (Token) {
      request = await axios.delete(path, {
        headers: {
          Authorization: Token,
        },
        data: dataPack,
      });
    } else {
      request = await axios.delete(path, dataPack);
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

        if (
          error.status === 400 ||
          error.status === 401 ||
          error.status === 402 ||
          error.status === 403
        ) {
          cookie.remove("u_v-c");
          window.location.href = "/";
        }

        if (showErrorToast) {
          toast.error(err.response.data.message);
        }
      }
    }
  }

  return { data, error };
};
