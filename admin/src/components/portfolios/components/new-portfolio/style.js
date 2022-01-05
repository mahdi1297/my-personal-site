import styled from "styled-components";
import { themeColor } from "../../../../theme/color";

const NewPortfolioBody = styled.div`
  width: 100%;
  height: 100px;
  & button.new-portfolio {
    background: ${themeColor.BLUE};
    border: none;
  }
`;

export { NewPortfolioBody };
