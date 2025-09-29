import type { StatCardProps } from "@/types/card";
export default function StatCard({
  value,
  label,
  borderColor = "border-gray-300",
}: StatCardProps) {
  return (
    <div
      className={`border ${borderColor} bg-white rounded-xl text-center p-6 shadow-sm`}
    >
      <div className="text-5xl font-semibold text-gray-800 mb-4">{value}</div>
      <div className="text-sm text-gray-500 mt-2">{label}</div>
    </div>
  );
}
