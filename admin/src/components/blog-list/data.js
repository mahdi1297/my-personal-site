import { post } from "../../utils/httpRequest/post";

const GET_BLOG_LIST_URL = "http://localhost:5000/api/v1/blog/edit-list";

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

export { getBlogList };
