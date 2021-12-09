import styled from "styled-components";
import { themeColor } from "../../../theme/color";

const BLogItemBody = styled.section`
  width: 100%;
  height: auto;
`;

const Title = styled.div`
  width: 100%;
  border-bottom: 2px solid ${themeColor.LIGHT};
  & h1 {
    display: inline;
    font-size: 23px;
    border-bottom: 2px solid ${themeColor.BLACK};
  }
`;

const BlogItemContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  & > div {
    width: 100% !important;
    margin-bottom: 40px;
  }

  & > div:hover h2::after {
    background: linear-gradient(
      to right,
      ${themeColor.YELLOW};,
      rgba(39, 36, 67, 0)
    ) !important;
  }

  @media (min-width: 590px) {
    & > div {
      width: 48% !important;
    }
  }

  @media (min-width: 950px) {
    & > div {
      width: 30% !important;
    }
  }
`;

const BlogItem = styled.div`
  height: 420px;
  display: flex;
  position: relative;
  display: flex;
  flex-direction: column;
  & div.blog-card_header {
    height: 250px;
    & span {
      background: ${themeColor.YELLOW}!important;
      height: 250px !important;
      display: block;
      & img {
        border-radius: 3px 3px 0 0;
      }
      & img:hover {
        opacity: 50%;
      }
    }
  }
  & div.blog-card_body {
    overflow: hidden;
    & h2 {
      width: 110%;
      font-size: 17px;
      height: 35px;
      white-space: no-wrap;
      overflow: hidden;
      z-index: 1;
    }
    & h2::after {
      content: "";
      display: block;
      width: 30px;
      height: 100%;
      position: relative;
      top: -35px;
      right: 85%;
      z-index: 5;
      background: linear-gradient(to right, #fcfdfe, rgba(39, 36, 67, 0));
    }
    & h2:hover {
      color: ${themeColor.YELLOW};
    }
    & p {
      width: 100%;
      height: 45px;
      overflow: hidden;
      font-size: 12px;
      font-weight: 100;
      color: #9d9d9d;
    }
  }
  & div.blog-card_footer {
    width: 100%;
    height: 30px;
    padding: 5px;
    & > div > div {
      margin-left: 20px;
      display: flex;
      align-items: center;
      color: #ccccff;
      font-size: 14px;
      & svg {
        margin-left: 5px;
      }
    }
  }
`;

export { BLogItemBody, Title, BlogItemContainer, BlogItem };
