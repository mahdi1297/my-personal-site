import React, { lazy, Suspense } from "react";
import Dashboard from "./components/dashborad";
import Sidebar from "./layout/sidebar";
import Cookies from "universal-cookie";
import Loader from "./shared/loader";
import Header from "./layout/Header";
import Auth from "./components/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { addTokenAction } from "./actions/tokenActions";
import { getUserByToken } from "./data";
import { Container } from "reactstrap";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Body } from "./style";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

const Cookie = new Cookies();
const token = Cookie.get("i_v_c");

function App() {
  const dispatch = useDispatch();
  async function handleToken() {
    if (token) {
      const { data } = await getUserByToken(token);
      if (data && data.status === 200) {
        dispatch(addTokenAction(data.result));
      }
    }
  }
  handleToken();

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
                    <Suspense fallback={<Loader />}>
                      <NewBlog />
                    </Suspense>
                  </Route>
                  <Route path="/portfolio" exact>
                    <Suspense fallback={<Loader />}>
                      <Portfolio />
                    </Suspense>
                  </Route>
                  <Route path="/comments">
                    <Suspense fallback={<Loader />}>
                      <Comments />
                    </Suspense>
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

const Comments = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./components/comments"));
    }, 1000);
  });
});

const NewBlog = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./components/new-blog"));
    }, 1000);
  });
});

const Portfolio = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./components/portfolios"));
    }, 1000);
  });
});

export default App;
