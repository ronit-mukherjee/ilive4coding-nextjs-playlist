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
      <Link href="/posts/[id]" as={"/posts/" + id}>
        <img
          src={"/images/posts/" + id + ".jpeg"}
          className={styles.postImage}
        />
      </Link>
      <StyledH3>
        <Link href="/posts/[id]" as={"/posts/" + id} passHref replace>
          <PostLink>{title}</PostLink>
        </Link>
      </StyledH3>
      <p>{body}</p>
    </>
  );
}
