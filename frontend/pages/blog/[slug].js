import React from "react";
import BlogDetailIndex from "./../../components/blog-detail";
import { getBySlug } from "./data";

const BlogDetail = ({ data }) => {
  console.log(data);
  return <BlogDetailIndex data={data} />;
};

export async function getServerSideProps({ params }) {
  const { slug } = params;

  if (!slug) {
    return;
  }

  const { data, error } = await getBySlug(slug);
  if (error.status) {
    return;
  }
  return {
    props: {
      slug,
      data: data.result,
    },
  };
}

export default BlogDetail;
