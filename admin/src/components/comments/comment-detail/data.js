import { post } from "./../../../utils/httpRequest/post";

const GET_COMMENT_PARENT = `${process.env.REACT_APP_DEV_API}blog/get-by-id`;
const REPLY_COMMENT = `${process.env.REACT_APP_DEV_API}comment`;

const getCommentParent = async (parentId, setBloginfo, Token) => {
  const { data } = await post(
    GET_COMMENT_PARENT,
    { parentId: parentId },
    false,
    true,
    Token
  );

  if (data && data.status === 200) setBloginfo(data.result);

  return { data };
};

const replyComment = async (dataObj, Token) => {
  const { data } = await post(REPLY_COMMENT, dataObj, true, true, Token);

  return { data };
};

export { getCommentParent, replyComment };
