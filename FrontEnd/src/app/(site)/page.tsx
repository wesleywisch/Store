import { Truck, TicketPercent, ArrowLeftRight } from "lucide-react";
import { Suspense } from "react";

import { data } from "@/data";
import { Banners } from "@/components/home/banners";
import { ProductListSkeleton } from "@/components/home/product-list-skeleton";
import { MostViewedProducts } from "@/components/home/most-viewed-products";
import { MostSoldProducts } from "@/components/home/most-sold-products";

export default function Page() {
  return (
    <div>
      <Banners list={data.banners} />
      <div className="flex flex-col gap-4 mt-6 md:flex-row md:gap-8 md:mt-12">
        <div className="flex flex-1 py-6 border border-gray-200 rounded-sm">
          <div className="w-32 border-r border-gray-200 flex justify-center items-center">
            <Truck width={40} height={40} color="#0058f3" />
          </div>
          <div className="flex-1 pl-8">
            <p className="font-bold text-xl">Frete Grátis</p>
            <span className="text-gray-500">Para todo o Nordeste</span>
          </div>
        </div>

        <div className="flex flex-1 py-6 border border-gray-200 rounded-sm">
          <div className="w-32 border-r border-gray-200 flex justify-center items-center">
            <TicketPercent width={40} height={40} color="#0058f3" />
          </div>
          <div className="flex-1 pl-8">
            <p className="font-bold text-xl">Muitas Ofertas</p>
            <span className="text-gray-500">Ofertas imbatíveis</span>
          </div>
        </div>

        <div className="flex flex-1 py-6 border border-gray-200 rounded-sm">
          <div className="w-32 border-r border-gray-200 flex justify-center items-center">
            <ArrowLeftRight width={40} height={40} color="#0058f3" />
          </div>
          <div className="flex-1 pl-8">
            <p className="font-bold text-xl">Troca fácil</p>
            <span className="text-gray-500">No período de 30 dias.</span>
          </div>
        </div>
      </div>

      <Suspense fallback={<ProductListSkeleton />}>
        <MostViewedProducts />
      </Suspense>

      <Suspense fallback={<ProductListSkeleton />}>
        <MostSoldProducts />
      </Suspense>
    </div>
  );
}
