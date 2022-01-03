import styled from "styled-components";
// import { themeColor } from "../../theme/color";

const PaginateBody = styled.div`
    heigth: 60px;
    margin-top: 40px;
  `,
  Btns = styled.div`
    width: 200px;
    height: auto;
    & button {
      border: none;
      border: 1px solid #efefef;
      box-shadow: 1px 4px 10px 4px #e7e4e4;
      background: none;
      border-radius: 15px;
      width: 40px;
      height: 40px;
      margin-left: 10px;
    }
    & button svg {
      color: #183d69;
    }
    & button.disabled svg {
      color: #ccc;
    }
  `;

export { PaginateBody, Btns };
