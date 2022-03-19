import Head from "next/head";

type HeadI = {
  title: string;
  description: string;
  dir: string;
  image: string;
};

const HeadInfo = ({title, description, dir, image}: HeadI) => {
  const domain: string = "hide0.net";
  const favicon: string = "/favicon.ico"; //size is 64x64z
  const faviconPng: string = "/favicon_128x128.png"; //size is 128x128
  const ogpImage: string = image; //size is 1200x630
  const author: string = "hidemal";
  var dir: string = dir;
  var title: string = title;
  var pageDescription: string = description;
  var pageTitle: string = `${title} - Hide0`;
  var pageUrl: string;
  if (dir === "/") {
    var pageUrl: string = "https://" + domain + "/";
  } else {
    var pageUrl: string = "https://" + domain + "/" + dir;
  }
  var pageType: string;
  if (pageUrl == "https://hide0.net/") {
    pageType = "website";
  } else if (pageUrl == "/profile") {
    pageType = "profile";
  } else {
    pageType = "article";
  }
  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel="canonical" href={pageUrl}/>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src={"/js/AntiAdBlock.js"}/>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      />
      <meta name="author" content={author}/>
      <meta name="description" content={pageDescription}/>
      <meta charSet="utf-8"/>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=1.0, minimum-scale=1.0, maximum-scale=1.0"
      />
      <link rel="icon" href={favicon}/>
      <link rel="shortcut icon" href={favicon}/>
      <link rel="apple-touch-icon-precomposed" href={faviconPng}/>
      <meta name="msapplication-TileImage" content={faviconPng}/>
      <meta name="msapplication-TileColor" content="#ffffff"/>
      {/* OGP */}
      <meta property="og:url" content={pageUrl}/>
      <meta property="og:title" content={title}/>
      <meta property="og:type" content={pageType}/>
      <meta property="og:description" content={pageDescription}/>
      <meta property="og:image" content={ogpImage}/>
      <meta property="og:site_name" content="Hide0.Net"/>
      <meta property="og:local" content="ja_JP"/>
      {/* twitter */}
      <meta name="twitter:card" content="Summary Card"/>
      <meta name="twitter:site" content="@Hidemal_OwO"/>
      <meta property="twitter:title" content={title}/>
      <meta property="twitter:description" content={pageDescription}/>
      <meta property="twitter:image" content={ogpImage}/>
    </Head>
  );
};
export default HeadInfo;
