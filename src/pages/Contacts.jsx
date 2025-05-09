import React from "react";

export const Contacts = () => {
  return (
    <div
      id="contact"
      className={`bg-[url(/rectangle498.png)] w-full lg:pt-[110px] pt-10 px-4 bg-cover bg-center flex lg:flex-row flex-col-reverse lg:items-start items-center lg:gap-4 gap-6 justify-center lg:pb-0 pb-[64px] ${
        location.pathname === "/contacts" ? "-mt-[135px]" : "mt-0"
      }`}
    >
      <div className="cursor-pointer lg:hidden flex items-center justify-center px-6 py-4 rounded-2xl transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-lg bg-black w-[343px]">
        <p className="font-semibold text-white">Pelajari Selengkapnya</p>
      </div>
      <div className=" flex-row items-end h-full lg:flex hidden">
        <img src="/Maskot.svg" alt="maskot" className="max-w-[580px] " />
      </div>
      <div className=" flex-row items-end h-full lg:hidden flex">
        <img src="/Maskot2.svg" alt="maskot" className="w-[240px] " />
      </div>

      <div className="flex flex-col justify-center lg:pt-[210px] h-full gap-10">
        <div className="flex flex-col gap-4 max-w-[760px]">
          <p className="font-semibold lg:text-8xl text-[64px] lg:flex hidden">Hubungi Kami</p>
          <p className="font-semibold lg:hidden text-[64px] pt-[110px]">Hubungi Kami</p>
          <p className="text-base/[24px]">Jika Anda memiliki pertanyaan, masukan, atau ingin mengetahui lebih lanjut tentang layanan kami, jangan ragu untuk menghubungi kami.</p>
        </div>

        <div className="cursor-pointer lg:flex hidden items-center justify-center px-6 py-4 rounded-2xl transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-lg bg-black w-[231px]">
          <p className="font-semibold text-white">Pelajari Selengkapnya</p>
        </div>
      </div>
    </div>
  );
};
