import React from "react";
import { Link } from "react-router-dom";
export default function InfoNavbar() {
  return (
    <nav className="flex items-center gap-7.5 justify-end container m-auto pt-8 pr-10">
      <Link to="" className="text-[#333333]">
        Личный кабинет
      </Link>
      <Link to="">
        <img src="/src/assets/sign.svg" alt="" />
      </Link>
      <Link to="">
        <img src="/src/assets/basket.svg" alt="" />
      </Link>
    </nav>
  );
}
