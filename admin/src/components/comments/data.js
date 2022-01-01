import axios from "axios";

const GET_COMMENT_LIST_URL = "http://localhost:5000/api/v1/comment/edit-list";

async function getCommentList() {
  let data;
  const result = await axios.post(GET_COMMENT_LIST_URL, { data: "x" });

  if (result) {
    data = result.data;
  }

  return { data };
}

export { getCommentList };
