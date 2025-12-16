import React from "react";

export default function Menu() {
  return (
    <section className="bg-[#333333] flex flex-col w-30 h-250 gap-[680px] items-center absolute top-0">
      <div className="flex flex-col gap-7 pt-10">
        <img src="src/assets/logo.png" alt="" />
        <div>
          
          <button>
            <img src="src/assets/menu.svg" alt="" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-7">
        <img src="src/assets/YT.svg" alt="" />
        <img src="src/assets/W.svg" alt="" />
        <img src="src/assets/Telegram.svg" alt="" />
      </div>
      <nav class="vertical-menu">
        <ul>
          <li>
            <a class="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
