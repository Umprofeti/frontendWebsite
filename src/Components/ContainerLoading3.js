import React from 'react'

export const ContainerLoading3 = () => {
  return (
    <div className='px-2 mt-6 w-[100vw] h-[80vh] xl:h-[50vh] xl:w-[70vw] xl:px-6'>
        <div className='xl:flex xl:flex-row-reverse justify-center'>
          <div className='w-full '>
              <div className=' mx-auto w-[90vw] h-[20vh] xl:w-[40vw] xl:h-[40vh] bg-gray-300 animate-pulseFixed'>
              </div>
          </div>
          <div className='px-2 mb-6 mt-2'>
              <span className='bg-gray-300 w-[80vw] xl:w-[60vw] h-[4vh] animate-pulseFixed mb-3 xl:pt-6'></span>
              <p className='bg-gray-300 w-[70vw] xl:w-[50vw]  h-[4vh] animate-pulseFixed mb-3 '></p>
              <p className='bg-gray-300 w-[70vw] xl:w-[50vw] h-[4vh] animate-pulseFixed mb-3 '></p>
              <p className='bg-gray-300 w-[70vw] xl:w-[50vw] h-[4vh] animate-pulseFixed mb-3 '></p>
              <p className='bg-gray-300 w-[70vw] xl:w-[50vw] h-[4vh] animate-pulseFixed mb-3 '></p>
              <p className='bg-gray-300 w-[50vw] xl:w-[50vw] h-[3vh] animate-pulseFixed mb-3 '></p>
          </div>
        </div>
      <div className='w-full border-dashed border-gray-500 h-9 border-b-2'></div>
    </div>
  )
}
