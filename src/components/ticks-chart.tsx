import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

type Props = {
    title?: {
        left: string,
        right: string,
    },
    hideYAxis?: boolean,
    hideBg?: boolean,
    data: any[],
}

export default function TicksChart({ title, hideYAxis, hideBg, data }: Props) {
    return (
        <div key={data.length} className={`${hideBg ? "" : "bg-gray-800 border border-gray-700"} rounded-lg w-full p-2`}>
            {title && (
                <div className="flex justify-between items-center mb-2 px-1">
                    <h3 className="text-lg font-bold">
                        {title.left}
                    </h3>
                    <div>
                        {title.right}
                    </div>
                </div>
            )}
            <div className="bg-gray-900 rounded-xl py-4 h-80">
                {data && (
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 25, left: 20, bottom: 0 }}>
                            <defs>
                                <linearGradient id="ticks" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="date" />
                            <YAxis hide={hideYAxis} />
                            <CartesianGrid strokeDasharray="0 3" />
                            <Tooltip itemStyle={{ color: "white", paddingBlock: "0.25rem", paddingInline: "1rem" }}
                                contentStyle={{ background: "transparent", padding: "0" }}
                                labelStyle={{ borderBottom: "1px solid white", paddingBlock: "0.25rem", paddingInline: "1rem" }} />
                            <Area type="monotone" dataKey="ticks" stroke="#3b82f6" fillOpacity={1} fill="url(#ticks)" />
                        </AreaChart>
                    </ResponsiveContainer>
                )}
            </div>
        </div>
    )
}