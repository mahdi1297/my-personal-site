import React from "react";
import Icons from "../../shared/icons";
import { SidebarBody, SidebarHeader } from "./style";
import { Link, withRouter } from "react-router-dom";
import { sidebarRoutes } from "./routes";

const Sidebar = ({ location }) => {
  return (
    <SidebarBody>
      <SidebarHeader>
        <div className="d-flex align-items-center justify-content-center">
          <Link to={"/"}>Mahdi Alipour</Link>
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
  );
};

export default withRouter(Sidebar);
