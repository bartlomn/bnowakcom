const keywords = [
  'web',
  'applications',
  'engineering',
  ' front-end',
  'react',
  'vue',
  'devops',
  'cloudops',
  'architecture',
  'microservices',
  'bart',
  'nowak',
];

const customHead = () => (
  <>
    <link rel="preconnect" href="https://www.google-analytics.com"/>
    <link rel="dns-prefetch" href="https://www.google-analytics.com"/>
    <link rel="preconnect" href="https://stats.g.doubleclick.net"/>
    <link rel="dns-prefetch" href="https://stats.g.doubleclick.net"/>
    <link rel="preconnect" href="https://www.googletagmanager.com"/>
    <link rel="dns-prefetch" href="https://www.googletagmanager.com"/>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>bart.rocks</title>
    <meta name="apple-mobile-web-app-title" content="bart.rocks" />
    <meta
      name="description"
      content="bart.rocks => the online front of Bart Nowak"
    />
    <meta name="keywords" content={keywords.join(', ')} />
    <meta name="author" content="Bart Nowak" />
    <meta
      name="viewport"
      content="width=device-width,height=device-height,initial-scale=1.0"
    />
    <meta httpEquiv="cleartype" content="on" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicon_io/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon_io/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon_io/favicon-16x16.png"
    />
    <link rel="manifest" href="/favicon_io/site.webmanifest" />
    <meta
      property="og:description"
      content="Hands-on contributor. Technology strategist. Servant team leader."
    />
    <meta property="og:site_name" content="Bart Nowak" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Bart Nowak" />
    <meta property="og:url" content="https://bart.rocks/" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@bartlomn" />
    <meta name="twitter:title" content="Bart Nowak" />
    <meta
      name="twitter:description"
      content="Hands-on contributor. Technology strategist. Servant team leader."
    />
  </>
);

export default customHead;
