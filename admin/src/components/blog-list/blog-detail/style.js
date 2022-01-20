import styled from "styled-components";
import { themeColor } from "../../../theme/color";

const Body = styled.div`
  padding: 10px;

  & strong {
    color: ${themeColor.ORANGE};
    display: block;
    margin-bottom: 10px;
  }

  & h2 {
    color: ${themeColor.BLACK};
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 20px;
  }

  & textarea.disabled-inp {
    width: 100%;
    background: ${themeColor.LIGHT};
    border: none;
    padding: 8px;
    border-radius: 0;
    height: auto;
    opacity: 90%;
    cursor: not-allowed;
  }
`;

export { Body };
