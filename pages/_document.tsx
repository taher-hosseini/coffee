import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" dir='rtl'>
      <Head />
      <body className='bg-gray-100 dark:bg-zinc-800'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
