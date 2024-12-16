import React from 'react'
import audioinfo from './ui/Auidioinfo'
import sampleRate from './ui/SampleRate'

const formate = () => {
  return (
    <div className='relative flex flex-col bg-clip-padding bg-white rounded-s-md  box-border '>
      <div >
        <audioinfo/>
      </div>

      <div>
        <sampletRate/>
      </div>

    </div>
  )
}

export default formate
