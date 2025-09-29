"use client";

import { useEffect, useState } from "react";
import { Button, Title, Table, Select, Loader } from "@mantine/core";
import { IconFilter } from "@tabler/icons-react";

import StatCard from "@/components/StatCard";
import RestClient from "@/api/RestClient";
import ApexLineChart from "@/components/apex-charts/ApexLineChart";
import ApexAreaChart from "@/components/apex-charts/ApexAreaChart";
import ApexPolarAreaChart from "@/components/apex-charts/ApexPolarAreaChart";

interface TyLeHaoHutTheoVung {
  vungnuoiId: number;
  vungnuoiTen: string;
  dienTichMatNuoc: number;
  soluongAo: number;
  tyLeHaoHutTrungBinhTheoVung: number;
}

interface DashboardAoNuoi {
  tongVungNuoi: string;
  tongAoNuoi: string;
  tyLeHaoHutTrungBinh: number;
  danhSachTyLeHaoHutTheoVung: TyLeHaoHutTheoVung[];
}

interface ChartData {
  aonuoiMa: string;
  anvnSoluongThuhoach: string;
  anvnSoluongThucan: string;
  vungnuoiTen: string;
}

export default function DashboardPage() {
  const [aoNuoiData, setAoNuoiData] = useState<DashboardAoNuoi | null>(null);
  const [thuHoachData, setThuHoachData] = useState<ChartData[]>([]);
  const [thucAnData, setThucAnData] = useState<ChartData[]>([]);
  const [selectedVungThuHoach, setSelectedVungThuHoach] = useState<string>("");
  const [selectedVungThucAn, setSelectedVungThucAn] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInitial() {
      try {
        const aoNuoiRes = await RestClient.post(
          "/thong-ke/thong-ke-ao-nuoi-vu-nuoi-dashboard"
        );
        const defaultVungId =
          aoNuoiRes.payload?.danhSachTyLeHaoHutTheoVung?.[0]?.vungnuoiId?.toString() ||
          "";

        setAoNuoiData(aoNuoiRes.payload);
        setSelectedVungThuHoach(defaultVungId);
        setSelectedVungThucAn(defaultVungId);
      } catch (error) {
        console.error("Lỗi tải dữ liệu tổng quan:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchInitial();
  }, []);

  useEffect(() => {
    async function fetchChartData() {
      if (!selectedVungThuHoach || !selectedVungThucAn) return;

      try {
        const [thuHoachRes, thucAnRes] = await Promise.all([
          RestClient.post("/thong-ke/thong-ke-san-luong-thu-hoach-dashboard", {
            vungnuoiId: parseInt(selectedVungThuHoach),
          }),
          RestClient.post("/thong-ke/thong-ke-san-luong-thuc-an-dashboard", {
            vungnuoiId: parseInt(selectedVungThucAn),
          }),
        ]);

        setThuHoachData(thuHoachRes.payload || []);
        setThucAnData(thucAnRes.payload || []);
      } catch (error) {
        console.error("Lỗi tải dữ liệu biểu đồ:", error);
      }
    }

    fetchChartData();
  }, [selectedVungThuHoach, selectedVungThucAn]);

  if (loading || !aoNuoiData) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Loader size="lg" variant="dots" />
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
        <StatCard
          value={aoNuoiData.tongVungNuoi}
          label="Tổng số vùng nuôi"
          borderColor="border-orange-500"
        />
        <StatCard
          value={aoNuoiData.tongAoNuoi}
          label="Tổng số ao nuôi"
          borderColor="border-green-500"
        />
        <StatCard
          value={aoNuoiData.tyLeHaoHutTrungBinh.toFixed(2) + "%"}
          label="Tỷ lệ hao hụt trung bình"
          borderColor="border-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <Title order={4}>Sản lượng thu hoạch gần đây</Title>
            <Select
              data={aoNuoiData.danhSachTyLeHaoHutTheoVung.map((vung) => ({
                value: vung.vungnuoiId.toString(),
                label: vung.vungnuoiTen,
              }))}
              value={selectedVungThuHoach}
              onChange={(val) => val && setSelectedVungThuHoach(val)}
              className="w-[200px]"
              size="sm"
            />
          </div>
          <ApexAreaChart
            type="area"
            curve="straight"
            categories={thuHoachData.map((item) => item.aonuoiMa)}
            columnColors={[]}
            series={[
              {
                name: "Sản lượng thu hoạch",
                data: thuHoachData.map((item) =>
                  Number(item.anvnSoluongThuhoach)
                ),
              },
            ]}
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <Title order={4}>Sản lượng thức ăn gần đây</Title>
            <Select
              data={aoNuoiData.danhSachTyLeHaoHutTheoVung.map((vung) => ({
                value: vung.vungnuoiId.toString(),
                label: vung.vungnuoiTen,
              }))}
              value={selectedVungThucAn}
              onChange={(val) => val && setSelectedVungThucAn(val)}
              className="w-[200px]"
              size="sm"
            />
          </div>
          <ApexLineChart
            categories={thucAnData.map((item) => item.aonuoiMa)}
            columnColors={[]}
            series={[
              {
                name: "Sản lượng thức ăn",
                data: thucAnData.map((item) => Number(item.anvnSoluongThucan)),
              },
            ]}
          />
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-center mb-4">
          <Title order={3}>Tỷ lệ hao hụt</Title>
          <div className="flex gap-2">
            <Button leftSection={<IconFilter size={16} />}>
              Chọn thời gian
            </Button>
            <Button leftSection={<IconFilter size={16} />}>Chọn vùng</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ApexLineChart
            curve="straight"
            categories={aoNuoiData.danhSachTyLeHaoHutTheoVung.map(
              (i) => i.vungnuoiTen
            )}
            columnColors={[]}
            series={[
              {
                name: "Tỷ lệ hao hụt",
                data: aoNuoiData.danhSachTyLeHaoHutTheoVung.map((i) =>
                  parseFloat(i.tyLeHaoHutTrungBinhTheoVung.toFixed(2))
                ),
              },
            ]}
          />

          <ApexPolarAreaChart
            type="polarArea"
            options={{
              legend: { show: true, position: "top" },
              labels: aoNuoiData.danhSachTyLeHaoHutTheoVung.map(
                (i) => i.vungnuoiTen
              ),
              tooltip: {
                custom: ({ series, seriesIndex, w }) => {
                  const label =
                    w.config.labels?.[seriesIndex] || `Vùng ${seriesIndex + 1}`;
                  const value = series[seriesIndex];
                  return `<div style="padding:6px"><strong>${label}:</strong> ${value}</div>`;
                },
              },
            }}
            series={aoNuoiData.danhSachTyLeHaoHutTheoVung.map(
              (i) => i.tyLeHaoHutTrungBinhTheoVung
            )}
            categories={aoNuoiData.danhSachTyLeHaoHutTheoVung.map(
              (i) => i.vungnuoiTen
            )}
            height={283}
          />
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm overflow-auto">
          <Table striped withColumnBorders>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>VÙNG NUÔI</Table.Th>
                <Table.Th>AO NUÔI</Table.Th>
                <Table.Th>DIỆN TÍCH MẶT NƯỚC</Table.Th>
                <Table.Th>TỶ LỆ HAO HỤT</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {aoNuoiData.danhSachTyLeHaoHutTheoVung.map((item, idx) => (
                <Table.Tr key={idx}>
                  <Table.Td>{item.vungnuoiTen}</Table.Td>
                  <Table.Td>{item.soluongAo}</Table.Td>
                  <Table.Td>{item.dienTichMatNuoc}</Table.Td>
                  <Table.Td>
                    {item.tyLeHaoHutTrungBinhTheoVung.toFixed(2)}%
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
