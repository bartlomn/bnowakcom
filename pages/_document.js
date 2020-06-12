import Document, { Html, Head, Main, NextScript } from 'next/document';
import SystemHead from './../components/document/head';
import { IconDefs } from './../components/icons/icons';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <SystemHead />
        </Head>
        <body>
          <IconDefs />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
