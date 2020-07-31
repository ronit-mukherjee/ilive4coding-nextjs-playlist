import React from "react";
import dynamic from "next/dynamic";

import Post from "./components/Post/Post";

import styles from "./posts.module.scss";
import Head from "next/head";
const Header = dynamic(() => import("./components/Header"), {
  loading: () => <p>Loading Header...</p>,
  ssr: false,
});
//import Header from "./components/Header";

export default function Posts({ posts }) {
  return (
    <>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <ul className="row">
        {posts.map((post) => {
          return (
            <li key={post.id} className={"col-md-3 " + styles.post}>
              {process.env.NEXT_PUBLIC_API_BASE_URL}
              <Post {...post} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  console.log(`${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.POST_URL}`);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.POST_URL}`
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

// export async function getServerSideProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// }
