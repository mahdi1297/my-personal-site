import axios from "axios";

async function getUser(data) {
  const result = await axios.post("", data);
  console.log(result);
}

export { getUser };
