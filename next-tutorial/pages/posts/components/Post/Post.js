import React from "react";
import Link from "next/link";

//import styles from "./Post.module.scss";

import styled from "@emotion/styled";

const StyledH3 = styled.h3({
  fontSize: "18px",
  marginTop: "60px",
});

const PostLink = styled.a`
  color: #333;
`;

export default function Post({ id, title, body }) {
  return (
    <>
      <StyledH3>
        <Link href="/posts/[id]" as={"/posts/" + id}>
          <PostLink>{title}</PostLink>
        </Link>
      </StyledH3>
      <p>{body}</p>
    </>
  );
}
