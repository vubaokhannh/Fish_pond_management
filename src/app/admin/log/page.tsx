import { Button } from "@mantine/core";
import {
  IconPlus,
  IconCopy,
  IconPencil,
  IconFileExport,
  IconListSearch,
} from "@tabler/icons-react";
import { IconFilter } from "@tabler/icons-react";
const Box = ({ title, children }) => (
  <div className=" shadow mt-2">
    <div className="bg-[#1D558D] text-white px-4 py-2 flex items-center gap-2 rounded-t">
      <span className="font-semibold">{title}</span>
    </div>
    <div className="p-4 divide-y divide-blue-300 text-sm">{children}</div>
  </div>
);

const Row = ({ label, value }) => (
  <div className="flex justify-between py-1">
    <span>{label}</span>
    <span className="font-bold">{value}</span>
  </div>
);
export default function DailyReport() {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="flex justify-between mb-1">
        <div className="">
          <h1 className="text-xl font-semibold">Báo cáo kỹ thuật hằng ngày</h1>
        </div>

        <div className="flex space-x-2 ">
          <Button
            variant="filled"
            color="#E0E0E0"
            leftSection={<IconFilter size={16} />}
            className="!text-black"
          >
            Vùng A
          </Button>
          <Button
            variant="filled"
            color="#E0E0E0"
            leftSection={<IconFilter size={16} />}
            className="!text-black"
          >
            Áo số 2
          </Button>
          <Button
            variant="filled"
            color="#E0E0E0"
            leftSection={<IconFilter size={16} />}
            className="!text-black"
          >
            Vụ 1002
          </Button>
        </div>
      </div>
      <hr className="mt-1" />

      <div className="flex flex-wrap gap-3 mt-3">
        <Button leftSection={<IconPlus size={16} />} color="#007AFF">
          Thêm
        </Button>
        <Button leftSection={<IconCopy size={16} />} color="#007AFF">
          Sao chép từ ngày trước
        </Button>
        <Button leftSection={<IconPencil size={16} />} color="#FF9500">
          Cập nhật
        </Button>
        <Button leftSection={<IconFileExport size={16} />} color="#219653">
          Xuất Excel
        </Button>
        <Button leftSection={<IconListSearch size={16} />} color="#9B51E0">
          Xem toàn bộ báo cáo
        </Button>
      </div>
      <div className="bg-white rounded-lg shadow-md min-h-screen mx-auto mt-5">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-[#53A5D7] text-white text-center py-1 pl-2 pr-3 rounded-tl  font-bold leading-tight">
              <span className="text-lg">1</span>
              <br />
              <span className="text-black"> TUỔI</span>
            </div>

            <div>
              <h1 className="text-lg font-bold">Báo cáo kỹ thuật 01/6/2025</h1>
            </div>
          </div>
          <div className="text-sm space-x-4 px-10">
            <span>
              Người lập: <strong>Nguyễn Văn An</strong>
            </span>
            <span>
              Người soát xét: <strong>Lê Hải Minh</strong>
            </span>
          </div>
        </div>
        <hr className="text-[#53A5D7]" />
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <Box title="Thức ăn">
              <Row label="Loại" value="Good fish" />
              <Row label="Sáng" value="1,5" />
              <Row label="Chiều" value="-" />
            </Box>
            <Box title="Thuốc - HC">
              <Row label="Loại" value="Good fish" />
              <Row label="Sáng" value="1,5" />
              <Row label="Chiều" value="-" />
            </Box>
            <Box title="Xử lý môi trường">
              <Row label="Loại" value="Good fish" />
              <Row label="Sáng" value="1,5" />
              <Row label="Chiều" value="-" />
            </Box>

            <Box title="SiPhong (c/k)">
              <Row label="SiPhong (c/k)" value="-" />
            </Box>

            <Box title="Tình trạng SK cá">
              <Row label="SK cá" value="XX" />
            </Box>

            <Box title="Size cá (g/con)">
              <Row label="Size cá" value="19" />
            </Box>

            <Box title="Thông tin giống">
              <Row label="Số lượng giống" value="417.408" />
              <Row label="Cỡ giống (con/Kg)" value="52" />
              <Row label="Khối lượng giống" value="7.989" />
            </Box>

            <Box title="Hao hụt">
              <Row label="Số lượng/ngày" value="688" />
              <Row label="Lũy kế đến nay" value="688" />
              <Row label="TL % hao hụt" value="0,2" />
            </Box>

            <Box title="Số lượng cá">
              <Row label="Số lượng" value="416.720" />
            </Box>

            <Box title="Sản lượng đàn cá">
              <Row label="Sản lượng" value="7.918" />
            </Box>

            <Box title="FCR">
              <Row label="FCR" value="0,00" />
            </Box>

            <Box title="Mật độ (con/m2)">
              <Row label="Mật độ" value="55,6" />
            </Box>

            <Box title="Thay nước lần 1">
              <Row label="CS thước nước bắt đầu" value="-" />
              <Row label="Giờ xả (h)" value="-" />
              <Row label="Biên độ xả (m)" value="-" />
              <Row label="Giờ lấy (h)" value="-" />
              <Row label="Giờ đóng (h)" value="-" />
              <Row label="CS nước hoàn thành" value="-" />
              <Row label="% nước thay lần 1" value="-" />
            </Box>

            <Box title="Thay nước lần 2">
              <Row label="CS thước nước bắt đầu" value="-" />
              <Row label="Giờ xả lần 2 (h)" value="-" />
              <Row label="Biên độ xả lần 2 (m)" value="-" />
              <Row label="Giờ lấy lần 2 (h)" value="-" />
              <Row label="Giờ đóng lần 2 (h)" value="-" />
              <Row label="CS nước hoàn thành" value="-" />
              <Row label="% nước thay lần 2" value="-" />
            </Box>
          </div>
          <Box title="Ghi chú">
            <div className="py-2 text-gray-500 italic">Ghi chú...</div>
          </Box>
        </div>
      </div>
    </div>
  );
}
