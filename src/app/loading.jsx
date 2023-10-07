import React from 'react'

const loading = () => {
  return (
    <div className=' bg-white w-screen h-screen flex'>
        <div className=' flex flex-col justify-center m-auto animate-bounce'>
            <div className=' text-center text-7xl'>Loading...</div>
            <img
                src='/loading.svg'
                className='w-[10rem] mx-auto h-[10rem]'
            />
        </div>
    </div>
  )
}

export default loading