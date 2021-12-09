import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogDetailFooterBody } from "./style";
import { Flex } from "../../shared/layer/style";

function BlogDetailsFooter({ tags, writer }) {
  return (
    <BlogDetailFooterBody>
      <div className="blog-writer">
        <h2>درباره نویسنده</h2>
        <section>
          <Flex align={"center"}>
            <Image src="/img/avatar.jpg" width="48" height="48" alt="ss" />
            <span>{writer}</span>
          </Flex>
        </section>
        <h2>تگ ها</h2>
        <section className={"tags"}>
          <ul>
            {tags &&
              Array.isArray(JSON.parse(tags[0])) &&
              JSON.parse(tags[0]).map((tag) => (
                <li key={tag.id}>
                  <Link href={tag.label}>
                    <a>{tag.label}</a>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      </div>
      <div className="blog-related">
        <h2>مقالات مرتبط</h2>
        <section className="blog-related-items">
          <div>
            <Flex align={"center"}>
              <Link href="/">
                <a>
                  <Image
                    src="/img/blog-thumbnail.png"
                    width={"130"}
                    height={"75"}
                    alt={""}
                  />
                </a>
              </Link>
              <h3>
                <Link href={"/"}>
                  <a>برترین فریمورک های جاوااسکریپت در 2020</a>
                </Link>
              </h3>
            </Flex>
          </div>
          <div>
            <Flex align={"center"}>
              <Link href={"/"}>
                <a>
                  <Image
                    src="/img/blog-thumbnail.png"
                    width={"130"}
                    height={"75"}
                    alt={""}
                  />
                </a>
              </Link>
              <h3>
                <Link href={"/"}>
                  <a>برترین فریمورک های جاوااسکریپت در 2020</a>
                </Link>
              </h3>
            </Flex>
          </div>
          <div>
            <Flex align={"center"}>
              <Link href={"/"}>
                <a>
                  <Image
                    src="/img/blog-thumbnail.png"
                    width={"130"}
                    height={"75"}
                    alt={""}
                  />
                </a>
              </Link>
              <h3>
                <Link href={"/"}>
                  <a>برترین فریمورک های جاوااسکریپت در 2020</a>
                </Link>
              </h3>
            </Flex>
          </div>
        </section>
      </div>
    </BlogDetailFooterBody>
  );
}

export default BlogDetailsFooter;
