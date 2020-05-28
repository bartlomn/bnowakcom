import Document, { Html, Head, Main, NextScript } from "next/document";
import SystemHead from "./../components/document/head";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <SystemHead />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/110/three.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js"></script>
        </body>
      </Html>
    );
  }
}
