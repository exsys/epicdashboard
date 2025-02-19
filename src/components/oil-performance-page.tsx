"use client";
import { OIL_TEST_DATA } from "@/helpers/constants";
import { useEffect, useState } from "react";
import TicksChart from "./ticks-chart";

export default function OilPerformancePage() {
    const [chartData, setChartData] = useState<any>(null);

    useEffect(() => {
        // TODO: Fetch data for the charts
        // TODO: show loading state while waiting for data

        async function getCoinBalanceData() {
            setChartData(OIL_TEST_DATA);
        }

        getCoinBalanceData();
    }, []);

    return (
        <div className="h-fit w-full">
            {chartData && (
                <div className="w-[98%] lg:w-3/4 mx-auto">
                    <TicksChart title={{ left: chartData.assetName, right: chartData.balance }} hideBg data={chartData.data} />
                </div>
            )}
        </div>
    )
}