import React from "react";

export default function Contact1() {
  return (
    <section className="container m-auto mb-25 mt-[110px]">
      <div className="flex items-end gap-4">
        <p className="font-bold text-3xl">контакты</p>
        <img src="/src/assets/img.svg" alt="" className="mb-[12px]" />
      </div>
      <div className="flex gap-40 mt-20">
        <div className="flex gap-6">
          <div className="flex flex-col gap-12.5">
            <div>
              <p className="font-bold text-[32px] text-[#B59571]">
                <span className="text-[64px]">2</span> мин
              </p>
              <p className="w-[196px] text-xl text-[#333333]">
                из центра Санкт-Петербурга
              </p>
            </div>
            <div>
              <p className="font-bold text-[32px] text-[#B59571]">
                <span className="text-[64px]">12</span> мин
              </p>
              <p className="w-[196px] text-xl text-[#333333]">
                из города Зеленогорск
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-12.5">
            <div>
              <p className="font-bold text-[32px] text-[#B59571]">
                <span className="text-[64px]">42</span> мин
              </p>
              <p className="w-[196px] text-xl text-[#333333]">
                из аэропорта Пулково
              </p>
            </div>
            <div>
              <p className="font-bold text-[32px] text-[#B59571]">
                <span className="text-[64px]">52</span> мин
              </p>
              <p className="w-[196px] text-xl text-[#333333]">
                {" "}
                из города <br /> Павловск
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95942.66968292498!2d69.19696659193963!3d41.282568073070706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1738234674847!5m2!1sru!2s"
            width="746px"
            height="450px"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="bg-[#5B5B5B] w-[416px] h-[349px] p-10 absolute -left-24 top-12.5">
            <div className="flex items-center gap-3">
              <img src="src/assets/location.svg" alt="" />
              <p className="text-white">Санкт-Петербург, Северная дорога, 11</p>
            </div>
            <div className="flex items-center gap-3">
              <img src="src/assets/phone.svg" alt="" />
              <p className="text-white pt-5">+7 (921) 777-77-77</p>
            </div>
            <p className="font-bold text-xl text-white pt-4">Время работы</p>
            <p className="font-bold text-[18px] text-white pt-4">
              Вск-Чт <span className="font-normal">с 12:00 до 23:00</span>
            </p>
            <p className="text-[18px] font-bold text-white pt-3">
              Пт-Сб <span className="font-normal">с 12:00 до 03:00</span>
            </p>
            <div className="flex gap-5 pt-7">
              <button className="bg-[#B59571] px-5 py-2.5 font-bold text-white">
                Бронь столика
              </button>
              <button className="px-5 py-2.5 border border-white text-white font-bold">
                Задать вопрос
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
