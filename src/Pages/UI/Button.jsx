import React from "react";

export default function Button() {
  return (
    <section className="flex flex-col gap-9 container m-auto mt-10">
      <div>
        <button className="bg-[#B59571] py-2.5 px-5 font-bold text-white">Бронь столика</button>
      </div>
      <div className="flex gap-14">
        <button className="bg-[#B59571] font-bold text-xl text-white py-4 px-7.5">Подробнее</button>
        <button className="border border-[#6a6a6a] text-[#333333] py-4 px-7.5 font-bold text-xl">Условия доставки</button>
      </div>
    </section>
  );
}
