import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='text-[4vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className="w-full flex gap-5 border-t-[2px] pt-20 mt-20 border-[#a7c24f]">
            <div className="w-1/2">
                <h1 className='text-7xl'>Our Approach</h1>
                <button className='flex uppercase items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white'>Read More
                    <div className='w-2 h-2 ml-4 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className="rounded-3xl bg-[#3f4919]">
                <img className='rounded-3xl w-[80vh] h-[70vh] bg-repeat' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
            </div>
        </div>
    </div>
    
  )
}

export default About