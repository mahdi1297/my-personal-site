import { del } from "../../utils/httpRequest/delets";
import { post } from "../../utils/httpRequest/post";
import { put } from "../../utils/httpRequest/put";

const GET_USER_LIST_URL = "http://localhost:5000/api/v1/user/list",
  CONFIRM_USER_URL = "http://localhost:5000/api/v1/user/refactor",
  REMOVE_USER_URL = "http://localhost:5000/api/v1/user";

async function getUserList(pageParam) {
  const { data } = await post(
    `${GET_USER_LIST_URL}`,
    { pageNumber: pageParam },
    false,
    true
  );
  return { data };
}

async function confirmUser(_id) {
  const { data } = await put(CONFIRM_USER_URL, { _id: _id }, true, true);
  return { data };
}

async function removeUser(_id, token) {
  const { data } = await del(
    REMOVE_USER_URL,
    { _id: _id },
    true,
    true,
    "token"
  );
  return { data };
}

export { getUserList, confirmUser, removeUser };
