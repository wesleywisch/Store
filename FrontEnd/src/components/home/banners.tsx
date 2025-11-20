"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import type { Banner } from "@/types/banner";

type BannersProps = {
  list: Banner[];
};

let bannerTimer: NodeJS.Timeout;

export function Banners({ list }: BannersProps) {
  const [currentImage, setCurrentImage] = useState(0);

  function nextImage() {
    setCurrentImage((currentImage) => {
      if (currentImage + 1 >= list.length) {
        return 0;
      } else {
        return currentImage + 1;
      }
    });
  }

  function handleBannerClick(index: number) {
    setCurrentImage(index);
    clearInterval(bannerTimer);
    bannerTimer = setInterval(nextImage, 5000);
  }

  useEffect(() => {
    bannerTimer = setInterval(nextImage, 5000);
    return () => clearInterval(bannerTimer);
  }, []);

  return (
    <div>
      <div className="relative aspect-3/1">
        {list.map((banner, key) => (
          <Link
            key={key}
            href={banner.link}
            className="transition-all absolute inset-0"
            style={{
              opacity: currentImage === key ? 1 : 0,
            }}
          >
            <Image
              src={banner.img}
              alt=""
              width={1200}
              height={400}
              className="rounded-sm"
            />
          </Link>
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-4">
        {list.map((banner, key) => (
          <div
            key={key}
            className="size-4 bg-blue-600 rounded-full cursor-pointer"
            style={{
              opacity: currentImage === key ? 1 : 0.3,
            }}
            onClick={() => handleBannerClick(key)}
          />
        ))}
      </div>
    </div>
  );
}
