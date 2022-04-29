import { post } from "./../../../utils/httpRequest/post";
import { put } from "./../../../utils/httpRequest/put";

const GET_BLOG = `${process.env.REACT_APP_DEV_API}blog/get-detail`,
  UPDATE_BLOG = `${process.env.REACT_APP_DEV_API}blog/`;

const getBlog = async (_id, Token) => {
    const { data } = await post(GET_BLOG, { _id: _id }, false, true, Token);

    return { data };
  },
  updateBlog = async (formData, Token) => {
    const { data } = await put(UPDATE_BLOG, formData, true, true, Token);

    return { data };
  };

export { getBlog, updateBlog };
