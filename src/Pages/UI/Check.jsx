import React from 'react'

export default function Check() {
  return (
  <section className='container m-auto flex gap-[91px] mt-[91px] mb-[150px]'>
      <div className='bg-[#333333] flex flex-col w-[447px] h-[207px]'>
        <input type="text" placeholder='Имя' className='border border-white  py-4 pl-5 pr-[245px] text-white mt-[25px] ml-[22px] mr-[129px] w-[296px]' />
        <input type="tetx" placeholder='Гостей' className='border border-white text-white py-4 pl-5 pr-[69px] w-[136px] ml-[22px] mt-7' />
    </div> 
    <div className='border border-[#33333333] w-[306px] h-[404px]'>
            <img src="src/assets/food1.png" alt="" />
            <p className='text-xl font-bold text-[#333333] pt-7.5 text-center '>Яичница-глазунья из трех <br /> яиц</p>
            <div className='flex gap-14 justify-center pt-6'>
                <p className='text-[#333333] text-[32px] font-bold'>250 ₽</p>
                <button className='bg-[#B59571] px-5 py-2.5 font-bold text-white'>В корзину</button>
            </div>
        </div>
  </section>
  )
}
