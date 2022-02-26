import { del } from "../../utils/httpRequest/delets";
import { post } from "../../utils/httpRequest/post";
import { put } from "../../utils/httpRequest/put";

const GET_COMMENT_LIST_URL = `${process.env.REACT_APP_DEV_API}comment/edit-list`,
  CONFIRM_COMMENT_URL = `${process.env.REACT_APP_DEV_API}comment`,
  REMOVE_COMMENT_URL = `${process.env.REACT_APP_DEV_API}comment`;

async function getCommentList(pageParam, Token) {
  const { data } = await post(
    `${GET_COMMENT_LIST_URL}/${pageParam}`,
    { x: "" },
    false,
    true,
    Token
  );
  return { data };
}

async function confirmComment(_id, Token) {
  const { data } = await put(
    CONFIRM_COMMENT_URL,
    { _id: _id },
    true,
    true,
    Token
  );
  return { data };
}

async function removeComment(_id, Token) {
  const { data } = await del(
    REMOVE_COMMENT_URL,
    { _id: _id },
    true,
    true,
    Token
  );
  return { data };
}

export { getCommentList, confirmComment, removeComment };
