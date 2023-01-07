import { ReactNode } from "react";

import "../styles/globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="de">
      <body className="font-serif">{children}</body>
    </html>
  );
}

export default RootLayout;
