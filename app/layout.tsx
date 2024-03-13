import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

import "./styles/globals.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className="px-10 min-h-screen bg-slate-50">
          <section>{children}</section>
        </body>
      </html>
    </StoreProvider>
  );
}
