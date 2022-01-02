import axios from "axios";

const GET_COMMENT_LIST_URL = "http://localhost:5000/api/v1/comment/edit-list";
const CONFIRM_COMMENT_URL = "http://localhost:5000/api/v1/comment";
const REMOVE_COMMENT_URL = "http://localhost:5000/api/v1/comment";

async function getCommentList() {
  let data;
  const result = await axios.post(GET_COMMENT_LIST_URL, { data: "x" });

  if (result) {
    data = result.data;
  }

  return { data };
}

async function confirmComment(_id) {
  let data;
  const result = await axios.put(CONFIRM_COMMENT_URL, { _id: _id });
  console.log(result);

  if (result) {
    data = result.data;
  }

  return { data };
}

async function removeComment(_id, token) {
  let data;
  const result = axios.delete(REMOVE_COMMENT_URL, {
    headers: {
      Authorization: "Token",
    },
    data: {
      _id: _id,
    },
  });

  console.log(result);

  if (result) {
    data = result.data;
  }

  return { data };
}

export { getCommentList, confirmComment, removeComment };
