import '../styles/reset.scss';
import '../styles/index.scss';

import { app } from './_app.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="root">
      <canvas id="renderScene"></canvas>
      <div className={app}>
        <Component {...pageProps} key="dfgsd" />
      </div>
    </div>
  );
}
