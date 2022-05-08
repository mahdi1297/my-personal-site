import React from "react";
import Icons from "../../shared/icons";
import { HeaderBody, HeaderInner } from "./style";

const Header = ({ setSidebar }) => {
  const sidebarToggleHandler = () => {
    setSidebar(true);
  };

  return (
    <HeaderBody>
      <HeaderInner>
        <span onClick={sidebarToggleHandler}>
          <Icons name="menu" width="35" color={"black"} />
        </span>
      </HeaderInner>
    </HeaderBody>
  );
};

export default Header;
