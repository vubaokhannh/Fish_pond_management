"use client";

import { IconBell } from "@tabler/icons-react";
import { useState } from "react";
import {
  Avatar,
  Menu,
  Popover,
  Box,
  Text,
  Group,
  Divider,
  Button,
  ThemeIcon,
  TextInput,
} from "@mantine/core";
import {
  IconLogout,
  IconUser,
  IconAlertCircle,
  IconWaveSawTool,
  IconCalendarStats,
  IconSearch,
} from "@tabler/icons-react";
export default function Topbar() {
  const [notifOpened, setNotifOpened] = useState(false);
  const [searchOpened, setSearchOpened] = useState(false);

  return (
    <div className="w-full bg-[#f9fcff] border-b border-blue-300 px-6 h-15 flex justify-between items-center">
      <h1 className="text-xl font-bold text-black">Dashboard</h1>
      <div className="flex items-center space-x-4">
        {searchOpened ? (
          <TextInput
            placeholder="Nhập thông tin..."
            leftSection={<IconSearch size={16} color="rgba(29, 85, 141, 1)" />}
            radius="xl"
            size="md"
            onBlur={() => setSearchOpened(false)}
            autoFocus
            classNames={{
              input: "w-50 shadow-sm transition-all duration-200",
            }}
          />
        ) : (
          <button
            onClick={() => setSearchOpened(true)}
            className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-all duration-200"
          >
            <IconSearch
              size={20}
              className="text-gray-700"
              color="rgba(29, 85, 141, 1)"
            />
          </button>
        )}

        <Popover
          opened={notifOpened}
          onChange={setNotifOpened}
          position="bottom-end"
          withArrow
          shadow="md"
        >
          <Popover.Target>
            <button
              className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
              onClick={() => setNotifOpened((o) => !o)}
            >
              <IconBell
                size={20}
                className="text-gray-700"
                color="rgba(29, 85, 141, 1)"
              />
            </button>
          </Popover.Target>
          <Popover.Dropdown p="sm" w={350}>
            <Box>
              <Group justify="space-between" mb="sm">
                <Text fw={600} size="xl" c="rgba(29, 85, 141, 1)">
                  Thông báo
                </Text>
                <Button variant="subtle" size="xs" color="blue">
                  Đánh dấu đã xem tất cả
                </Button>
              </Group>

              <Box mb="xs">
                <Group align="flex-start" wrap="nowrap">
                  <ThemeIcon variant="light" color="red" size="lg" radius="xl">
                    <IconAlertCircle size={20} />
                  </ThemeIcon>
                  <div>
                    <Text fw={600}>
                      Cảnh báo SiPhong ao nuôi số 2 thuộc vùng A
                    </Text>
                    <Text c="dimmed" fz="sm">
                      Ao nuôi số 2 thuộc vùng A cần được SiPhong, hàm lượng thức
                      ăn vượt quy định diện tích ao!
                    </Text>
                  </div>
                </Group>
              </Box>

              <Divider my="xs" />
              <Box mb="xs">
                <Group align="flex-start" wrap="nowrap">
                  <ThemeIcon color="blue" variant="light" radius="xl" size="lg">
                    <IconWaveSawTool size={20} />
                  </ThemeIcon>
                  <div>
                    <Text fw={600}>Hệ thống IoT bị lỗi</Text>
                    <Text size="sm" c="dimmed">
                      Không kết nối được thiết bị cảm biến đo độ mặn ACBD tại ao
                      nuôi số 3 vùng B!
                    </Text>
                  </div>
                </Group>
              </Box>
              <Divider my="xs" />
              <Box mb="xs">
                <Group align="flex-start" wrap="nowrap">
                  <ThemeIcon
                    color="orange"
                    variant="light"
                    radius="xl"
                    size="lg"
                  >
                    <IconCalendarStats size={20} />
                  </ThemeIcon>
                  <div>
                    <Text fw={600}>Thu hoạch sản phẩm</Text>
                    <Text size="sm" c="dimmed">
                      Vụ nuôi 0012, ao 2, vùng C đã đến thời gian thu hoạch dự
                      kiến!
                    </Text>
                  </div>
                </Group>
              </Box>
            </Box>
          </Popover.Dropdown>
        </Popover>
        <Menu position="bottom-end" shadow="md" width={180}>
          <Menu.Target>
            <Avatar
              src="/images/user.png"
              alt="User"
              radius="xl"
              size="md"
              className="cursor-pointer"
            />
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item leftSection={<IconUser size={16} />}>
              Tài khoản
            </Menu.Item>
            <Menu.Item color="red" leftSection={<IconLogout size={16} />}>
              Đăng xuất
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </div>
  );
}
