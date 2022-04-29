import React from 'react'
import Video from '@/assets/production_ID_4167404.mp4'
export default function Hero() {
  return (
    <div className='grid justify-items-center gap-8 pb-28 relative'>
      <p className='text-4xl md:text-6xl font-black text-center leading-normal md:leading-normal'>
        打造一个完美的、现象级的、充满创造力的网站
      </p>
      <p className='text-xl text-gray-700 md:w-1/2 text-center'>
        这是一个完美的工具
      </p>
      <div>
        <button className='rounded bg-blue-500 text-base text-white py-3 px-8'>
          立即试用
        </button>
        <button className='rounded bg-gray-900 text-base ml-3 text-white py-3 px-8'>
          了解更多
        </button>
      </div>
      {/* ----------- */}
      <div className='relative w-full'>
        <svg
          width='256'
          height='256'
          viewBox='0 0 256 256'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='absolute right-0 -z-10'></svg>
      </div>
      {/* ------------- */}
      <div className='relative grid justify-items-center'>
        <video
          src={Video}
          controls
          className='w-[784px] h-[432px] object-cover rounded'></video>
      </div>
      {/* ----------- */}
      <div className='flex absolute rounded-full bg-white -bottom-7 px-5 py-4 drop-shadow-xl'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='mr-3'>
          <circle cx='12' cy='12' r='11' stroke='#999999' stroke-width='2' />
          <path d='M10 17L16 12L10 7V17Z' fill='#999999' />
        </svg>
        查看两分钟演示视频
      </div>
    </div>
  )
}
