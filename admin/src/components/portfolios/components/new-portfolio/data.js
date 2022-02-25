import { post } from "./../../../../utils/httpRequest/post";

const CREATE_POSRTOLIO = `${process.env.REACT_APP_DEV_API}portfolio`;

const createPortfolio = async (dataObj, Token) => {
  const { data } = post(CREATE_POSRTOLIO, dataObj, true, true, Token);
  console.log(data);
};

export { createPortfolio };
