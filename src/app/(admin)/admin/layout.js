"use client";

import "@/app/globals.css";
import * as Font from "@/components/fonts.js";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "NgeBaju - Atmin",
//   description: "Group 8th - Software Engineering Project",
// };

export default function AuthLayout({ children }) {
  const [auth, setAuth] = useState(null); // null untuk menunjukkan status belum diperiksa
  const router = useRouter();

  const handleLogout = () => {
    // Hapus token dari localStorage
    localStorage.removeItem("token");

    // Arahkan ke halaman home
    router.push("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        // Decode token
        const payload = JSON.parse(atob(token.split(".")[1])); // Decode payload JWT

        const isExpired = payload.exp * 1000 < Date.now(); // Cek apakah token kedaluwarsa

        if (!isExpired) {
          if (payload.role === "admin") {
            setAuth("authorized"); // Role admin
          } else {
            router.push("/"); // Redirect ke halaman 404 jika bukan admin
          }
        } else {
          setAuth("unregistered"); // Token kedaluwarsa
          localStorage.removeItem("token"); // Bersihkan token
          router.push("/"); // Redirect ke halaman 404 jika token kedaluwarsa
        }
      } catch (error) {
        console.error("Invalid token:", error);
        setAuth("unregistered");
        router.push("/"); // Redirect ke halaman 404 jika token tidak valid
      }
    } else {
      setAuth("unregistered");
      router.push("/"); // Redirect ke halaman 404 jika tidak ada token
    }
  }, [router]);

  if (auth === null) {
    // Tampilkan layar loading sementara otentikasi diperiksa
    return (
      <div className="h-screen bg-background text-white flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${Font.poppins.className} antialiased bg-background text-foreground justify-between flex flex-row`}>
        <nav className="bg-black w-[25%] h-screen pt-5 pl-5">
          <div>
            <h1 className={`${Font.dmSerifDisplay.className} text-6xl`}>
              NgeBaju
            </h1>
          </div>
          <div className="flex flex-col gap-10 text-2xl font-semibold mt-10 ml-3 text-start">
            <Link href={"/admin/dashboard"}>Dashboard</Link>
            <Link href={"/admin/orders"}>Manage Orders</Link>
            <Link href={"/admin/inventory"}>Manage Stock</Link>
            <Link href={"/admin/customers"}>Manage Customer</Link>
            <button onClick={handleLogout} className="text-start">Logout</button>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
