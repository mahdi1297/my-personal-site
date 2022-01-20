import { post } from "../../utils/httpRequest/post";

const GET_BLOG_LIST_URL = "http://localhost:5000/api/v1/blog/edit-list";

async function getBlogList(pageParam) {
  const { data } = await post(
    `${GET_BLOG_LIST_URL}/${pageParam}`,
    { x: "" },
    false,
    true
  );
  return { data };
}

export { getBlogList };
