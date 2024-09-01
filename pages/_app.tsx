import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AuthContext from "@/contexts/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <AuthContext>
        <Component {...pageProps} />
      </AuthContext>
  );
}
