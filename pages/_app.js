import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Star Instruments & Control</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
