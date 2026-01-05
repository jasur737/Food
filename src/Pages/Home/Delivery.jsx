import React from "react";

export default function Delivery() {
  return (
    <section className="container m-auto mt-[150px] mb-[150px]">
      <div className="flex items-center gap-7.5">
        <p className="font-bold text-2xl text-[#333333]">доставка</p>
        <img src="src/assets/img.svg" alt="" />
      </div>
      <div className="flex justify-center gap-6">
        <h2 className="font-bold text-[64px] text-[#333333] w-[306px]">Служба доставки</h2>
        <div>
          <p className="text-xl w-[526px]">
            Phasellus diam, ultrices lobortis integer et. Diam, purus vel
            sagittis, non, a. In risus, venenatis enim vitae mauris aliquet
            orci. Consectetur nibh interdum nullam ut lobortis eu etiam sem. Et
            in vitae pellentesque non, lectus orci natoque faucibus suspendisse.
            Semper aliquam id et ultrices velit donec lacus. In odio sit nibh
            volutpat cras placerat sit feugiat dignissim. Rutrum et suspendisse
            tortor, lobortis eleifend in fringilla. Egestas cursus imperdiet
            cursus dui, nulla id massa. Hendrerit nam enim semper porttitor
            imperdiet diam semper. Nulla sit etiam cras morbi enim elementum
            euismod sapien.
          </p>
          <div className="pt-[60px] flex gap-7.5">
            <button className="bg-[#B59571] font-bold text-2xl px-7.5 py-4 text-white">Подробнее</button>
            <button className="text-[#333333] font-bold text-2xl px-7.5 py-4 border border-[#33333333]">Условия доставки</button>
          </div>
        </div>
      </div>
    </section>
  );
}
