/* eslint-disable array-callback-return */
import React, { useState } from "react";
import Sidebar from "./layout/sidebar";
import Cookies from "universal-cookie";
import Header from "./layout/header";
import Auth from "./components/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { addTokenAction } from "./actions/tokenActions";
import { getUserByToken } from "./data";
import { useDispatch } from "react-redux";
import { appRoutes } from "./routes";
import { Container } from "reactstrap";
import { Toaster } from "react-hot-toast";
import { Body } from "./style";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

const Cookie = new Cookies();
const token = Cookie.get("i_v_c");

function App() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const dispatch = useDispatch();

  async function handleToken() {
    if (token !== undefined) {
      const { data } = await getUserByToken(token);
      if (data && data.status === 200) {
        dispatch(addTokenAction(data.result));
      }
    }
  }

  handleToken();

  return (
    <>
      <Router basename="/">
        {!token ? (
          <Auth />
        ) : (
          <>
            <Header setSidebar={setIsOpenSidebar} />
            <Sidebar open={isOpenSidebar} setSidebar={setIsOpenSidebar} />
            <Body>
              <Container>
                <Switch>
                  {appRoutes.map((route) => {
                    if (route.isExact)
                      return (
                        <Route key={route.id} path={route.path} exact>
                          {route.component}
                        </Route>
                      );
                    else if (!route.isExact)
                      return (
                        <Route key={route.id} path={route.path}>
                          {route.component}
                        </Route>
                      );
                  })}
                </Switch>
              </Container>
            </Body>
          </>
        )}
      </Router>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
