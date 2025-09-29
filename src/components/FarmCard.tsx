import React from "react";
import { Button, Card, Text, Stack } from "@mantine/core";
import { FarmCardProps } from "@/types/farmcard";

export default function FarmCard({
  region,
  ponds,
  manager,
  temperature,
  phone,
}: FarmCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" className="!bg-[#F1F8FC]">
      <Stack>
        <Text className="!text-black !font-bold !text-lg">{region}</Text>
        <Text className="!text-black">{ponds} ao nuôi</Text>
        <Text className="!text-[#828282]">{temperature}</Text>
        <Text className="!text-black">
          Trưởng trại: <span className="!font-semibold">{manager}</span>
        </Text>
        <Text className="!text-black">
          Liên hệ: <span className="!font-semibold">{phone}</span>
        </Text>
        <Button className="!bg-[#1D558D] !text-white !hover:bg-blue-900 !mt-2">
          Xem chi tiết
        </Button>
      </Stack>
    </Card>
  );
}
