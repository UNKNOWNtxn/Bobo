import Document, { Html, Head, Main, NextScript } from 'next/document'
import { DefaultSeo } from 'next-seo';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="BoboVision" />
        <meta property="og:description" content="It's all Bobo.. always has been" />
        <meta property="og:image" content="/assets/BoboVision_V2.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
