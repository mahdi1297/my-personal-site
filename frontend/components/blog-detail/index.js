import React from "react";
import BlogHeader from "./blog-header";
import { Container } from "./../../shared/layer/style";
import { BlogDetailBody } from "./style";
import BlogDetailContent from "./blog-content";
import BlogDetailsFooter from "./blog-footer";

const BlogDetailIndex = ({ data }) => {
  return (
    <div>
      <BlogDetailBody>
        <Container>
          <BlogHeader
            imageSrc={data.main_image}
            title={data.title}
            writer={data.writer}
            createdAt={data.createdAt}
          />
          <BlogDetailContent content={data.content} />
          <BlogDetailsFooter tags={data.tags} writer={data.writer} />
        </Container>
      </BlogDetailBody>
    </div>
  );
};

export default BlogDetailIndex;
