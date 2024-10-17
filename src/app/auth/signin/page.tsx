"use client";
import Image from "next/image";
import { FieldPath, FormProvider, useForm, useWatch } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { RenderInput } from "@/app/input/render-field";
import { Iform } from "@/app/types/IForm";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function SigninPage() {
  const methods = useForm<Iform.signin>({});
  const router = useRouter();
  const onsubmit = async () => {
    console.log("result");
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
                  <RenderInput
                    name="password"
                    type="text"
                    placeholder="Nhập mật khẩu"
                    className="w-full text-black"
                    required
                  />
                  <ErrorMessage
                    errors={methods.formState.errors}
                    name="password"
                    render={({ message }) => (
                      <p className="text-red-500 text-xs">{message}</p>
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
