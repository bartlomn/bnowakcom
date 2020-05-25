import Document, { Html, Head, Main, NextScript } from "next/document";
import SystemHead from "./../components/system/head";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
           <SystemHead/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
