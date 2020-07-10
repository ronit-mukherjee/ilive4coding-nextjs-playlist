import "../styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// This default export is required in a new `pages/_app.js` file.
export default function CustomApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
