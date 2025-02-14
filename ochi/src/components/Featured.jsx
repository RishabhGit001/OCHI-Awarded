import React from 'react'

function Featured() {
  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-8xl tracking-tight'>Featured Projects</h1>
        </div>

        <div className='px-20'>
            <div className="cards w-full flex gap-10 mt-10">
                <div className='cardcontainer relative w-1/2 h-[75vh]'>
                    <h1 className='absolute text-[#CDEA68] z-[9] -translate-x-1/2 top-1/2 -translate-y-1/2 left-full text-8xl leading-none tracking-tighter'>
                    <h1 className='absolute text-[#CDEA68] z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 right-full text-8xl leading-none tracking-tighter'>
                        {"".split('').map((item, index)=><span>{item}</span>)}
                    </h1>
                    </h1>
                    <div className="card w-full rounded-xl h-full overflow-hidden">
                        <img className='w-full h-full bg-current' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </div>
                <div className='cardcontainer relative w-1/2 h-[75vh] '>
                    <div className="card w-full rounded-xl h-full overflow-hidden">
                    <h1 className='absolute text-[#CDEA68] z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 right-full text-8xl leading-none tracking-tighter'>
                        {"VISE".split('').map((item, index)=><span>{item}</span>)}
                    </h1>
                        <img className='w-full h-full bg-current' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Featured