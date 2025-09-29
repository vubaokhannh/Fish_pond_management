"use client";
import React from "react";
import Image from "next/image";
import classes from "./Login.module.css";
import Link from "next/link";
import {
  TextInput,
  Button,
  Checkbox,
  PasswordInput,
  Title,
  Paper,
} from "@mantine/core";
export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F1F8FC] px-4">
      <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-6xl bg-[#F1F8FC]">
        <div className="lg:w-1/2 p-10 flex flex-col justify-center">
          <h1 className={classes.title_h1}>GODACO</h1>
          <h2 className="text-2xl font-semibold mb-2 text-[#1D558D]">
            Chào mừng bạn đến với hệ thống quản lý thủy sản thông minh!
          </h2>
          <p className="text-[#0D2340] mb-2">
            Giúp bạn theo dõi vụ nuôi, thống kê, cảnh báo dễ dàng!
          </p>
          <Image
            src="/images/image_login.png"
            alt="Picture of the author"
            width={667}
            height={468}
          />
        </div>
        <div className="lg:w-1/2 p-10 flex items-center justify-center">
          <Paper
            shadow="sm"
            p="lg"
            radius="xl"
            withBorder
            className="w-full max-w-xl"
          >
            <Title className={classes.login_title}>Đăng nhập hệ thống</Title>
            <form action="" className="w-full max-w-lg space-y-6 p-8 ">
              <TextInput placeholder="Tài khoản" radius="md" size="lg" />
              <PasswordInput placeholder="Mật khẩu" size="lg" radius="md" />
              <Checkbox
                defaultChecked
                label="Lưu thông tin đăng nhập"
                radius="xl"
              />

              <Button fullWidth radius="md" color="#1D558D">
                Đăng nhập
              </Button>
              <div className="text-center text-[#007AFF] font-bold ">
                <Link href="#" className="">
                  Quên mật khẩu
                </Link>
              </div>
            </form>
          </Paper>
        </div>
      </div>
    </div>
  );
}
