"use client";
import Image from "next/image";
import {
  Controller,
  FieldPath,
  FormProvider,
  useForm,
  useWatch,
} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { RenderInput } from "@/app/input/render-field";
import { Iform } from "@/app/types/IForm";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Input } from "antd";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { setCookie } from "cookies-next";
export default function SigninPage() {
  const methods = useForm<Iform.signin>({});
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [token, setToken] = useState<any>();
  useEffect(() => {
    if (token) {
      setCookie("arc_token", token.arc_token);
      router.push("/home");
    }
  }, [token, router]);
  const onsubmit = async (value: Iform.signin) => {
    try {
      const res = await axios.post("http://localhost:3003/auth/signin", {
        ...value,
        password: password,
        role: "owner",
      });
      setToken(res.data);
      toast.success("sign in successfully");
    } catch (error: any) {
      if (error.response.status === 409) {
        toast.error("email đã tồn tại");
      } else {
        toast.error("sign in fail");
      }
    }
  };
  return (
    <>
      <div className="h-full w-full">
        <div className="p-10 flex gap-x-48">
          <div className="w-[400px] h-[600px] ml-20">
            <Image
              className="w-full h-2/3"
              src="/images/t1.jpg"
              alt="logo"
              width={400}
              height={600}
            />
            <Image
              className="w-full h-1/3"
              src="/images/t1team.jpg"
              alt="logo"
              width={400}
              height={600}
            />
          </div>
          <div className="w-1/3 bg-inherit h-[600px] pt-[50px]">
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onsubmit)}>
                <div className="flex flex-col items-start mt-6">
                  <label className="">
                    Tên
                    <span className="text-red-500 pl-1">*</span>
                  </label>
                  <RenderInput
                    name="name"
                    type="text"
                    placeholder="Nhập tên"
                    className="w-full text-black"
                    required
                  />
                  <ErrorMessage
                    errors={methods.formState.errors}
                    name="name"
                    render={({ message }) => (
                      <p className="text-red-500 text-xs">{message}</p>
                    )}
                  />
                </div>
                <div className="flex flex-col items-start mt-6">
                  <label className="">
                    Nhập email
                    <span className="text-red-500 pl-1">*</span>
                  </label>
                  <RenderInput
                    name="email"
                    type="text"
                    placeholder="Nhập email"
                    className="w-full text-black"
                    required
                  />
                  <ErrorMessage
                    errors={methods.formState.errors}
                    name="email"
                    render={({ message }) => (
                      <p className="text-red-500 text-xs">{message}</p>
                    )}
                  />
                </div>
                <div className="flex flex-col items-start mt-6">
                  <label className="">
                    Số điện thoại
                    <span className="text-red-500 pl-1">*</span>
                  </label>
                  <RenderInput
                    name="sdt"
                    type="text"
                    placeholder="Nhập số điện thoại"
                    className="w-full text-black"
                    required
                  />
                  <ErrorMessage
                    errors={methods.formState.errors}
                    name="sdt"
                    render={({ message }) => (
                      <p className="text-red-500 text-xs">{message}</p>
                    )}
                  />
                </div>
                <div className="flex flex-col items-start mt-6">
                  <label className="">
                    Nhập mật khẩu
                    <span className="text-red-500 pl-1">*</span>
                  </label>
                  <Controller
                    name="password"
                    control={methods.control}
                    render={({ field }) => (
                      <Input.Password
                        {...field}
                        placeholder="Nhập mật khẩu"
                        className="border-none bg-[#F5F5FA] h-[48px]"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        defaultValue={""}
                        // visibilityToggle={{
                        //   visible: true,
                        //   onVisibleChange: undefined,
                        // }}
                      />
                    )}
                  />
                </div>
                <div className="flex flex-col pt-10">
                  <div
                    className="hover:text-[#1922FF] cursor-pointer hover:font-semibold text-gray-500 italic text-[14px]"
                    onClick={() => {
                      router.push("/auth/login");
                    }}
                  >
                    Đăng nhập
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 p-2 rounded-lg hover:text-black"
                  >
                    Đăng ký
                  </button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </>
  );
}
