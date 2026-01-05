import React from "react";

export default function Menu1() {
  return (
    <section className="container m-auto pt-40 flex flex-col gap-23">
      <div className="flex items-center gap-3">
        <p className="font-bold text-xl text-[#333333]">меню</p>
        <img src="src/assets/img.svg" alt="" />
      </div>
      <div className="flex justify-center gap-[134px] items-start">
        <h2 className="font-bold text-[64px] text-[#333333]">Меню</h2>
        <p className="text-[18px] text-[#333333] w-[526px]">
          At faucibus nullam mauris vitae ut non. Augue libero non nibh nec, et
          eget erat. Nascetur nunc neque, varius massa aliquam interdum turpis
          massa. Ac tortor aliquam risus, interdum nisl mauris sit. Ut placerat
          fermentum pellentesque ac at. Vitae venenatis faucibus urna mi eget
          vitae quam eu. Euismod sed mauris id turpis iaculis. Erat rutrum
          dolor, vitae morbi. Nunc cras cras aliquet blandit faucibus massa
          sagittis semper.
        </p>
      </div>
      <div className="flex justify-center gap-6">
        <div className="flex flex-col gap-6">
          <img src="src/assets/Group 20.png" alt="" />
          <div className="flex items-center gap-7.5">
            <p className="font-bold text-2xl text-[#333333]">Основное меню</p>
            <img src="src/assets/img.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <img src="src/assets/Group 21.png" alt="" />
          <div className="flex items-center gap-7.5">
            <p className="font-bold text-2xl text-[#333333]">Барная карта</p>
            <img src="src/assets/img.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
