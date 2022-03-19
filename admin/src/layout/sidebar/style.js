import styled from "styled-components";
import { themeColor } from "../../theme/color";

const Body = styled.div`
  @media (max-width: 800px) {
    & div.deactive {
      right: -300px;
      transition: all ease 0.5s;
    }

    & div.dark-wrapper.active {
      width: 100%;
      height: 100vh;
      position: fixed;
      top: 0;
      right: 0;
      z-index: 999;
      background: #000000a1;
      transition: all ease 0s;
    }

    & div.active {
      right: 0;
      transition: all ease 0.5s;
    }
  }
`;

const SidebarBody = styled.div`
  width: 17%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background: ${themeColor.LIGHT};
  border-left: 2px solid ${themeColor.LIGHT_BORDER_GRAY};

  & ul {
    width: 100%;
    padding: 0;
    margin: 0;
  }

  & li {
    border-bottom: 1px solid ${themeColor.LIGHT_BORDER_GRAY};

    & a {
      color: ${themeColor.GRAY};
      font-size: 15px;
      padding: 9px 45px;
    }
  }
  & li.active {
    border-bottom: 1px solid ${themeColor.LIGHT_BORDER_GRAY};
    border-right: 4px solid ${themeColor.ORANGE};
    background: #fff;
    box-shadow: 1px 4px 19px #e7e7e7;
    & a {
      color: ${themeColor.BLACK};
      font-size: 15px;
    }
    & svg {
      color: ${themeColor.BLUE}!important;
    }
  }
  & li.active:hover {
    background: ${themeColor.BLUE};
    & a,
    svg {
      color: #fff;
    }
  }
  & li:hover {
    background: ${themeColor.BLUE};
    & a {
      color: #fff;
    }
  }

  @media (max-width: 1200px) {
    width: 23%;
  }

  @media (max-width: 1000px) {
    width: 28%;
  }

  @media (max-width: 800px) {
    width: 250px;
    z-index: 9999999999999999;
  }
`;

const SidebarHeader = styled.div`
  width: 100%;
  padding: 20px;
  display: block;
  border-bottom: 2px solid ${themeColor.LIGHT_BORDER_GRAY};

  & div.header-close {
    display: flex;

    & svg {
      margin-bottom: 20px;
      cursor: pointer;
    }
  }

  & > div {
    height: 100%;
    & a {
      color: ${themeColor.BLUE};
      font-size: 20px;
      font-weight: 900;
    }
  }

  @media (min-width: 800px) {
    & div.header-close {
      display: none !important;
    }
  }
`;

export { SidebarBody, SidebarHeader, Body };
