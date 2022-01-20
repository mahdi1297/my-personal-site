import { post } from "./../../../utils/httpRequest/post";
import { put } from "./../../../utils/httpRequest/put";

const GET_BLOG = "http://localhost:5000/api/v1/blog/get-detail",
  UPDATE_BLOG = "http://localhost:5000/api/v1/blog";

const getBlog = async (_id, setBloginfo) => {
    const { data } = await post(GET_BLOG, { _id: _id }, false, true);

    if (data && data.status === 200) setBloginfo(data.result);

    return { data };
  },
  updateBlog = async (dataObj) => {
    const { data } = await put(UPDATE_BLOG, dataObj, true, true);

    return { data };
  };

export { getBlog, updateBlog };
