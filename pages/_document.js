import Document, { Html, Head, Main, NextScript } from 'next/document';

class BMDevDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Fira+Mono:400,700&display=swap"
            rel="stylesheet"
          />

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="manifest/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="manifest/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="manifest/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="manifest/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="manifest/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="manifest/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="manifest/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="manifest/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="manifest/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="manifest/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="manifest/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="manifest/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="manifest/favicon-16x16.png"
          />

          <meta name="description" content="Brad Murphy | UX Engineer" />
          <meta
            name="keywords"
            content="Brad Murphy, Brad Murphy Front End Development, Brad Murphy Web Development, Brad Murphy Web, Brad Murphy Engineer, Brad Murphy Web Design, Brad Murphy Software Engineer, Brad Murphy Software Development, Brad Murphy Development, Development, Software Development, Software Engineering, Web Design, Development, Web Design, Engineer, Web, Web Development, Front End Development, Black Airplane, Hook, Hook Studios, Blinkk, Creative Circus"
          />

          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="#F27124"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="#0F1217"
          />

          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="http://bradmurphydev.com/share.jpg"
          />
          <meta
            property="og:description"
            content="This is where I keep select digital creations that I find fun, unique or interesting."
          />
          <meta property="og:site_name" content="Brad Murphy | UX Engineer" />

          <link rel="manifest" href="manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default BMDevDocument;
