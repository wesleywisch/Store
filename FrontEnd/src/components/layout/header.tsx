"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { User, ShoppingBag, Menu, ArrowUpRight } from "lucide-react";

import { HeaderIcon } from "./header-icon";
import { HeaderSearch } from "./header-search";

type MenuItemProps = {
  label: string;
  href: string;
};

export function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  const menu: MenuItemProps[] = [
    { label: "Camisa", href: "/categories/camisa" },
    { label: "Kits", href: "/categories/kits" },
  ];

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="bg-black text-white text-center p-4">
        <strong>FRETE GRÁTIS</strong> para todo o Nordeste nas compras acima de
        R$ 199,00. <strong>APROVEITA!</strong>
      </div>
      <div className="w-full max-w-6xl mx-auto p-6">
        <div className="flex items-center">
          <div className="w-32">
            <Link href={"/"}>
              <Image
                src="/assets/ui/logo-black.png"
                alt="Store"
                width={120}
                height={40}
              />
            </Link>
          </div>

          <div className="flex-1">
            <div className="w-full hidden md:flex items-center px-6 gap-6">
              <div className="flex-1">
                <ul className="flex gap-10 font-medium text-gray-500">
                  {menu.map((item, key) => (
                    <li key={key}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-80">
                <HeaderSearch />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Link href={"/my-orders"}>
              <HeaderIcon icon={User} />
            </Link>
            <Link href={"/cart"}>
              <HeaderIcon icon={ShoppingBag} />
            </Link>
            <div
              className="md:hidden"
              onClick={() => setMenuOpened(!menuOpened)}
            >
              <HeaderIcon icon={Menu} selected={menuOpened} />
            </div>
          </div>
        </div>
      </div>

      {menuOpened && (
        <div className="md:hidden pb-6">
          {menu.map((item, key) => (
            <Link key={key} href={item.href}>
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <div className="font-medium text-lg text-gray-500">
                  {item.label}
                </div>
                <ArrowUpRight width={24} height={24} color="#0058f3" />
              </div>
            </Link>
          ))}
        </div>
      )}
      <div className="md:hidden p-6 pt-0">
        <HeaderSearch />
      </div>
    </header>
  );
}
