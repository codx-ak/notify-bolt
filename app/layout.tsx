import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Primary Meta Tags */}
        <title>Notify Bolt | Lightning Fast Modals for React</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={
            "notify-bolt: Beautiful, themeable alert modals for React apps. Promise-based, customizable, and lightweight."
          }
        />
        <meta
          name="keywords"
          content={
            "notify-bolt, React, React modals, React notifications, UI components, Frontend, JavaScript, TypeScript, React library, Tailwind CSS"
          }
        />
        <meta name="author" content="Ak Moorthi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codx-ak.github.io/notify-bolt" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://codx-ak.github.io/notify-bolt"
        />
        <meta
          property="og:title"
          content={"Notify Bolt | Lightning Fast Modals for React"}
        />
        <meta
          property="og:description"
          content={
            "notify-bolt: Beautiful, themeable alert modals for React apps. Promise-based, customizable, and lightweight."
          }
        />
        <meta property="og:site_name" content="notify-bolt" />
        <meta
          property="og:image"
          content="https://codx-ak.github.io/notify-bolt/preview.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image:type" content="image/webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://codx-ak.github.io/notify-bolt"
        />
        <meta
          name="twitter:title"
          content={"Notify Bolt | Lightning Fast Modals for React"}
        />
        <meta
          name="twitter:description"
          content={
            "notify-bolt: Beautiful, themeable alert modals for React apps. Promise-based, customizable, and lightweight."
          }
        />
        <meta
          name="twitter:image"
          content="https://codx-ak.github.io/notify-bolt/preview.png"
        />
        <meta name="twitter:creator" content="@codx_ak" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0000" />

        {/* JSON-LD Structured Data */}
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "notify-bolt",
              url: "https://codx-ak.github.io/notify-bolt",
              description:
                "notify-bolt: Beautiful, themeable alert modals for React apps. Promise-based, customizable, and lightweight.",
              applicationCategory: "DeveloperTool",
              creator: {
                "@type": "Person",
                name: "Ak Moorthi",
                url: "https://codx-ak.site",
              },
              operatingSystem: "All",
            }),
          }}
        />
      </head>

      <body>
        <div className="mx-auto my-0 max-w-[960px] px-[1rem] py-[2rem] text-center sm:px-[0.5rem] sm:py-[1rem]">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
