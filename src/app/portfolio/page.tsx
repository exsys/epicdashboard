"use client";
import AddAccountForm from "@/components/add-account-form";
import DropdownButton from "@/components/dropdown-button";
import Header from "@/components/header";
import HoldingsTable from "@/components/holdings-table";
import NormalButton from "@/components/normal-button";
import PieChartSimple from "@/components/pie-chart-simple";
import WalletIcon from "@/icons/wallet-icon";
import { Holding } from "@/types/holding";
import { PieData } from "@/types/pie-data";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const pieData1 = [
    { name: "IBKR", value: 227232.77 },
    { name: "SimpleFx", value: 162392.44 },
    { name: "BingX", value: 87607.56 },
];

const pieData2 = [
    { name: "Oil", value: 227232.77 },
    { name: "BTC", value: 101392.32 },
    { name: "SOL", value: 61000.12 },
    { name: "SUI", value: 87607.56 },
];

const accountsData = [
    { name: "IBKR (Oil)", balance: "227,232.77", percent: 47.61 },
    { name: "SimpleFx (BTC)", balance: "101,392.32", percent: 21.24 },
    { name: "SimpleFx (SOL)", balance: "61,000.12", percent: 12.78 },
    { name: "BingX (SUI)", balance: "87,607.56", percent: 18.35 },
];

const testHoldingsData: Holding[] = [
    { asset: "USDT", balance: 100000.00, price: 1, value: 100000.00 },
    { asset: "WTI Crude Oil", balance: 3260.62, price: 69.69, value: 227232.77 },
    { asset: "BTC", balance: 0.41, price: 250000.00, value: 101392.32 },
    { asset: "SOL", balance: 179.03, price: 340.71, value: 61000.12 },
    { asset: "SUI", balance: 7885.41, price: 11.11, value: 87607.56 },
];

export default function Portfolio() {
    const [selectedType, setSelectedType] = useState<string>("Platforms");
    const [pieData, setPieData] = useState<PieData[]>(pieData1);
    const [selectedAccount, setSelectedAccount] = useState<any>(accountsData[0]);
    const [holdingsData, setHoldingsData] = useState<any[]>(testHoldingsData);

    useEffect(() => {
        // TODO: load data from api keys
    }, []);

    const changePieData = (type: string) => {
        setSelectedType(type);
        type === "Platforms" && setPieData(pieData1);
        type === "Assets" && setPieData(pieData2);
    }

    return (
        <div>
            <Header />
            <div className="w-[92%] lg:w-3/5 mx-auto h-full pt-48">
                <div className="w-full flex items-center justify-center lg:justify-start gap-4 mb-4">
                    <DropdownButton options={accountsData} callback={setSelectedAccount} />
                    <AddAccountForm />
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-3 mb-8">
                    <div className="flex flex-col items-start justify-center w-full max-w-[360px] gap-3">
                        <div className="bg-[#0D131A] px-6 py-8 rounded-xl w-full">
                            <h2 className="mb-3">
                                Total Net worth
                            </h2>
                            <div className="text-3xl font-semibold mb-1">
                                $477,232.77
                            </div>
                            <div className="text-green-500">
                                +17.34%
                            </div>
                        </div>
                        <div className="bg-[#0D131A] px-6 py-8 rounded-xl w-full">
                            <div className="mb-3">
                                <h2>
                                    Account net worth
                                </h2>
                                <span className="text-sm font-semibold">
                                    {selectedAccount.name}
                                </span>
                            </div>
                            <div className="text-3xl font-semibold mb-1">
                                ${selectedAccount.balance}
                            </div>
                            <div>
                                {selectedAccount.percent}%
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full bg-[#0D131A] self-stretch rounded-xl p-4 lg:p-0">
                        <div className="flex flex-col">
                            <div className="flex gap-2 sm:gap-6 items-center">
                                <div className="w-44 h-44 flex items-center justify-center">
                                    <PieChartSimple data={pieData} />
                                </div>
                                <div>
                                    <ul>
                                        {pieData.map((item: PieData, index: number) => (
                                            <li key={index}>
                                                <div>
                                                    {item.name} (${item.value})
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="flex justify-center items-center text-sm font-semibold mt-6">
                                <button className={`border border-gray-600 px-4 rounded-l-full min-w-[90px]
                                flex items-center justify-center cursor-pointer py-0.5 hover:bg-white/10
                                ${selectedType === "Platforms" ? "bg-white/15" : ""}`}
                                    onClick={() => changePieData("Platforms")}>
                                    Platforms
                                </button>
                                <button className={`px-4 border-y border-r border-gray-600 rounded-r-full min-w-[90px]
                                flex items-center justify-center cursor-pointer py-0.5 hover:bg-white/10
                                ${selectedType === "Assets" ? "bg-white/15" : ""}`}
                                    onClick={() => changePieData("Assets")}>
                                    Assets
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pb-40">
                    <div className="flex items-center gap-2 mb-4">
                        <WalletIcon className="w-6 h-6 fill-gray-500" />
                        <h2 className="text-2xl font-semibold">
                            Holdings
                        </h2>
                    </div>

                    <HoldingsTable data={holdingsData} />
                </div>
            </div>
        </div>
    )
}