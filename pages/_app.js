import "../styles/index.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="root">
      <canvas id="renderScene"></canvas>
      <div className="app">
        <Component {...pageProps} key="dfgsd" />
      </div>
    </div>
  );
}
