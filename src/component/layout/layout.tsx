"use client";
import clsx from "clsx";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const token = getCookie("arc_token");
  return (
    <>
      <div className="h-screen w-full  flex flex-col">
        {/* nav */}
        <div className="flex border bg-blue-200">
          <nav className="flex justify-center items-center text-center space-x-8  w-full  ">
            <div
              onClick={() => router.push("/team")}
              className="border border-blue-400  p-2  hover:border-black hover:font-semibold  "
            >
              ĐỘI TUYỂN
            </div>
            <div
              onClick={() => router.push("/history")}
              className="border border-blue-400 p-2  hover:border-black hover:font-semibold  "
            >
              LỊCH SỬ
            </div>
            <div className="h-[60px] w-[60px] border border-spacing-2 ">
              <Image
                className="w-full h-full object-cover"
                src="/images/logot1.jpg"
                alt="logo"
                width={50}
                height={50}
                priority
              />
            </div>
            <div
              onClick={() => router.push("/match")}
              className="border border-blue-400 p-2  hover:border-black hover:font-semibold "
            >
              LỊCH ĐẤU
            </div>
            <div
              onClick={() => router.push("/about")}
              className="border border-blue-400 p-2  hover:border-black hover:font-semibold  "
            >
              GIỚI THIỆU
            </div>
          </nav>
          {/* {!token && (
            <div className="flex gap-x-2 pr-10">
              <div
                onClick={() => router.push("/auth/login")}
                className="border rounded-xl bg-green-200 text-base "
              >
                Đăng nhập
              </div>
              <div
                onClick={() => router.push("/auth/signin")}
                className="border  rounded-xl bg-green-200 text-base "
              >
                Đăng ký
              </div>
            </div>
          )} */}
        </div>
        {/* body */}
        <div
          className={clsx(
            "flex-1 min-h-full bg-white rounded-3xl overflow-auto"
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
};
export default Layout;
