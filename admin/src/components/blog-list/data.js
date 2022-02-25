import { post } from "../../utils/httpRequest/post";
import { put } from "./../../utils/httpRequest/put";

const GET_BLOG_LIST_URL = `${process.env.REACT_APP_DEV_API}blog/edit-list`;
const PUBLISH_BLOG = `${process.env.REACT_APP_DEV_API}blog/publish`;

async function getBlogList(pageParam, Token) {
  const { data } = await post(
    `${GET_BLOG_LIST_URL}/${pageParam}`,
    { x: "" },
    false,
    true,
    Token
  );
  return { data };
}

const publishBlog = (dataPack, Token) => {
  const { data } = put(PUBLISH_BLOG, dataPack, true, true, Token);

  return { data };
};

export { getBlogList, publishBlog };
