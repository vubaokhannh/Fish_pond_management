import { Card, Select, Title } from "@mantine/core";
import { LineChart } from "@mantine/charts";
import type { ChartCardProps } from "@/types/chart";
export default function ChartCard({
  title,
  data,
  options,
  selected,
  onChange,
  series,
  dataKey,
}: ChartCardProps) {
  return (
    <Card shadow="sm" padding="md" radius="md" withBorder>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <Title order={5}>{title}</Title>
        <Select
          data={options}
          value={selected}
          onChange={(val) => val && onChange(val)}
          placeholder="Chọn vùng"
          w={160}
        />
      </div>

      {data.length === 0 ? (
        <div style={{ textAlign: "center", color: "#888", padding: "2rem 0" }}>
          Không có dữ liệu
        </div>
      ) : (
        <LineChart
          h={250}
          data={data}
          dataKey={dataKey}
          series={series}
          curveType="linear"
        />
      )}
    </Card>
  );
}
