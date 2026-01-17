import React from 'react'
import { Link } from 'react-router-dom'
export default function InfoHeader() {
  return (
    <section className='container m-auto'>
         <div className='flex justify-end gap-10 pr-13 pt-15'>
        <Link to="/" className='text-[#333333] after'>Завтраки </Link>
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
    <div>

    </div>
    </section>
  )
}
