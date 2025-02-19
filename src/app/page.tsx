"use client";
import AssetCard from "@/components/asset-card";
import CryptoPerformancePage from "@/components/crypto-performance-page";
import Header from "@/components/header";
import OilPerformancePage from "@/components/oil-performance-page";
import StocksPerformancePage from "@/components/stocks-performance-page";
import BTCIcon from "@/icons/btc-icon";
import ChartIcon from "@/icons/chart-icon";
import OilIcon from "@/icons/oil-icon";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const ICONS = {
  bitcoin: <BTCIcon fill="#FFFFFF" className="h-20 w-20 rotate-12" />,
  chart: <ChartIcon fill="#FFFFFF" className="h-24 w-24 -ml-2.5" />,
  oil: <OilIcon fill="#FFFFFF" className="h-20 w-20" />,
}

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [selectedAsset, setSelectedAsset] = useState<string>("");

  const assetDescription = {
    "Oil": "Accumulated Ticks on a 320 Contract CL_F Account",
  }

  return (
    <div>
      <Header />
      <main>
        {!selectedAsset && (
          <div className="h-fit sm:h-screen bg-hero-bg py-40 sm:py-0">
            <div className="h-full flex flex-col justify-center items-center">
              <div className="mb-12 text-center">
                <h1 className="text-4xl font-semibold mb-5">EPIC Performance Dashboard</h1>
                <div className="text-xl">
                  Select an asset to see more details
                </div>
              </div>

              <div className="w-[90%] lg:w-3/4 flex justify-center items-center gap-4 lg:gap-6 flex-col md:flex-row">
                <AssetCard title="Oil" description="Yearly return: 142%" icon={ICONS.oil} onClick={() => setSelectedAsset("Oil")}></AssetCard>
                <AssetCard title="Crypto" description="Yearly return: 232%" icon={ICONS.bitcoin} onClick={() => setSelectedAsset("Crypto")}></AssetCard>
                <AssetCard title="Stocks" description="Yearly return: 76%" icon={ICONS.chart} onClick={() => setSelectedAsset("Stocks")}></AssetCard>
              </div>
            </div>
          </div>
        )}

        {selectedAsset && (
          <div className="min-h-screen pt-28 bg-hero-bg">
            <div className="w-3/4 mx-auto flex justify-start py-10">
              <div className="cursor-pointer flex items-center gap-2 group" onClick={() => setSelectedAsset("")}>
                <ArrowDownTrayIcon className="w-8 h-8 stroke-white rotate-90 group-hover:stroke-gray-400" />
                <span className="text-lg font-semibold group-hover:text-gray-400">Return</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mb-10">
              <h1 className="text-4xl font-semibold mb-5">
                {selectedAsset} Performance
              </h1>
              <h2>
                {assetDescription[selectedAsset as keyof typeof assetDescription]}
              </h2>
            </div>

            {selectedAsset === "Oil" && (
              <OilPerformancePage />
            )}

            {selectedAsset === "Crypto" && (
              <CryptoPerformancePage />
            )}

            {selectedAsset === "Stocks" && (
              <StocksPerformancePage />
            )}
          </div>
        )}
      </main>
    </div>
  );
}