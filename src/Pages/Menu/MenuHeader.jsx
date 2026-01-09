import React from 'react'
import { Link } from 'react-router-dom'
export default function MenuHeader() {
  return (
   <section className='container m-auto'>
    <div className='flex justify-end gap-10 pr-8 pt-15'>
        <Link to="/" className='text-[#333333]'>Завтраки </Link>
        <Link to="/" className='text-[#333333]'>Raw</Link>
        <Link to="/" className='text-[#333333]'>Холодные закуски</Link>
        <Link to="/" className='text-[#333333]'>Брускетты</Link>
        <Link to="/" className='text-[#333333]'>К вину </Link>
        <Link to="/" className='text-[#333333]'>Салаты</Link>
        <Link to="/" className='text-[#333333]'>Супы</Link>
        <Link to="/" className='text-[#333333]'>Паста и ризотто </Link>
        <Link to="/" className='text-[#333333]'>Мясо</Link>
        <Link to="/" className='text-[#333333]'>Рыба </Link>
        <Link to="/" className='text-[#333333]'>Grill </Link>
        <Link to="/" className='text-[#333333]'>Мангал </Link>
        <Link to="/" className='text-[#333333]'>Гарниры</Link>
    </div>
    <div className='ml-[200px] mt-15 flex flex-wrap gap-6'>
        <div className='border border-[#33333333] w-[306px] h-[404px]'>
            <img src="src/assets/food1.png" alt="" />
            <p className='text-xl font-bold text-[#333333] pt-7.5 text-center '>Яичница-глазунья из трех <br /> яиц</p>
            <div className='flex gap-14 justify-center pt-6'>
                <p className='text-[#333333] text-[32px] font-bold'>250 ₽</p>
                <button className='bg-[#B59571] px-5 py-2.5 font-bold text-white'>В корзину</button>
            </div>
        </div>
        <div className='border border-[#33333333] w-[306px] h-[404px]'>
            <img src="src/assets/food2.png" alt="" />
            <p className='text-xl font-bold text-[#333333] pt-7.5 text-center '>Омлет из трёх яиц</p>
            <div className='flex gap-14 justify-center pt-13'>
                <p className='text-[#333333] text-[32px] font-bold'>250 ₽</p>
                <button className='bg-[#B59571] px-5 py-2.5 font-bold text-white'>В корзину</button>
            </div>
        </div>
        <div className='border border-[#33333333] w-[306px] h-[404px]'>
            <img src="src/assets/food3.png" alt="" />
            <p className='text-xl font-bold text-[#333333] pt-7.5 text-center '>Домашние сырники</p>
            <div className='flex gap-14 justify-center pt-13'>
                <p className='text-[#333333] text-[32px] font-bold'>490 ₽</p>
                <button className='bg-[#B59571] px-5 py-2.5 font-bold text-white'>В корзину</button>
            </div>
        </div>
        <div className='border border-[#33333333] w-[306px] h-[404px]'>
            <img src="src/assets/food4.png" alt="" />
            <p className='text-xl font-bold text-[#333333] pt-7.5 text-center '>Блины</p>
            <div className='flex gap-5 justify-center pt-13'>
                <p className='text-[#333333] text-[32px] font-bold'>от 190 ₽</p>
                <button className='bg-[#B59571] px-5 py-2.5 font-bold text-white'>В корзину</button>
            </div>
        </div>
        <div className='border border-[#33333333] w-[306px] h-[404px]'>
            <img src="src/assets/food5.png" alt="" />
            <p className='text-xl font-bold text-[#333333] pt-7.5 text-center px-7.5'>Каша c ягодами и кедровыми орехами</p>
            <div className='flex gap-14 justify-center pt-6'>
                <p className='text-[#333333] text-[32px] font-bold'>450 ₽</p>
                <button className='bg-[#B59571] px-5 py-2.5 font-bold text-white'>В корзину</button>
            </div>
        </div>
        <div className='border border-[#33333333] w-[306px] h-[404px]'>
            <img src="src/assets/food6.png" alt="" />
            <p className='text-xl font-bold text-[#333333] pt-7.5 text-center '>Скрэмбл</p>
            <div className='flex gap-14 justify-center pt-13'>
                <p className='text-[#333333] text-[32px] font-bold'>290 ₽</p>
                <button className='bg-[#B59571] px-5 py-2.5 font-bold text-white'>В корзину</button>
            </div>
        </div>
        <div className='border border-[#33333333] w-[306px] h-[404px]'>
            <img src="src/assets/food7.png" alt="" />
            <p className='text-xl font-bold text-[#333333] pt-7.5 text-center '>Яйцо Бенедикт с лососем</p>
            <div className='flex gap-14 justify-center pt-13'>
                <p className='text-[#333333] text-[32px] font-bold'>850 ₽</p>
                <button className='bg-[#B59571] px-5 py-2.5 font-bold text-white'>В корзину</button>
            </div>
        </div>
        <div className='border border-[#33333333] w-[306px] h-[404px]'>
            <img src="src/assets/food8.png" alt="" />
            <p className='text-xl font-bold text-[#333333] pt-7.5 text-center '>Яйцо Бенедикт с беконом</p>
            <div className='flex gap-14 justify-center pt-13'>
                <p className='text-[#333333] text-[32px] font-bold'>650 ₽</p>
                <button className='bg-[#B59571] px-5 py-2.5 font-bold text-white'>В корзину</button>
            </div>
        </div>
        <div className='border border-[#33333333] w-[306px] h-[404px]'>
            <img src="src/assets/food9.png" alt="" />
            <p className='text-xl font-bold text-[#333333] pt-7.5 text-center '>Гречневая каша с авокадо, яйцом пашот и пармезаном</p>
            <div className='flex gap-14 justify-center pt-6'>
                <p className='text-[#333333] text-[32px] font-bold'>490 ₽</p>
                <button className='bg-[#B59571] px-5 py-2.5 font-bold text-white'>В корзину</button>
            </div>
        </div>
        <div className='border border-[#33333333] w-[306px] h-[404px]'>
            <img src="src/assets/food10.png" alt="" />
            <p className='text-xl font-bold text-[#333333] pt-7.5 text-center '>Кобб – салат с лососем</p>
            <div className='flex gap-14 justify-center pt-13'>
                <p className='text-[#333333] text-[32px] font-bold'>890 ₽</p>
                <button className='bg-[#B59571] px-5 py-2.5 font-bold text-white'>В корзину</button>
            </div>
        </div>
        <div className='border border-[#33333333] w-[306px] h-[404px]'>
            <img src="src/assets/food10.png" alt="" />
            <p className='text-xl font-bold text-[#333333] pt-7.5 text-center '>Кобб – салат с креветками</p>
            <div className='flex gap-14 justify-center pt-13'>
                <p className='text-[#333333] text-[32px] font-bold'>960 ₽</p>
                <button className='bg-[#B59571] px-5 py-2.5 font-bold text-white'>В корзину</button>
            </div>
        </div>
    </div>
   </section>
  )
}
