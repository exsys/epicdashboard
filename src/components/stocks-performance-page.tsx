"use client";
import BalanceChart from "./balance-chart";
import { useEffect, useState } from "react";

export default function StocksPerformancePage() {
    const [chartsData, setChartsData] = useState<any[]>([]);

    useEffect(() => {
        // TODO: Fetch data for the charts
        // TODO: show loading state while waiting for data
    }, []);

    return (
        <div className="h-full">
            <div className="h-3/5 flex justify-center items-center">
                <h1 className="text-3xl font-semibold">Coming soon...</h1>
            </div>

            {chartsData.length !== 0 && (
                <>
                    {chartsData.map((chartData, index) => (
                        <BalanceChart key={index}
                            title={{ asset: chartData.assetName, balance: chartData.balance, percentChange: chartData.percentChange }}
                            data={chartData.data} />
                    ))}
                </>
            )}
        </div>
    )
}