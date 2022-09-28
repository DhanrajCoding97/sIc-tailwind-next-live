import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
