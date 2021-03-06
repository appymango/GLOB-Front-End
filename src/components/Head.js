//NEXT Js Head
import NEXTHead from 'next/head'
import Proptypes from "prop-types";
/**
 * Head component
 * @param {*} title - String - Title of Head
 * @param {*} content String - Content of Head
 * @returns
 */

//Default Head for all pages
const Head = ({ title, content }) => (
    <NEXTHead>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
        <meta name="theme-color" content="#000000"/>
        <meta name="keywords" content="Blogs, Create Blogs, Write Blogs, Post Blogs, Student" />
        <meta property="og:site_name" content="GLOB" key="ogsitename"/>
        <meta property="og:author" content="GLOB" key="author"/>
        <meta property="og:type" content="website" key="ogtype"/>
        <meta property="og:image" content="/images/logo_full.svg" key="ogimage" />
        <meta property="og:image:type" content="image/svg" />
        <meta property="og:image:alt" content="GLOB" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="it_IT" />
        <meta name="twitter:image" content="/images/logo_full.svg" />
        <meta name="twitter:card" content="/images/logo_full.svg" />

        <link rel="icon" href="/favicon.ico"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>

        <link rel="manifest" href="/manifest.json" />
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="sitemap" href="/sitemap.xml"/>

        <link
            rel="preload"
            href="/fonts/PoetsenOne/PoetsenOne-Regular.ttf"
            as="font"
            crossOrigin=""
        />

        <link
            rel="preload"
            href="/fonts/WorkSans/WorkSans-Regular.ttf"
            as="font"
            crossOrigin=""
        />

        <title>{`GLOB | ${title}`}</title>
        <meta property="og:title" content={`GLOB | ${title}`} key="ogtitle" />
        <meta property="og:url" content="https://www.GLOB.it/" key="ogurl" />

        <meta name="description" content={`GLOB | ${content}`} />
        <meta
        property="og:description"
        content={`GLOB | ${content}`}
        key="ogdesc"
        />
        <meta name="twitter:title" content={`GLOB | ${title}`} />
        <meta name="twitter:description" content={`GLOB | ${content}`} />

    </NEXTHead>
)

Head.propTypes = {
    title: Proptypes.string,
    content: Proptypes.string,
  };

export default Head;

