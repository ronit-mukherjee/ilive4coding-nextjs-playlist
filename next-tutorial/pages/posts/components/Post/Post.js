import React from "react";
import Link from "next/link";

import styles from "./Post.module.scss";

import styled from "@emotion/styled";

const StyledH3 = styled.h3({
  fontSize: "18px",
  marginTop: 20,
});

const PostLink = styled.a`
  color: #333;

  &:hover {
    color: red;
  }
`;

export default function Post({ id, title, body }) {
  return (
    <>
      <img src={"/images/posts/" + id + ".jpeg"} className={styles.postImage} />
      <StyledH3>
        <Link href="/posts/[id]" as={"/posts/" + id}>
          <PostLink>{title}</PostLink>
        </Link>
      </StyledH3>
      <p>{body}</p>
    </>
  );
}
