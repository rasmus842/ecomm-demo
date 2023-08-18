import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-gray-200 font-sans text-slate-800 dark:bg-gray-800 dark:text-slate-200">
        <Main />
        <NextScript />
        <div id="portal"></div>
      </body>
    </Html>
  );
}
