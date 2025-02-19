import { ASSET_ICONS } from "@/helpers/constants";
import { Holding } from "@/types/holding";
import styles from "./css/holdings-table.module.css";

type Props = {
    data: Holding[];
}

export default function HoldingsTable({ data }: Props) {
    console.log(data)
    return (
        <div className="bg-[#0D131A] rounded-xl border border-[rgba(255,255,255,0.12)] w-full">
            <table className={`w-full ${styles["holdings-table"]}`}>
                <thead className={`${styles["table-head"]}`}>
                    <tr className={`text-left border-b border-[rgba(255,255,255,0.12)] ${styles["table-row"]}`}>
                        <th className="p-4">Asset</th>
                        <th className="p-4">Balance</th>
                        <th className="p-4">Price</th>
                        <th className="p-4">Value</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((holding: Holding, index: number) => (
                        <tr key={index} className={`border-b border-[rgba(255,255,255,0.12)] ${styles["table-row"]}`}>
                            <td data-label="Asset" className={`py-3 px-4 ${styles["table-data"]}`}>
                                <div className="flex items-center gap-1 justify-end sm:justify-start">
                                    <img src={ASSET_ICONS[holding.asset as keyof typeof ASSET_ICONS]} alt="usdt" className="w-7 h-7" />
                                    <span className="ml-1">
                                        {holding.asset}
                                    </span>
                                </div>
                            </td>
                            <td data-label="Balance" className={`py-3 px-4 ${styles["table-data"]}`}>
                                {holding.balance}
                            </td>
                            <td data-label="Price" className={`py-3 px-4 ${styles["table-data"]}`}>
                                {holding.price}
                            </td>
                            <td data-label="Value" className={`py-3 px-4 ${styles["table-data"]}`}>
                                {holding.value}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}