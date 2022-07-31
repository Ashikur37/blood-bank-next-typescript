import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
// import "../assets/css/fontawsom-all.min.css";
import "react-toastify/dist/ReactToastify.css";
// import "../assets/plugins/grid-gallery/css/grid-gallery.min.css";
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import {  ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }: AppProps) {
  return <SessionProvider>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  <ToastContainer />
  </SessionProvider>
}

export default MyApp
