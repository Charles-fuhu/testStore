import React from 'react'
import Header from '@/widgets/Header'
import Hero from '@/widgets/Hero'
import Solution from '@/widgets/Solution'
import HowWork from '@/widgets/HowWork'
function Index() {
  return (
    <div className='container mx-auto p-4'>
      <Header />
      {/* main------------ */}
      <main className='mt-20'>
        <Hero />
      </main>
      {/* section */}
      <section className='md:p-20'>
      <Solution></Solution>
      </section>
      {/* -------- */}
      <section className='-mt-20'>
        <HowWork></HowWork>
      </section>
    </div>
  )
}

export default Index
