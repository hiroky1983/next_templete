import { NextPage } from "next";
import Head from "next/head";

type Props = {
  [key: string]: any;
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ul>
          {posts.map((post: any) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  return { props: { posts } };
};
