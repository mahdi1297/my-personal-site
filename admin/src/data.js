import { post } from "./utils/httpRequest/post";
import Cookies from "universal-cookie";

const cookie = new Cookies();

const URL = "http://localhost:5000/api/v1/user/get-user";

async function getUserByToken(token) {
  //   const decoded = jwt_decode(token);
  //   console.log(decoded);
  //   if (decoded.type === "user" && decoded.type !== "admin") {
  //     cookie.remove("i_v_c");
  //     window.location.href = "/";
  //   }

  const { data, error } = await post(URL, { token, plcae: "admin" });

  if (error.status || !data || data.status !== 200) {
    cookie.remove("i_v_c");
    window.location.href = "/";
  }

  if (data.token) {
    cookie.set("i_v_c", data.token);
  }

  return { data };
}

export { getUserByToken };
