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
      <div className="mt-[60px] flex gap-[134px]">
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
        <div className="flex flex-col gap-8">
          <p>Яичница-глазунья из трех яиц</p>
          <div className="bg-[#333333] w-[306px] border border-[#333333]"></div>
          <p>
            <span>250 ₽</span> / 400 грамм
          </p>
          <div>
            <div className="border border-[#a6a6a6] w-[84px] h-[58px] flex items-center justify-center gap-3">
              <p>1</p>
             <div className="flex flex-col gap-1.5">
             <img src="/src/assets/up.svg" alt="" />
             <img src="/src/assets/down.svg" alt="" />
             </div>
            </div>
            <button>В корзину</button>
          </div>
          <div className="bg-[#333333] w-[306px] border border-[#333333]"></div>
          <p className="font-bold text-[#333333] text-[32px]">Сделать еще вкуснее</p>
          <div>
            <form>
            <label className="flex gap-7.5">
              <p className="font-bold text-[#a6a6a6]">Тигровые креветки 60 г <br /> <span className="font-bold text-xl text-[#333333]">450 ₽</span></p>
            
              <input className="w-6 h-6 border border-[#a6a6a6]" type="checkbox" />
            </label>
            <label className="flex gap-7.5">
              <p className="font-bold text-[#a6a6a6]">Томаты / паприка <br /> <span className="font-bold text-xl text-[#333333]">80 ₽</span></p>
            
              <input className="w-6 h-6 border border-[#a6a6a6]" type="checkbox" />
            </label>
            <label className="flex gap-7.5">
              <p className="font-bold text-[#a6a6a6]">Бекон <br /> <span className="font-bold text-xl text-[#333333]">120 ₽</span></p>
            
              <input className="w-6 h-6 border border-[#a6a6a6]" type="checkbox" />
            </label>
            <label className="flex gap-7.5">
              <p className="font-bold text-[#a6a6a6]">Сыр чеддер 30 г <br /> <span className="font-bold text-xl text-[#333333]">80 ₽</span></p>
            
              <input className="w-6 h-6 border border-[#a6a6a6]" type="checkbox" />
            </label>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
