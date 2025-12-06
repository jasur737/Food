import React from 'react'
export default function Navbar() {
  return (
    <section className='flex justify-end container m-auto gap-12 items-center pt-8 absolute top-4'>
      <a className='text-white' href="">Меню</a>
      <a className='text-white' href="">Доставка</a>
      <a className='text-white' href="">Оплата</a>
      <div>
        <button className='bg-[#B59571] py-4 px-3 font-bold text-xl text-white'>Бронь столика</button>
      </div>
    </section>
  )
}
