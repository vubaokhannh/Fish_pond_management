import { Table, Pagination } from "@mantine/core";
import { LossDataPoint } from "@/types/loss";

export default function LossTable({ data }: { data: LossDataPoint[] }) {
  return (
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
          {data.map((item, idx) => (
            <Table.Tr key={idx}>
              <Table.Td>{item.region}</Table.Td>
              <Table.Td>{item.ponds}</Table.Td>
              <Table.Td>{item.area}</Table.Td>
              <Table.Td>{item.lossRate}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
      <div className="mt-5 flex justify-end">
        <Pagination total={20} siblings={1} defaultValue={10} />
      </div>
    </div>
  );
}
