import { del } from "../../utils/httpRequest/delets";
import { post } from "../../utils/httpRequest/post";
import { put } from "../../utils/httpRequest/put";

const GET_USER_LIST_URL = `${process.env.REACT_APP_DEV_API}user/list`,
  CONFIRM_USER_URL = `${process.env.REACT_APP_DEV_API}refactor`,
  REMOVE_USER_URL = `${process.env.REACT_APP_DEV_API}user`;

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
