// "use client";
// import Image from "next/image";
// import logo from "./images/t1.jpg";
// import team from "./images/t1team.jpg";
// import { FieldPath, FormProvider, useForm, useWatch } from "react-hook-form";
// import { ErrorMessage } from "@hookform/error-message";
// import { Iform } from "../types/IForm";
// import { RenderInput } from "../input/render-field";

// export default function FormLogin() {
//   const methods = useForm<Iform.Login>({});
//   const onsubmit = () => {
//     console.log("submit");
//   };
//   return (
//     <>
//       <div className="h-full w-full">
//         <div className="p-10 flex gap-x-48">
//           <div className="w-[400px] h-[600px] ml-20">
//             <Image className="w-full h-2/3" src={logo} alt="logo" />
//             <Image className="w-full h-1/3" src={team} alt="logo" />
//           </div>
//           <div className="w-1/3 bg-inherit h-[600px] pt-[50px]">
//             <FormProvider {...methods}>
//               <form onSubmit={methods.handleSubmit(onsubmit)}>
//                 <div className="flex flex-col items-start mt-6">
//                   <label className="">
//                     Nhập email
//                     <span className="text-red-500 pl-1">*</span>
//                   </label>
//                   <RenderInput
//                     name="email"
//                     type="text"
//                     placeholder="Nhập email"
//                     className="w-full text-black"
//                   />
//                   <ErrorMessage
//                     errors={methods.formState.errors}
//                     name="email"
//                     render={({ message }) => (
//                       <p className="text-red-500 text-xs">{message}</p>
//                     )}
//                   />
//                 </div>
//                 <div className="flex flex-col items-start mt-6">
//                   <label className="">
//                     Nhập mật khẩu
//                     <span className="text-red-500 pl-1">*</span>
//                   </label>
//                   <RenderInput
//                     name="password"
//                     type="text"
//                     placeholder="Nhập mật khẩu"
//                     className="w-full text-black"
//                   />
//                   <ErrorMessage
//                     errors={methods.formState.errors}
//                     name="password"
//                     render={({ message }) => (
//                       <p className="text-red-500 text-xs">{message}</p>
//                     )}
//                   />
//                 </div>
//                 <div>
//                   <input type="submit">Đăng nhập</input>
//                 </div>
//               </form>
//             </FormProvider>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
