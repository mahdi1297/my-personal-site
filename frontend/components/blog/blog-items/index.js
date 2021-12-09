import React from "react";
import BlogItemsItem from "./blog-item";
import { BLogItemBody, BlogItemContainer, Title } from "./style";
import { LAST_ARTICLES } from "../../../consts/consts";

function BlogItems({ data }) {
  return (
    <BLogItemBody className="mt-30">
      <Title>
        <h1>{LAST_ARTICLES}</h1>
      </Title>
      <BlogItemContainer className="pt-30">
        {data &&
          data.map((blog) => (
            <BlogItemsItem
              key={blog._id}
              thumbnain={blog.thumbnail}
              title={blog.title}
              slug={blog.slug}
              description={blog.description}
            />
          ))}
      </BlogItemContainer>
    </BLogItemBody>
  );
}

export default BlogItems;
