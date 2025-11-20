"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Heart } from "lucide-react";

import type { Product } from "@/types/product";

type ProductItemProps = {
  data: Product;
};

export function ProductItem({ data }: ProductItemProps) {
  const [liked, setLiked] = useState(data.liked);

  const link = `/product/${data.id}`;

  function handleToggleLiked() {
    setLiked(!liked);
  }

  return (
    <div className="bg-white border border-gray-200 rounded-sm p-6">
      <div className="flex justify-end">
        <div
          className="cursor-pointer size-12 border border-gray-200 rounded-sm flex justify-center items-center"
          onClick={handleToggleLiked}
        >
          <Heart
            color={liked ? "#0058f3" : "#000"}
            className={`${liked ? "fill-blue-600" : ""} transition-colors`}
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Link href={link}>
          <Image
            src={data.image}
            alt={data.label}
            width={200}
            height={200}
            className="max-w-full h-48"
          />
        </Link>
      </div>
      <p className="mt-9 text-lg font-bold">
        <Link href={link}>{data.label}</Link>
      </p>
      <p className="mt-3 text-2xl font-bold text-blue-600">
        <Link href={link}>R$ {data.price.toFixed(2)}</Link>
      </p>
      <p className="mt-5 text-gray-400">Em até 12x no cartão</p>
    </div>
  );
}
