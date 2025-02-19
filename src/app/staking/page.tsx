import ActiveStaking from "@/components/active-staking";
import Header from "@/components/header";
import StakingForm from "@/components/staking-form";

export default function Staking() {
    return (
        <div className="bg-hero-bg">
            <Header />
            <div className="h-fit lg:h-screen flex flex-col justify-center items-center py-40 lg:py-0">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-semibold mb-5">EPIC Staking</h1>
                    <div className="text-xl">
                        Stake any EPIC coin to increase your APY
                    </div>
                </div>

                <div className="w-[92%] lg:w-3/4 flex flex-col lg:flex-row justify-center items-center gap-6 max-w-[1000px]">
                    <ActiveStaking />
                    <StakingForm />
                </div>
            </div>
        </div>
    )
}