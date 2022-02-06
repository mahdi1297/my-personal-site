import { post } from "./../../../../utils/httpRequest/post";

const CREATE_POSRTOLIO = "http://localhost:5000/api/v1/portfolio";

const createPortfolio = async (dataObj, Token) => {
  const { data } = post(CREATE_POSRTOLIO, dataObj, true, true, Token);
  console.log(data);
};

export { createPortfolio };
