import Head from "next/head";
import { useRouter } from "next/router";
import "../styles/globals.css";
import { Layout } from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Star Instruments & Control</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
