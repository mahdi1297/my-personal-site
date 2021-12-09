import { get } from "../../utils/httpErrors/get";
import { post } from "../../utils/httpErrors/post";

async function getBlogList() {
  const { data, error } = await get("http://localhost:5000/api/v1/blog/list/0");
  if (data.status === 400 || data.status === 404) {
    return false;
  }
  return { data, error };
}
async function getBySlug(slug) {
  const slugData = { slug: slug };
  const { data, error } = await post(
    "http://localhost:5000/api/v1/blog/get-by-slug",
    slugData
  );
  if (data.status === 400 || data.status === 404) {
    return false;
  }
  return { data, error };
}

export { getBlogList, getBySlug };
