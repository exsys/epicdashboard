import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

type Props = {
    title?: {
        asset: string,
        balance: number,
        percentChange: number,
    },
    data: any[],
}

export default function BalanceChart({ title, data }: Props) {
    return (
        <div key={data.length} className="bg-gray-800 rounded-lg w-full p-2 border border-gray-700">
            {title && (
                <div className="flex justify-between items-center mb-2 px-1">
                    <h3 className="text-lg font-bold">
                        {title.asset}
                    </h3>
                    <div className="flex items-center gap-4">
                        <div>
                            ${title.balance}
                        </div>
                        <div className={`${title.percentChange > 0 ? "text-green-500" : "text-red-500"}`}>
                            {title.percentChange > 0 ? "+" : ""}{title.percentChange}%
                        </div>
                    </div>
                </div>
            )}
            <div className="bg-gray-900 rounded-xl h-80">
                {data && (
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 25, left: 20, bottom: 0 }}>
                            <defs>
                                <linearGradient id="Balance" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4} />
                                    <stop offset="75%" stopColor="#ef4444" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="Coin" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.4} />
                                    <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="date" />
                            <YAxis hide type="number" domain={[9500, 10200]} />
                            <CartesianGrid strokeDasharray="0 3" />
                            <Tooltip itemStyle={{ color: "white", paddingBlock: "0.25rem", paddingInline: "1rem" }}
                                contentStyle={{ background: "transparent", padding: "0" }}
                                labelStyle={{ borderBottom: "1px solid white", paddingBlock: "0.25rem", paddingInline: "1rem" }} />
                            <Area type="monotone" dataKey="Balance" stroke="#ef4444" fillOpacity={1} fill="url(#Balance)" />
                            <Area type="monotone" dataKey="Coin" stroke="#f97316" fillOpacity={1} fill="url(#Coin)" />
                        </AreaChart>
                    </ResponsiveContainer>
                )}
            </div>
        </div>
    )
}