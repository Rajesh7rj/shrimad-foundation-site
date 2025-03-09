import localFont from "next/font/local";
import "./globals.css";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Raj Padhramani | Shrimad Rajchandraji Padhramani Ashtahnika Mahotsav",
  description:
    "Join us in celebrating Shrimad Rajchandraji Padhramani Ashtahnika Mahotsav from 23 - 30 March, 2025. 125 years of Param Krupalu Dev’s Divine Padhramani in Dharampur. Register Now!",
  keywords: "Shrimad Rajchandraji, Padhramani, Ashtahnika Mahotsav, Dharampur, Raj Padhramani, 125 years celebration, Param Krupalu Dev",
  author: "Raj Padhramani Organization",
  robots: "index, follow",
  openGraph: {
    title: "Raj Padhramani | Shrimad Rajchandraji Padhramani Ashtahnika Mahotsav",
    description:
      "Join us in celebrating Shrimad Rajchandraji Padhramani Ashtahnika Mahotsav from 23 - 30 March, 2025. 125 years of Param Krupalu Dev’s Divine Padhramani in Dharampur. Register Now!",
    image: "https://1342372186.rsc.cdn77.org/srpam/mission_logo.png", 
    url: "https://events.srmd.org/raj-padhramani/#laabhs", 
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Padhramani | Shrimad Rajchandraji Padhramani Ashtahnika Mahotsav",
    description:
      "Join us in celebrating Shrimad Rajchandraji Padhramani Ashtahnika Mahotsav from 23 - 30 March, 2025. 125 years of Param Krupalu Dev’s Divine Padhramani in Dharampur. Register Now!",
    image: "https://1342372186.rsc.cdn77.org/srpam/mission_logo.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        
        <title>{metadata.title}</title>
        <link rel="icon" href="/r/favicon.ico" type="image/x-icon" sizes="16x16" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children} 
      </body>
    </html>
  );
}
