import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuFooter() {
  return (
    <footer className='bg-[#333333] flex items-center gap-[231px] justify-center py-9'>
        <Link to="/">
        <img src="src/assets/logo.png" alt="" />
        </Link>
        <p className='text-white'>Политика конфиденциальности</p>
        <div className='flex gap-4'>
            <Link to="/"><img src="src/assets/visa.svg" alt="" /></Link>
            <Link to="/"><img src="src/assets/mip.svg" alt="" /></Link>
            <Link to="/"><img src="src/assets/mastercard.svg" alt="" /></Link>
        </div>
        <p className='text-white'>Дизайн d-e-n.ru</p>
    </footer>
  )
}
