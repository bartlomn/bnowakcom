import '../styles/reset.scss';
import '../styles/index.scss';

import { useLayoutEffect } from 'react';
import { initTheme } from './../components/theme/theme';
import { app } from './_app.scss';

export default function MyApp({ Component, pageProps }) {
  useLayoutEffect(() => {
    initTheme();
  });
  return (
    <div className="root">
      <canvas id="renderScene"></canvas>
      <div className={app}>
        <Component {...pageProps} key="dfgsd" />
      </div>
    </div>
  );
}
