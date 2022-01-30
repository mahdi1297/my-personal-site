// portfolio
import { get } from "./../../../../utils/httpRequest/get";

const GET_COMMENT_LIST_URL = "http://localhost:5000/api/v1/portfolio";

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
