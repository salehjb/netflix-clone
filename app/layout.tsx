import "../styles/globals.css";
import Provider from "./provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Netflix</title>
      </head>
      <Provider>
        <body>{children}</body>
      </Provider>
    </html>
  );
}
