import { del } from "../../utils/httpRequest/delets";
import { post } from "../../utils/httpRequest/post";
import { put } from "../../utils/httpRequest/put";

const GET_USER_LIST_URL = "http://localhost:5000/api/v1/user/list",
  CONFIRM_USER_URL = "http://localhost:5000/api/v1/user/refactor",
  REMOVE_USER_URL = "http://localhost:5000/api/v1/user";

async function getUserList(pageParam, Token) {
  const { data } = await post(
    `${GET_USER_LIST_URL}`,
    { pageNumber: pageParam },
    false,
    true,
    Token
  );
  return { data };
}

async function confirmUser(_id, Token) {
  const { data } = await put(CONFIRM_USER_URL, { _id: _id }, true, true, Token);
  return { data };
}

async function removeUser(_id, Token) {
  const { data } = await del(REMOVE_USER_URL, { _id: _id }, true, true, Token);
  return { data };
}

export { getUserList, confirmUser, removeUser };
