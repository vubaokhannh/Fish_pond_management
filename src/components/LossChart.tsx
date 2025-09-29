import { LineChart } from "@mantine/charts";
// import { Title } from "@mantine/core";
import { LineChartPoint } from "@/types/loss";

export default function LossChart({ data }: { data: LineChartPoint[] }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <LineChart
        h={250}
        data={data}
        dataKey="name"
        series={[{ name: "value", color: "#3b82f6" }]}
        curveType="monotone"
      />
    </div>
  );
}
