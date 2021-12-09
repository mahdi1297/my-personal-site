import React from "react";
import BlogHome from "../../components/blog";
import { getBlogList } from "./data";

const Blog = ({ request }) => {
  return <BlogHome data={request.result} />;
};

export async function getServerSideProps() {
  const { data, error } = await getBlogList();

  return {
    props: {
      request: data,
    },
  };
}

export default Blog;
