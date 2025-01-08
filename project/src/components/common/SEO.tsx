"use client";

import Head from "next/head";

type PropsType = {
  title: string;
  description: string;
  keywords: string;
  url: string;
  image: string;
};

export default function SEO({ title, description, keywords, url, image }: PropsType) {
  return (
    <Head>
      {/* 기본 메타 태그 */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph 메타 태그 */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      {/* Twitter 카드 메타 태그 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* 기타 아이콘 */}
      <link rel="icon" href="/img/app-icon-192.png" />
      <link rel="apple-touch-icon" href="/img/app-icon-192.png" />
    </Head>
  );
}
