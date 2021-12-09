import React from "react";
import { BlogDetailContentBody } from "./style";
import { Flex } from "./../../shared/layer/style";
import { Heart, Twitter } from "react-feather";
import ReactHtmlParser from "react-html-parser";

const BlogDetailContent = ({ content }) => {
  return (
    <BlogDetailContentBody>
      <Flex
        justify="space-between"
        wrap={"true"}
        style={{ overflowX: "hidden", overflowY: "clip" }}
      >
        <article className="main_article">
          <div className="blog_detail-main">{ReactHtmlParser(content)}</div>
          <div className="blog_detail-sidebar">
            <div>
              <Flex align={"center"}>
                <Heart size={30} />
              </Flex>
            </div>
            <div>
              <Flex align={"center"}>
                <Twitter size={30} />
              </Flex>
            </div>
          </div>
        </article>
      </Flex>
    </BlogDetailContentBody>
  );
};

export default BlogDetailContent;
