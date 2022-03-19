import React from "react";
import Icons from "../../shared/icons";
import { SidebarBody, SidebarHeader, Body } from "./style";
import { Link, withRouter } from "react-router-dom";
import { sidebarRoutes } from "./routes";

const Sidebar = ({ location, open, setSidebar }) => {
  const sidebarCloseHandler = () => {
    setSidebar(false);
  };

  return (
    <Body>
      <div
        className={open ? "dark-wrapper active" : "dark-wrapper deactive"}
        onClick={sidebarCloseHandler}
      ></div>
      <SidebarBody className={open ? "active" : "deactive"}>
        <SidebarHeader>
          <div className="header-close d-flex align-items-center justify-content-center">
            <span onClick={sidebarCloseHandler}>
              <Icons name="close" width={30} color="red" />
            </span>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <Link to={"/"}>Mahdi Alipoor</Link>
          </div>
        </SidebarHeader>
        <ul className="d-flex flex-column">
          {sidebarRoutes.map((route) => (
            <li
              key={route.id}
              className={
                location.pathname === "/"
                  ? route.path === location.pathname
                    ? "active"
                    : undefined
                  : route.path.includes(location.pathname)
                  ? "active"
                  : undefined
              }
            >
              <Link
                to={route.path}
                className="d-flex w-100 h-100 justify-content-between"
              >
                {route.title}
                <Icons name={route.icon} />
              </Link>
            </li>
          ))}
        </ul>
      </SidebarBody>
    </Body>
  );
};

export default withRouter(Sidebar);
