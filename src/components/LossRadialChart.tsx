import { RingProgress } from "@mantine/core";
import { RadialChartPoint } from "@/types/loss";

export default function LossRadialChart({
  data,
}: {
  data: RadialChartPoint[];
}) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm h-[300px] flex flex-col justify-center items-center gap-4">
      <div className="grid grid-cols-4 gap-x-4 gap-y-1 text-sm text-gray-600 mt-2">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <RingProgress
        size={200}
        thickness={20}
        roundCaps
        sections={data}
        label={<div className="text-center text-xs">Vùng nuôi</div>}
      />
    </div>
  );
}
