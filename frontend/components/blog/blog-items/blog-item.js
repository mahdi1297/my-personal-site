import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, MessageSquare } from "react-feather";
import { BlogItem } from "./style";
import { Flex } from "../../../shared/layer/style";

function BlogItemsItem({ thumbnain, title, description, slug }) {
  const src = `http://localhost:5000/${thumbnain}`;
  return (
    <>
      <BlogItem>
        <div className="blog-card_header">
          <Link href={`/blog/${slug}`}>
            <a>
              <Image
                loader={() => src}
                src={src}
                className="thumb_img"
                placeholder="blur"
                blurDataURL={src}
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </a>
          </Link>
        </div>
        <div className="blog-card_body p-5">
          <h2>
            <Link href={`/blog/${slug}`}>
              <a>{title}</a>
            </Link>
          </h2>
          <p>{description}</p>
        </div>
        <div className="blog-card_footer">
          <Flex align="center">
            <div>
              <Eye size={16} /> 1389
            </div>
            <div>
              <MessageSquare size={16} /> 15
            </div>
          </Flex>
        </div>
      </BlogItem>
    </>
  );
}

export default BlogItemsItem;
