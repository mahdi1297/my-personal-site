import Cookies from "universal-cookie";
import toast from "react-hot-toast";
import { post } from "../../utils/httpRequest/post";

const cookies = new Cookies();

async function getUser(obj) {
  const { data, error } = await post(
    `${process.env.REACT_APP_DEV_API}user/login-admin`,
    obj
  );

  if (error && error.status) {
    return toast.error(error.data.data.message);
  }

  if (data && data.status === 200) {
    cookies.set("i_v_c", data.result, {
      path: "/",
      expires: new Date(Date.now() + 5000000),
    });
    toast.success(data.message);
  }

  return { data };
}

export { getUser };
