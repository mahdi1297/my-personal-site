import { post } from "../../../utils/httpRequest/post";

const GET_COMMENT_PARENT = "http://localhost:5000/api/v1/blog/get-by-id";
const REPLY_COMMENT = "http://localhost:5000/api/v1/comment";

const getCommentParent = async (parentId, setBloginfo) => {
  const { data } = await post(
    GET_COMMENT_PARENT,
    { parentId: parentId },
    false,
    true
  );

  if (data && data.status === 200) setBloginfo(data.result);

  return { data };
};

const replyComment = async (dataObj) => {
  const { data } = await post(REPLY_COMMENT, dataObj, true, true);


  return { data };
};

export { getCommentParent, replyComment };
