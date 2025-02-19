"use client";
import { useEffect, useState } from "react";
import MiniButton from "./mini-button";
import WalletIcon from "@/icons/wallet-icon";
import TokenSelectionButton from "./token-selection-button";

export default function StakingForm() {
    const [selectedTokenBalance, setSelectedTokenBalance] = useState<number>(369.42);
    const [selectedToken, setSelectedToken] = useState("EPIC");
    const [selectedOption, setSelectedOption] = useState("stake");
    const [stakeAmount, setStakeAmount] = useState<string>("");

    const changeStakeAmount = (amount: string) => {
        const regex = /^\d*\.?\d*$/;
        amount = amount.replace(",", ".");
        if (regex.test(amount)) {
            setStakeAmount(amount);
        }
    };

    useEffect(() => {
        // TODO: fetch token data from wallet
    }, []);

    const stakeTokens = async (token: string, amount: string) => {
        if (!amount || amount == "0") return;
        alert("Coming soon...")
    }

    return (
        <div className="bg-[#1D242F] p-4 rounded-xl w-full">
            <h2 className="text-xl font-semibold mb-4">
                Staking
            </h2>
            <div className="text-sm mb-2">
                <span className="opacity-75">
                    Stake EPIC tokens to receive increased APY. &nbsp;
                </span>
                <span className="underline cursor-pointer opacity-75 hover:opacity-100">
                    Learn more
                </span>
            </div>

            <div className="relative">
                <form action="" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <div className="bg-[#131B24] rounded-xl px-4 py-3">
                            <div className="flex items-center">
                                <div className="flex items-center justify-between gap-2 flex-1">
                                    <div className="flex justify-start items-center gap-2 font-semibold text-sm">
                                        <div className={`${selectedOption === "stake" ? "text-white" : "opacity-50"} cursor-pointer`}
                                            onClick={() => setSelectedOption("stake")}>
                                            Stake
                                        </div>

                                        <div className={`${selectedOption === "unstake" ? "text-white" : "opacity-50"} cursor-pointer`}
                                            onClick={() => setSelectedOption("unstake")}>
                                            Unstake
                                        </div>
                                    </div>

                                    <div className="text-xs flex items-center gap-1 opacity-50 mr-1">
                                        <WalletIcon className="w-3 h-3 fill-white" />
                                        <span>
                                            {selectedOption === "stake" ? 369.42 : 3693.42} EPIC
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <MiniButton text="HALF" tokenValue={String(selectedTokenBalance / 2)}
                                        changeStakeAmount={changeStakeAmount} />
                                    <MiniButton text="MAX" tokenValue={String(selectedTokenBalance)}
                                        changeStakeAmount={changeStakeAmount} />
                                </div>
                            </div>

                            <div className="mt-4 flex items-center justify-between">
                                <TokenSelectionButton text={selectedToken} />
                                <div className="ml-2">
                                    <input type="text" inputMode="decimal" autoComplete="off"
                                        className="w-full bg-transparent text-xl outline-none text-right" placeholder="0.00" value={stakeAmount}
                                        onChange={(e: any) => changeStakeAmount(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <button className={`${stakeAmount && Number(stakeAmount) > 0 ? "text-white !border-gray-500" : "text-gray-400 cursor-not-allowed"}
                        mt-5 w-full rounded-xl p-5 border border-transparent text-lg font-semibold bg-[#131B24]`}
                            onClick={() => stakeTokens(selectedToken, stakeAmount)}>
                            {selectedOption === "stake" ? "Stake" : "Unstake"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}