import styled from "styled-components";
import { themeColor } from "../../theme/color";

const AuthBody = styled.div`
  width: 60%;
  min-width: 350px;
  max-width: 500px;
  margin: auto;
  margin-top: 100px;
  box-shadow: 0 7px 20px #edeeffce, 0 4px 5px #ecedffc9;
  padding: 20px;
  color: ${themeColor.BLACK};
  text-align: center;
`;

export { AuthBody };
