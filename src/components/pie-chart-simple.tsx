import { PieData } from "@/types/pie-data";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
    data: PieData[],
    colors?: string[],
}

const DEFAULT_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function PieChartSimple({ data, colors = DEFAULT_COLORS }: Props) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie data={data} cx="50%" cy="50%" innerRadius={40} outerRadius={80}
                    fill="#8884d8" paddingAngle={2} dataKey="value" stroke="none" animationDuration={500} animationBegin={50}>
                    {data.map((item: any, index: number) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
}