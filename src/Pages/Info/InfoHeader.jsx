import React from "react";
import { Link } from "react-router-dom";
export default function InfoHeader() {
  return (
    <section className="container m-auto">
      <div className="flex justify-end gap-10 pr-13 pt-15">
        <Link to="/" className="text-[#333333] after">
          Завтраки{" "}
        </Link>
        <Link to="/" className="text-[#333333] after">
          Raw
        </Link>
        <Link to="/" className="text-[#333333] after">
          Холодные закуски
        </Link>
        <Link to="/" className="text-[#333333] after">
          Брускетты
        </Link>
        <Link to="/" className="text-[#333333] after">
          К вину{" "}
        </Link>
        <Link to="/" className="text-[#333333] after">
          Салаты
        </Link>
        <Link to="/" className="text-[#333333] after">
          Супы
        </Link>
        <Link to="/" className="text-[#333333] after">
          Паста и ризотто{" "}
        </Link>
        <Link to="/" className="text-[#333333] after">
          Мясо
        </Link>
        <Link to="/" className="text-[#333333] after">
          Рыба{" "}
        </Link>
        <Link to="/" className="text-[#333333] after">
          Grill{" "}
        </Link>
        <Link to="/" className="text-[#333333] after">
          Мангал{" "}
        </Link>
        <Link to="/" className="text-[#333333] after">
          Гарниры
        </Link>
      </div>
      <div className="mt-[60px]">
        <div className="ml-[412px]">
          <img
            className="w-[416px] h-[317px]"
            src="/src/assets/food1.png"
            alt=""
          />
          <div className="flex gap-6 pt-6">
            <img
              className="w-[122px] h-[93px]"
              src="/src/assets/food1.png"
              alt=""
            />
            <img
              className="w-[122px] h-[93px]"
              src="/src/assets/food1.png"
              alt=""
            />
            <img
              className="w-[122px] h-[93px]"
              src="/src/assets/food1.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <p>Яичница-глазунья из трех яиц</p>
          <div className="bg-[#333333] w-[306px] border border-[#333333]"></div>
          <p><span>250 ₽</span> / 400 грамм</p>
          <div>
            <button></button>
          </div>
        </div>
      </div>
    </section>
  );
}
