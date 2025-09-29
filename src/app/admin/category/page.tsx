"use client";

import { useState } from "react";
import { Button, Table, ScrollArea, Pagination, Divider } from "@mantine/core";
import {
  IconPlus,
  IconFileSpreadsheet,
  IconEdit,
  IconTrash,
} from "@tabler/icons-react";

const data = [
  { name: "Tên bệnh số 1", description: "Mô tả bệnh số 1" },
  { name: "Tên bệnh số 2", description: "Mô tả bệnh số 2" },
  { name: "Tên bệnh số 3", description: "Mô tả bệnh số 3" },
  { name: "Tên bệnh số 4", description: "Mô tả bệnh số 4" },
  { name: "Tên bệnh số 5", description: "Mô tả bệnh số 5" },
  { name: "Tên bệnh số 6", description: "Mô tả bệnh số 6" },
  { name: "Tên bệnh số 7", description: "Mô tả bệnh số 7" },
  { name: "Tên bệnh số 8", description: "Mô tả bệnh số 8" },
  { name: "Tên bệnh số 9", description: "Mô tả bệnh số 9" },
  { name: "Tên bệnh số 10", description: "Mô tả bệnh số 10" },
];

const categories = [
  "Danh mục bệnh",
  "Danh mục loại thủy sản",
  "Danh mục thức ăn",
  "Danh mục thuốc - hóa chất",
  "Danh mục đơn vị tính",
  "Danh mục quy trình nuôi theo loại thủy sản",
  "Danh mục nhóm nhật ký",
];

export default function CategoryPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="p-4 bg-[#f9fcff] min-h-screen">
      <div className="flex gap-2 mb-4">
        <Button
          leftSection={<IconPlus size={16} />}
          color="blue"
          variant="filled"
        >
          Thêm
        </Button>
        <Button
          leftSection={<IconFileSpreadsheet size={16} />}
          color="blue"
          variant="filled"
        >
          Thêm từ file Excel
        </Button>
        <Button
          leftSection={<IconEdit size={16} />}
          color="orange"
          variant="filled"
        >
          Sửa
        </Button>
        <Button
          leftSection={<IconTrash size={16} />}
          color="red"
          variant="filled"
        >
          Xóa
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-sm flex overflow-hidden">
        <div className="w-1/4 border-r p-4 space-y-3">
          {categories.map((category, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative pl-3 font-semibold cursor-pointer transition-colors duration-200 ${
                  isActive ? "text-[#007AFF]" : "text-[#1D558D]"
                }`}
              >
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 rounded-sm transition-colors duration-200 ${
                    isActive ? "bg-[#007AFF]" : "bg-[#1D558D]"
                  }`}
                />
                <span>{category}</span>
              </div>
            );
          })}
        </div>

        <div className="w-3/4 p-4 flex flex-col">
          <ScrollArea>
            <Table
              striped
              highlightOnHover
              withColumnBorders
              verticalSpacing="sm"
            >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Tên bệnh</Table.Th>
                  <Table.Th>Mô tả</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {data.map((item, index) => (
                  <Table.Tr key={index}>
                    <Table.Td>{item.name}</Table.Td>
                    <Table.Td>{item.description}</Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </ScrollArea>

          <Divider my="sm" />
          <div className="mt-5 flex justify-end">
            <Pagination total={20} siblings={1} defaultValue={10} />
          </div>
        </div>
      </div>
    </div>
  );
}
