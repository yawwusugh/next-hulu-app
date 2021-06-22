import Head from "next/head";
import HeadBanner from "../components/HeadBanner";
import NavBar from "../components/NavBar";
import Videos from "../components/Videos";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Yaw's Hulu Clone</title>
        <meta
          name="description"
          content="Hulu Clone with Next.js and TailwindCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeadBanner />
        <NavBar />
        <Videos results={results} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
