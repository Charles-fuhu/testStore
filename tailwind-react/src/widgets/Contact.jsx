import React from 'react'

export default function Contact() {
  return (
    <div className='bg-black md:w-4/5 mx-auto relative overflow-hidden'>
      <div className='w-full py-16 px-12'>
        <h2 className='text-3xl text-white font-bold'>来吧，强化你的公司</h2>
        <p className='text-lg text-white mt-2 mb-6'>
          增强信息增强信息增强信息增强信息增强信息增强信息增强信息增强信息
        </p>
        <div className='flex flex-col md:flex-row items-start gap-4 '>
          <input
            type='text'
            className='bg-zinc-800 py-3 px-4 border border-zinc-700'
            placeholder='您的邮箱'
          />
          <button className='py-3 px-8 bg-blue-500 text-white font-medium md:ml-2'>
            立即开始
          </button>
        </div>
        <p className='text-sm text-zinc-400 mt-3'>七天免费试用，无需支付</p>
      </div>
    </div>
  )
}
