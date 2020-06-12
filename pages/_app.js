import '../styles/reset.scss';
import '../styles/index.scss';

import { useLayoutEffect, useEffect } from 'react';
import { initTheme } from './../components/theme/theme';
import { app } from './_app.scss';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const activateGTM = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'UA-169269400-1');
    };
    const load3js = () =>
      setTimeout(() => {
        const three = document.createElement('script');
        three.src =
          'https://cdnjs.cloudflare.com/ajax/libs/three.js/110/three.min.js';
        three.async = true;
        document.body.appendChild(three);
      }, 100);
    const loadGsap = () => {
      const gsap = document.createElement('script');
      gsap.src =
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js';
      gsap.async = true;
      gsap.onload = load3js;
      document.body.appendChild(gsap);
    };
    const loadGTM = () => {
      const gtm = document.createElement('script');
      gtm.src = 'https://www.googletagmanager.com/gtag/js?id=UA-169269400-1';
      gtm.async = true;
      gtm.onload = activateGTM;
      document.body.appendChild(gtm);
    };
    loadGTM();
    loadGsap();
  }, []);
  useLayoutEffect(() => {
    initTheme();
  });
  return (
    <div className="root">
      <canvas id="renderScene"></canvas>
      <div className={app}>
        <Component {...pageProps} key="key" />
      </div>
    </div>
  );
}
