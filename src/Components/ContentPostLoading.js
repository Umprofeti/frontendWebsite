import React from 'react'

export const ContentPostLoading = () => {
  return (
    <div className='flex items-center flex-col justify-center mb-6'>
        <div className='px-9 py-3 w-[75%] shadow-md h-[15vh]'>
            <div className='h-[3vh] bg-zinc-400 animate-pulseFixed w-[100%]'></div> 
            <br/>
            <div className='w-[30vw] h-[2vh] bg-zinc-400 animate-pulseFixed'></div>
        </div>
        <div className='px-3 mt-6 flex flex-col justify-center items-center'>
            <div className='w-[40vw] h-[50vh] bg-zinc-400 animate-pulseFixed'></div>
            <div className='mt-6 animate-pulseFixed w-[70vw]'>
                <div className='h-[3vh] bg-zinc-400 w-full mt-4'></div>
                <div className='h-[3vh] bg-zinc-400 w-full mt-4'></div>
                <div className='h-[3vh] bg-zinc-400 w-full mt-4'></div>
                <div className='h-[3vh] bg-zinc-400 w-full mt-4'></div>
                <div className='h-[3vh] bg-zinc-400 w-full mt-4'></div>
                <div className='h-[3vh] bg-zinc-400 w-full mt-4'></div>
                <div className='h-[3vh] bg-zinc-400 w-full mt-4'></div>
                <div className='h-[3vh] bg-zinc-400 w-full mt-4'></div>
                <div className='h-[3vh] bg-zinc-400 w-full mt-4'></div>
                <div className='h-[3vh] bg-zinc-400 w-full mt-4'></div>
                <div className='h-[3vh] bg-zinc-400 w-full mt-4'></div>
                <div className='h-[3vh] bg-zinc-400 w-full mt-4'></div>
            </div>
        </div>
    </div>
  )
}
