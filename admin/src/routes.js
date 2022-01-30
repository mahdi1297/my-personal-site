import { lazy, Suspense } from "react";
import Loader from "./shared/loader";

const Dashboard = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./components/dashborad"));
    }, 1000);
  });
});

const Comments = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./components/comments"));
    }, 1000);
  });
});

const Users = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./components/users"));
    }, 1000);
  });
});

const BlogList = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./components/blog-list"));
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

export const appRoutes = [
  {
    id: 1,
    path: "/",
    isExact: true,
    component: (
      <Suspense fallback={<Loader />}>
        <Dashboard />
      </Suspense>
    ),
  },
  {
    id: 2,
    path: "/new-blog",
    isExact: true,
    component: (
      <Suspense fallback={<Loader />}>
        <NewBlog />
      </Suspense>
    ),
  },
  {
    id: 3,
    path: "/portfolio",
    isExact: true,
    component: (
      <Suspense fallback={<Loader />}>
        <Portfolio />
      </Suspense>
    ),
  },
  {
    id: 4,
    path: "/blog-list",
    isExact: false,
    component: (
      <Suspense fallback={<Loader />}>
        <BlogList />
      </Suspense>
    ),
  },
  {
    id: 5,
    path: "/comments",
    isExact: false,
    component: (
      <Suspense fallback={<Loader />}>
        <Comments />
      </Suspense>
    ),
  },
  {
    id: 6,
    path: "/users",
    isExact: false,
    component: (
      <Suspense fallback={<Loader />}>
        <Users />
      </Suspense>
    ),
  },
];
