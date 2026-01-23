import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <section className='flex justify-end container m-auto gap-12 items-center pt-8 absolute top-4'>
     <Link to="Menu2" className='text-white'>Меню</Link>
     <Link to="/" className='text-white'>Доставка</Link>
     <Link to="UI" className='text-white'>Оплата</Link>
      <div>
        <button className='bg-[#B59571] py-4 px-3 font-bold text-xl text-white'>Бронь столика</button>
      </div>
    </section>
  )
}
