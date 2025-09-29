"use client";

import { useState } from "react";
import { Button, Tabs, Pagination } from "@mantine/core";
import FarmCard from "../../../components/FarmCard";
import {
  IconPlus,
  IconFileSpreadsheet,
  IconEdit,
  IconTrash,
} from "@tabler/icons-react";

const regions = [
  {
    region: "Vùng A",
    ponds: 5,
    manager: "Anh Hóa",
    phone: "0123 456 789",
    temperature: "10.209°, 105.768°",
  },
  {
    region: "Vùng B",
    ponds: 9,
    manager: "Anh Minh",
    phone: "0123 456 789",
    temperature: "10.209°, 105.768°",
  },
  {
    region: "Vùng C",
    ponds: 8,
    manager: "Anh An",
    phone: "0123 456 789",
    temperature: "10.209°, 105.768°",
  },
  {
    region: "Vùng D",
    ponds: 7,
    manager: "Chị Lan",
    phone: "0123 456 789",
    temperature: "10.209°, 105.768°",
  },
  {
    region: "Vùng E",
    ponds: 6,
    manager: "Anh Bình",
    phone: "0123 456 789",
    temperature: "10.209°, 105.768°",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<string | null>("vung");

  return (
    <div className="p-4 shadow-xl rounded-xl bg-white">
      <div className="">
        <div className="mb-4">
          <Tabs value={activeTab} onChange={setActiveTab}>
            <Tabs.List className="border-b">
              <Tabs.Tab
                value="vung"
                className={`${
                  activeTab === "vung"
                    ? "!bg-[#007AFF] !text-white"
                    : "!bg-[#BDBDBD] !text-white"
                } !font-semibold !border-none !rounded-t !px-5 !py-3`}
              >
                QUẢN LÝ VÙNG NUÔI
              </Tabs.Tab>
              <Tabs.Tab
                value="ao"
                className={`${
                  activeTab === "ao"
                    ? "!bg-[#007AFF] !text-white"
                    : "!bg-[#BDBDBD] !text-white"
                } !font-semibold !border-none !rounded-t !px-5 !py-3`}
              >
                QUẢN LÝ AO NUÔI THEO VÙNG
              </Tabs.Tab>
              <Tabs.Tab
                value="vu"
                className={`${
                  activeTab === "vu"
                    ? "!bg-[#007AFF] !text-white"
                    : "!bg-[#BDBDBD] !text-white"
                } !font-semibold !border-none !rounded-t !px-5 !py-3`}
              >
                QUẢN LÝ VỤ NUÔI THEO AO NUÔI
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>
        </div>

        {activeTab === "vung" && (
          <div className="flex gap-2 mb-4">
            <Button leftSection={<IconPlus size={16} />} color="blue">
              Thêm
            </Button>
            <Button
              leftSection={<IconFileSpreadsheet size={16} />}
              color="blue"
            >
              Thêm từ file Excel
            </Button>
            <Button leftSection={<IconEdit size={16} />} color="orange">
              Sửa
            </Button>
            <Button leftSection={<IconTrash size={16} />} color="red">
              Xóa
            </Button>
          </div>
        )}

        {activeTab === "vung" && (
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {regions.map((region, index) => (
                <FarmCard key={index} {...region} />
              ))}
            </div>
            <div className="mt-5 flex justify-end">
              <Pagination total={20} siblings={1} defaultValue={10} />
            </div>
          </div>
        )}

        {activeTab === "ao" && (
          <div className="text-gray-600 italic">
            Hiển thị danh sách ao theo vùng (đang phát triển).
          </div>
        )}

        {activeTab === "vu" && (
          <div className="text-gray-600 italic">
            Hiển thị quản lý vụ nuôi theo ao (đang phát triển).
          </div>
        )}
      </div>
    </div>
  );
}
