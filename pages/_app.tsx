import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/fontawsom-all.min.css";
import "../assets/plugins/grid-gallery/css/grid-gallery.min.css";
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
