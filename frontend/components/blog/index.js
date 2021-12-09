import React from "react";
import BlogHero from "./hero";
import BlogItems from "./blog-items";
import { Container } from "../../shared/layer/style";

function BlogHome({ data }) {
  console.log();
  return (
    <main>
      <BlogHero />
      <Container>
        <BlogItems data={data} />
      </Container>
    </main>
  );
}

export default BlogHome;
