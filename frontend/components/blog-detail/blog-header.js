import React from "react";
import Image from "next/image";
import { Link, PenTool } from "react-feather";
import { BlogHeaderBody } from "./style";
import { Flex } from "./../../shared/layer/style";

const BlogHeader = ({ imageSrc, title, writer, createdAt }) => {
  const src = `http://localhost:5000/${imageSrc}`;

  let date = new Date(createdAt).toLocaleDateString("fa-IR");

  return (
    <>
      <BlogHeaderBody>
        <div className="title-container">
          <h2>{title}</h2>
          <section className="blog-info">
            <Flex align="center">
              <div>
                <Flex align="center">
                  {writer}
                  <PenTool size={16} />
                </Flex>
              </div>
              <div>
                <Flex align="center">
                  <span style={{ direction: "ltr" }}>{date}</span>
                  <Link size={16} />
                </Flex>
              </div>
            </Flex>
          </section>
        </div>
        <div className="main_image-container">
          <Image
            loader={() => src}
            src={src}
            className="thumb_img"
            placeholder="blur"
            blurDataURL={src}
            width="400"
            height="400"
            alt=""
          />
        </div>
      </BlogHeaderBody>
    </>
  );
};

export default BlogHeader;
