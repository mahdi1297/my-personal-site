import React, { useEffect, useState } from "react";
import Dashboard from "./components/dashborad";
import Sidebar from "./components/sidebar";
import NewBlog from "./components/new-blog";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import { Body } from "./style";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import { Toaster } from "react-hot-toast";
import Auth from "./components/auth";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    // setTimeout(() => {
    //   setIsAuth(true);
    // }, 3000);
  }, []);

  return (
    <>
      <Router>
        {!isAuth ? (
          <Auth />
        ) : (
          <>
            <Header />
            <Sidebar />
            <Body>
              <Container>
                <Switch>
                  <Route path="/" exact>
                    <Dashboard />
                  </Route>
                  <Route path="/new-blog" exact>
                    <NewBlog />
                  </Route>
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
