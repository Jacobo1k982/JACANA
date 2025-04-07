import React from 'react'

const Subtitle = ({ subtitle }) => {
  return (
    <>
      <div className='grid items-center'>
        <h2 className='text-3xl lg:text-3xl md:text-2xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg'>{subtitle}</h2>
      </div>
    </>
  )
}

export default Subtitle;