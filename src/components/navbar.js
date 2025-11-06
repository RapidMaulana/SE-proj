'use client';

import { useState, useEffect } from 'react';

import * as Font from "../components/fonts.js"
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";

import { useAuth } from '@/app/hooks/useAuth.js';

const navbarItems = [
    { id: 1, text: "Shop", href: "/products" },
    { id: 2, text: "Orders", href: "/orders" },
  ];


export default function Navbar({ tooglePopUp }) {
  const [scrolled, setScrolled] = useState(false);

  const { auth } = useAuth();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-20 w-screen flex flex-row items-center justify-between transition-colors duration-300 ease-in-out p-5 px-20 animate-revealTop ${scrolled ? 'bg-white shadow-md text-black' : 'bg-transparent text-white'}`}>
          <Link href={"/"} className={`${Font.dmSerifDisplay.className} text-4xl`}>NgeBaju</Link>
          <div className="flex flex-row text-xl gap-10 font-semibold">
            {navbarItems.map((item, index) => (
              <Link key={index} href={item.href} className={`${scrolled ? 'hover:bg-black hover:text-white' : 'hover:bg-white hover:text-black'} p-3 px-6 rounded-[70px]`}>
                {item.text}
              </Link>
            ))}
          </div>
          <div className="flex flex-row gap-[10px]">
            <button onClick={tooglePopUp} className={`${scrolled ? 'hover:bg-black hover:text-white' : 'hover:bg-white hover:text-black'} p-3 rounded-[70px]`}>
              <ShoppingCart size={28}/>
            </button>
            <Link href={auth === false ? "/login" : "/profile"}  className={`${scrolled ? 'hover:bg-black hover:text-white' : 'hover:bg-white hover:text-black'} p-3 rounded-[70px]`}>
              <User size={28}/>
            </Link>
          </div>
        </nav>
  );
}
