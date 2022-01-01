import axios from "axios";
import Cookies from "universal-cookie";
import toast from "react-hot-toast";

const cookies = new Cookies();

async function getUser(obj) {
  let data, error;
  const result = await axios
    .post("http://localhost:5000/api/v1/user/login", obj)
    .catch((error) => {
      toast.error(error.response.data.message);
    });

  if (result) {
    if (result.status === 200) {
      if (result.data && result.data.result) {
        data = result.data;
        cookies.set("i_v_c", result.data.result, {
          path: "/",
          expires: new Date(Date.now() + 5000000),
        });
        toast.success(result.data.message);
      }
    }
  }
  return { data, error };
}

export { getUser };
