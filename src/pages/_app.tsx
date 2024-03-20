import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Noto_Sans_KR } from "@next/font/google";
import { DefaultSeo } from "next-seo";

const notoSansKr = Noto_Sans_KR({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

const DEFAULT_SEO = {
    title: "Saessak Portfolio",
    description: "Seassak Portfolio width NextJs 13",
    canonical: "https://www.123.com",
    openGraph: {
        type: "website",
        locale: "ko_KR",
        url: "카카오톡, 페이스북에 링크 넣으면 연결되는 url",
        title: "Saessak Portfolio",
        site_name: "Saessak Portfolio",
        images: [
            {
                url: "/openGraph/ms-icon-310x310.png",
                width: 310,
                height: 310,
                alt: "날라다니는 새싹",
            },
        ],
    },
    twitter: {
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
    },
};

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="format-detection" content="telephone=no" />
                <meta name="theme-color" content="#fff" />
                <meta
                    name="keywords"
                    content="Next.js,React,JavaScript,개발자,프로그래머,프론트엔드,포트폴리오,한새싹,portfolio,frontend,saessak,"
                />
                <meta name="author" content="saessak" />
                {/* <link rel="canonical" href="https://www.gb-on.co.kr/" /> */}
                {/* social meta */}
                <meta property="og:title" content="Saessak Portfolio" />
                <meta property="og:description" content="Seassak Portfolio width NextJs 13" />
                {/* 카카오, 페이스북 등등.. */}
                {/* <meta property="og:url" content="https://www.gb-on.co.kr/" /> */}
                <meta property="og:title" content="Saessak Portfolio" />
                <meta property="og:description" content="Seassak Portfolio width NextJs 13" />
                <meta property="og:image" content="/images/img_og_kakaotalk.png" />
                {/* 트위터 */}
                {/* <meta property="twitter:url" content="https://www.gb-on.co.kr/" /> */}
                <meta property="twitter:title" content="Saessak Portfolio" />
                <meta property="twitter:description" content="Seassak Portfolio width NextJs 13" />
                <meta property="twitter:image" content="/images/img_og_twitters.png" />
                {/* 파비콘 */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                {/* icon */}
                {/* 안드로이드 */}
                <link rel="shortcut icon" href="/favicon.ico" />
                {/* 아이폰 */}
                <link rel="apple-touch-icon" href="/apple-icon.png" />
                <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
            </Head>
            <DefaultSeo {...DEFAULT_SEO} />
            <main className={notoSansKr.className}>
                <Component {...pageProps} />
            </main>
        </>
    );
}
