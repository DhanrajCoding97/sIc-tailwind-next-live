import Head from "next/head";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Star Instruments & Control</title>
        <meta property="og:title" content="Star Instruments & Control" />
        <meta
          property="og:description"
          content=" Star Instruments & Controls is a company backed by a team of qualified & experienced engineers specialized in Process and Industrial Automation"
        />
        <meta property="og:url" content="starinstrumentsandcontrol.tech" />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );
}
