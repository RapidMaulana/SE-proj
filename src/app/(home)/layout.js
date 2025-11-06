"use client";

import { useState } from "react";

import "../globals.css";
import * as Font from "@/components/fonts.js";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CartPopUp from "@/components/cart";

import { AuthProvider } from "../context/AuthContext";

export default function RootLayout({ children }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>NgeBaju</title>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${Font.poppins.className} antialiased flex flex-col bg-background text-foreground`}
      >
        <AuthProvider>
          <Navbar tooglePopUp={() => setIsPopupVisible(true)} />
          <CartPopUp
            isVisible={isPopupVisible}
            onClose={() => setIsPopupVisible(false)}
          />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
