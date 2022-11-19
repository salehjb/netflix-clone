import "../styles/globals.css";
import Provider from "./Provider";

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
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
