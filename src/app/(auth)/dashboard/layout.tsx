import "src/styles/globals.css";

export const metadata = {
  title: "Third Eye",
  description: "API Key logging and monitoring",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
