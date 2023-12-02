import Head from "next/head";
import "src/styles/globals.css";

export const metadata = {
  title: "Third Eye Dashboard",
  description: "API Key logging and monitoring",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {metadata.icons.map((icon) => (
          <link key={icon.url} {...icon} />
        ))}
      </Head>
      {children}
    </div>
  );
}
