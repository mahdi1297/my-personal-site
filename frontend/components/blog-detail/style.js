import styled from "styled-components";
import { themeColor } from "./../../theme/color";

const BlogDetailBody = styled.div`
  width: 100%;
`;
const BlogHeaderBody = styled.div`
  width: 100%;
  height: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  & > div {
    width: 100%;
    height: auto;
  }
  & div.title-container {
    & h2 {
      color: ${themeColor.BLACK};
      font-size: 35px;
    }
    & section.blog-info {
      width: 100%;
      height: 50px;
      & div > div {
        padding-left: 20px;
        font-size: 15px;
        color: #ccc;
        & svg {
          margin-right: 5px;
        }
      }
    }
  }
  & div.main_image-container {
    & span {
      position: relative !important;
      height: auto !important;
      width: 100% !important;
      & img {
        border-radius: 5px !important;
      }
    }
  }
  @media (min-width: 1000px) {
    flex-direction: row !important;
    justify-content: space-between;
    & > div.title-container {
      width: 50% !important;
      & h2 {
        font-size: 55px;
      }
    }
    & > div.main_image-container {
      width: 40% !important;
    }
    & div.main_image-container {
      padding-top: 30px;
      & span {
        box-shadow: 27px 23px 28px #27244336;
        border-radius: 10px;
      }
    }
  }
`;
const BlogDetailContentBody = styled.main`
  width: 100%;
  height: auto;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap !important;
  margin-bottom: 30px;
  & div.blog_detail-main {
    border-bottom: 2px solid ${themeColor.LIGHT};
    padding-bottom: 30px;
    line-height: 35px;
  }
  & div.blog_detail-sidebar {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    font-size: 16px;
  }
  @media (min-width: 1000px) {
    flex-wrap: no-wrap;
    & div.blog_detail-main {
      width: 65%;
    }
    & div.blog_detail-sidebar {
      width: 10%;
      height: 100px;
      margin-top: 90px;
      position: sticky;
      position: -webkit-sticky;
      top: 100px;
      display: flex;
      flex-direction: column;
      & > div {
        color: ${themeColor.MAIN};
        margin-bottom: 0px;
        & svg {
          cursor: pointer;
          background: ${themeColor.YELLOW};
          margin: 10px;
          width: 40px;
          height: 40px;
          padding: 3px;
          border-radius: 5px;
        }
        & svg:hover {
          color: ${themeColor.YELLOW};
        }
      }
    }
  }
`;

const BlogDetailFooterBody = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  & > div {
    width: 100%;
    height: auto;
  }
  & div h2 {
    font-size: 18px;
  }
  & div.blog-writer {
    padding: 5px;

    & img {
      border-radius: 100%;
    }
    & span {
      margin-right: 10px;
      font-size: 14px;
    }
  }
  & section.tags {
    width: 100%;
    height: auto;
    & ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      & li {
        display: inline-block;
        list-style: none;
        height: 28px;
        line-height: 1;
        margin-left: 10px;
        margin-bottom: 7px;
        border-radius: 3px;
        border: 2px solid #ccc;
        & a {
          display: block;
          width: 100%;
          height: 100%;
          padding: 6px 5px 0 5px;
          font-size: 14px;
          color: #ccc;
        }
        & a:hover {
          color: ${themeColor.MAIN};
        }
      }
    }
  }

  & div.blog-related {
    & section {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      & > div {
        width: 100%;
        height: 75px;
        margin-bottom: 20px;
        & span {
          border-radius: 5px;
          box-shadow: 0 3px 9px 0 rgb(0, 0, 0, 20%);
          cursor: pointer;
        }
        & span:hover {
          box-shadow: 0 3px 9px 3px rgb(0, 0, 0, 25%);
        }
        & img {
          width: 40%;
          border-radius: 5px;
        }
        & h3 {
          font-size: 14px;
          color: #505050;
          width: 60%;
          padding-right: 10px;
          overflow: hidden;
          a:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  @media (min-width: 1000px) {
    flex-direction: row !important;
    width: 65% !important;
    & > div {
      width: 50%;
    }
  }
`;

export {
  BlogDetailBody,
  BlogHeaderBody,
  BlogDetailContentBody,
  BlogDetailFooterBody,
};
