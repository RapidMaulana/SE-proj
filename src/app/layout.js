import "./globals.css";
import * as Font from "../components/fonts.js"
import Navbar from "@/components/navbar";

export const metadata = {
  title: "NgeBaju-APP",
  description: "Group 8th - Software Engineering Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Font.poppins.className} antialiased flex flex-col`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
