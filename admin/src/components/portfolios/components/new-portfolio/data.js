import { post } from "./../../../../utils/httpRequest/post";

const CREATE_POSRTOLIO = "http://localhost:5000/api/v1/portfolio";

const createPortfolio = async (dataObj) => {
  const { data } = post(CREATE_POSRTOLIO, dataObj, true, true);
  console.log(data);
};

export { createPortfolio };
