"use client";
import { CRYPTO_TEST_DATA } from "@/helpers/constants";
import BalanceChart from "./balance-chart";
import { useEffect, useState } from "react";

export default function CryptoPerformancePage() {
    const [balancedChartsData, setBalancedChartsData] = useState<any[]>([]);
    const [velocityChartsData, setVelocityChartsData] = useState<any[]>([]);

    useEffect(() => {
        // TODO: Fetch data for the charts
        // TODO: show loading state while waiting for data
        const TEST_DATA = [
            { asset: "BTC", balance: 10019.24, percentChange: 0.11, ...CRYPTO_TEST_DATA },
            { asset: "ETH", balance: 9839.37, percentChange: -1.61, ...CRYPTO_TEST_DATA },
            { asset: "SOL", balance: 9372.97, percentChange: -6.27, ...CRYPTO_TEST_DATA },
            { asset: "XRP", balance: 9973.05, percentChange: -0.27, ...CRYPTO_TEST_DATA },
            { asset: "SUI", balance: 9978.09, percentChange: -0.22, ...CRYPTO_TEST_DATA },
            { asset: "TAO", balance: 9678.32, percentChange: -3.22, ...CRYPTO_TEST_DATA },
        ];

        setBalancedChartsData(TEST_DATA);
    }, []);

    return (
        <div className="pb-20">
            {balancedChartsData.length !== 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[92%] mx-auto">
                    {balancedChartsData.map((chartData, index) => (
                        <BalanceChart key={index}
                            title={{ asset: chartData.asset, balance: chartData.balance, percentChange: chartData.percentChange }}
                            data={chartData.data} />
                    ))}
                </div>
            )}
        </div>
    )
}