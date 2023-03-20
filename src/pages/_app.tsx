import "@/styles/globals.css";
import type { AppProps } from "next/app";

// components
import Navigation from "@/Components/Navigation/Navigation";
import Footer from "@/Components/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
