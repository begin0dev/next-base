import { Html, Head, Main, NextScript } from 'next/document';

function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <div id='modal' />
        <div id='toast' />
        <div id='alert' />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
