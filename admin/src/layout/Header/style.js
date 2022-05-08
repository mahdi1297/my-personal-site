import styled from "styled-components";
import { themeColor } from "../../theme/color";

const HeaderBody = styled.div`
  width: 100%;
  height: 80px;
  background: ${themeColor.LIGHT};
  border-bottom: 1px solid ${themeColor.LIGHT_BORDER_GRAY};
  direction: ltr;
`;

const HeaderInner = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 1px 9px 11px ${themeColor.LIGHT_BORDER_GRAY};
  border-bottom: 1px solid ${themeColor.LIGHT_BORDER_GRAY};
  display: flex;
  align-items: center;

  & svg {
    cursor: pointer;
    margin-left: 20px;
  }

  @media (min-width: 800px) {
    width: 83%;

    & svg {
      display: none;
    }
  }
`;

export { HeaderBody, HeaderInner };
