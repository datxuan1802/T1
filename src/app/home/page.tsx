"use client";
import Layout from "@/component/layout/layout";
import Image from "next/image";
import React from "react";
const members = [
  {
    name: "Faker",
    role: "Mid Lane",
    description:
      "Tuyển thủ vĩ đại nhất LMHT, giúp SKT giành 4 chức vô địch CKTG (2013, 2015, 2016,2023).",
  },
  {
    name: "Impact",
    role: "Top Lane",
    description: "Đường trên ổn định, góp phần vào chức vô địch CKTG 2013.",
  },
  {
    name: "Bengi",
    role: "Jungle",
    description: "Đi rừng xuất sắc, hỗ trợ Faker và giành 3 chức vô địch CKTG.",
  },
  {
    name: "Piglet",
    role: "AD Carry",
    description: "Xạ thủ kỹ năng cao, nổi bật trong chức vô địch CKTG 2013.",
  },
  {
    name: "PoohManDu",
    role: "Support",
    description:
      "Hỗ trợ với chiến thuật tốt, góp phần lớn vào thành công của đội.",
  },
  {
    name: "kkOma",
    role: "coach",
    description:
      " huấn luyện viên đầu tiên của SKT T1 trong Liên Minh Huyền Thoại. Ông dẫn dắt đội từ năm 2012 và giúp SKT T1 giành 4 chức vô địch thế giới (2013, 2015, 2016, 2023).",
  },
];
export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-y-10 p-10">
        <div className="flex h-[300px] w-full">
          <div className=" h-[300px] w-1/3">
            <Image
              className="w-full h-full"
              src="/images/logot1.jpg"
              alt="logo"
              width={60}
              height={40}
              priority
            />
          </div>
          <div className=" pl-10 w-2/3 h-[300px] flex flex-col gap-x-1">
            <p>
              Đội T1, một biểu tượng chói sáng trong làng thể thao điện tử,
              không chỉ là một đội tuyển mà còn là một huyền thoại sống động,
              mang trong mình tinh thần chiến đấu kiên cường và khát vọng vươn
              tới đỉnh cao. Với những chiến binh tài năng, T1 đã chinh phục mọi
              đỉnh núi, từ những giải đấu quốc nội đến những sân chơi quốc tế,
              khẳng định vị thế vững chắc của mình trong lòng người hâm mộ. Dưới
              sự dẫn dắt của "Quỷ vương bất diệt" Faker, đội T1 đã viết nên
              những trang sử hào hùng, nơi mà mỗi trận đấu là một cuộc chiến
              không chỉ vì danh vọng mà còn vì niềm tự hào của cả một dân tộc.
              T1 không chỉ là một đội tuyển, mà là một biểu tượng của sự kiên
              trì, đam mê và khát vọng chinh phục, là niềm tin và hy vọng của
              hàng triệu trái tim yêu thể thao điện tử trên khắp thế
            </p>
            <p>
              Đội T1, ra đời vào năm 2013, nhanh chóng nổi bật trong làng thể
              thao điện tử, đặc biệt là Liên Minh Huyền Thoại. Với chiến thắng
              tại LCK mùa hè 2013 và chức vô địch thế giới mùa 3, T1 đã khẳng
              định tên tuổi của mình như một biểu tượng kiên cường và quyết tâm.
              Trải qua nhiều thử thách, đội vẫn giữ vững vị thế, tiếp tục viết
              nên những trang sử hào hùng trong hành trình chinh phục đỉnh cao
              của thể thao điện tử.
            </p>
          </div>
        </div>
        <div className="flex h-[300px] w-full">
          <div className=" w-2/3 h-[300px] flex flex-col pr-10">
            <h1 className="text-4xl font-bold text-center mb-8">
              SK Telecom T1 (SKT T1) có những thành viên đời đầu đóng góp quan
              trọng cho thành công ban đầu của đội:
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-6 text-center"
                >
                  <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
                  <h3 className="text-xl text-gray-500 mb-4">{member.role}</h3>
                  <p className="text-gray-700">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className=" h-[300px] w-1/3 flex flex-col gap-y-10">
            <div className=" w-full h-full">
              <Image
                className="w-full h-full"
                src="/images/member.png"
                alt="logo"
                width={60}
                height={40}
                priority
              />
            </div>
            <div className=" w-full h-full">
              <Image
                className="w-full h-full"
                src="/images/coach.png"
                alt="logo"
                width={60}
                height={40}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
