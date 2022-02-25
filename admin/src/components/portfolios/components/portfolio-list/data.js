// portfolio
import { get } from "./../../../../utils/httpRequest/get";

const GET_COMMENT_LIST_URL = `${process.env.REACT_APP_DEV_API}portfolio`;

async function getPortfolioList() {
  const { data } = await get(
    `${GET_COMMENT_LIST_URL}`,
    { x: "" },
    false,
    false
  );
  return { data };
}

export { getPortfolioList };
