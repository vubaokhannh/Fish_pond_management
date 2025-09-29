"use client";
import { useState } from "react";
import StatCard from "@/components/StatCard";
import ChartCard from "@/components/ChartCard";
import LossChart from "@/components/LossChart";
import LossRadialChart from "@/components/LossRadialChart";
import LossTable from "@/components/LossTable";
import { LineChartPoint, LossDataPoint, RadialChartPoint } from "@/types/loss";
import { Button, Title } from "@mantine/core";
import { IconFilter } from "@tabler/icons-react";

const harvestData = [
  { name: "Ao 1", "Vụ 1": 100, "Vụ 2": 80, "Vụ 3": 60 },
  { name: "Ao 2", "Vụ 1": 120, "Vụ 2": 90, "Vụ 3": 10 },
  { name: "Ao 3", "Vụ 1": 140, "Vụ 2": 100, "Vụ 3": 420 },
  { name: "Ao 4", "Vụ 1": 360, "Vụ 2": 310, "Vụ 3": 90 },
  { name: "Ao 5", "Vụ 1": 180, "Vụ 2": 120, "Vụ 3": 100 },
  { name: "Ao 6", "Vụ 1": 200, "Vụ 2": 430, "Vụ 3": 110 },
  { name: "Ao 7", "Vụ 1": 620, "Vụ 2": 140, "Vụ 3": 120 },
];

const feedData = [
  { name: "Ao 1", "Vụ 1": 50, "Vụ 2": 40, "Vụ 3": 30 },
  { name: "Ao 2", "Vụ 1": 60, "Vụ 2": 45, "Vụ 3": 35 },
  { name: "Ao 3", "Vụ 1": 65, "Vụ 2": 50, "Vụ 3": 40 },
  { name: "Ao 4", "Vụ 1": 70, "Vụ 2": 55, "Vụ 3": 45 },
  { name: "Ao 5", "Vụ 1": 75, "Vụ 2": 60, "Vụ 3": 50 },
  { name: "Ao 6", "Vụ 1": 80, "Vụ 2": 65, "Vụ 3": 55 },
  { name: "Ao 7", "Vụ 1": 85, "Vụ 2": 70, "Vụ 3": 60 },
];

const lineData: LineChartPoint[] = [
  { name: "Vùng A", value: 4.5 },
  { name: "Vùng B", value: 3.2 },
  { name: "Vùng C", value: 5.9 },
  { name: "Vùng D", value: 4.1 },
  { name: "Vùng E", value: 15.9 },
];

const radialData: RadialChartPoint[] = [
  { name: "Vùng A", value: 80, color: "#3b82f6" },
  { name: "Vùng B", value: 20, color: "#06b6d4" },
  { name: "Vùng C", value: 60, color: "#ec4899" },
  { name: "Vùng D", value: 40, color: "#8b5cf6" },
];

const tableData: LossDataPoint[] = [
  { region: "Vùng A", ponds: "5 ao", area: "1000m2", lossRate: "4,5%" },
  { region: "Vùng B", ponds: "5 ao", area: "1000m2", lossRate: "3,2%" },
  { region: "Vùng C", ponds: "5 ao", area: "1000m2", lossRate: "5,9%" },
  { region: "Vùng D", ponds: "5 ao", area: "900m2", lossRate: "4,1%" },
  { region: "Vùng E", ponds: "5 ao", area: "800m2", lossRate: "15,9%" },
];

export default function DashboardPage() {
  const [region1, setRegion1] = useState("Vùng nuôi A");
  const [region2, setRegion2] = useState("Vùng nuôi B");

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <StatCard
          value="5"
          label="Tổng số vùng nuôi"
          borderColor="border-orange-500"
        />
        <StatCard
          value="4,3%"
          label="Tỷ lệ hao hụt trung bình"
          borderColor="border-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartCard
          title="Sản lượng thu hoạch gần đây"
          data={harvestData}
          options={["Vùng nuôi A", "Vùng nuôi B"]}
          selected={region1}
          onChange={setRegion1}
          dataKey="name"
          series={[
            { name: "Vụ 1", color: "blue" },
            { name: "Vụ 2", color: "red" },
            { name: "Vụ 3", color: "violet" },
          ]}
        />
        <ChartCard
          title="Số lượng thức ăn gần đây"
          data={feedData}
          options={["Vùng nuôi A", "Vùng nuôi B"]}
          selected={region2}
          onChange={setRegion2}
          dataKey="name"
          series={[
            { name: "Vụ 1", color: "green" },
            { name: "Vụ 2", color: "orange" },
            { name: "Vụ 3", color: "gray" },
          ]}
        />
      </div>
      <div className="max-w-screen-xl mx-auto px-4 py-6 space-y-6">
        <div className="flex justify-between items-center mb-4">
          <Title order={3}>Tỷ lệ hao hụt</Title>
          <div className="flex gap-2">
            <Button
              variant="filled"
              color="rgb(169, 168, 168)"
              leftSection={<IconFilter size={16} />}
            >
              Chọn thời gian
            </Button>
            <Button
              variant="filled"
              color="rgb(169, 168, 168)"
              leftSection={<IconFilter size={16} />}
            >
              Chọn vùng
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <LossChart data={lineData} />
          <LossRadialChart data={radialData} />
        </div>
        <LossTable data={tableData} />
      </div>
    </div>
  );
}
