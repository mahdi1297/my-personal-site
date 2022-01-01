import React from "react";
import Dashboard from "./components/dashborad";
import Sidebar from "./components/sidebar";
import Cookies from "universal-cookie";
import NewBlog from "./components/new-blog";
import Header from "./components/Header";
import Auth from "./components/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import { Toaster } from "react-hot-toast";
import { Body } from "./style";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import Comments from "./components/comments";

const Cookie = new Cookies();
const token = Cookie.get("i_v_c");

function App() {
  return (
    <>
      <Router>
        {!token ? (
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
                  <Route path="/comments" exact>
                    <Comments />
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
