"use client";
import { useEffect } from "react"

export default function ActiveStaking() {
    useEffect(() => {
        // TODO: fetch active staking data from wallet
    }, []);

    return (
        <div className="bg-[#1D242F] px-3 py-6 rounded-xl border border-[#2E394B] w-full flex flex-col gap-4 items-center justify-center">
            <div className="py-6 px-4 flex flex-col justify-center items-center gap-3 border-b border-[#2E394B] w-full">
                <h1 className="text-3xl font-semibold">Active Stake</h1>
                <div className="text-xl font-semibold">3693.42 EPIC</div>
            </div>

            <div className="flex items-center justify-self-stretch w-full">
                <div className="flex flex-col items-start justify-center w-full gap-2 p-4">
                    <h2 className="text-xl font-semibold">
                        Current APY
                    </h2>
                    <div>
                        112%
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center w-full gap-2 p-4 border-l border-[#2E394B]">
                    <h2 className="text-xl font-semibold">
                        Total profit
                    </h2>
                    <div>
                        1000.00 EPIC
                    </div>
                </div>
            </div>
        </div>
    )
}