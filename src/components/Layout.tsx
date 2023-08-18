import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col ">
      <Header />
      <main className="mt-16">{children}</main>
      <Footer />
    </div>
  );
}
