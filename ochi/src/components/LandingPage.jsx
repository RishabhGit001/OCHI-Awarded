import React from 'react'

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="textstructure mt-52 px-20">
            {["We Create", "Eye Opening", "Presentations"].map((item, index)=>{
                return ( <div className="masker">
                            <div className="w-fit flex items-end overflow-hidden">
                                {index === 1 && (<div className="mr-5 w-[9vw] h-[6vw] rounded-md relative top-[1vw]">
                                    <img className='rounded-3xl' src="https://shorturl.at/M4p2l" alt="" />
                                </div>)}
                                <h1 className='flex items-center uppercase text-[7.5vw] leading-[6.5vw] h-full tracking-tighter font-semibold'>{item}</h1>
                            </div>
                        </div>
                )
            })}
            
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20'>
            {["For Public And Private Companys", "From the pitch to IPO"].map((item, index)=>(
                <p className='text-md font-light tracking-tight leading-none'>{item}</p>
            ))}
            <div className="start flex items-center gap-5">
            <div className='px-5 py-2 border-[2px] border-zinc-500 rounded-full font font-light text-sm capitalize'>
                <div className='w-10 h-10 rounded-full flex items-center justify-center'>Click</div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default LandingPage