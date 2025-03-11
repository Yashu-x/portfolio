import React from 'react'
import Spotlight from './Ui/Spotlight'

const Primary = () => {
  return (
    <div className='pb-20 pt-36 text-center'>
        <div>
            <Spotlight className=" -top-40 -left-10 md:-left-32 md:-top-20 h-screen fill-amber-50" />
            <Spotlight className=" top-50 left-full h-[100vh] w-[100vw]" fill='purple'  />
            <Spotlight className=" top-35 left-100 h-[20vh] w-[10vw]" fill='white'/>
            <Spotlight className=" top-28 left-80 h-[80vh] w-[50vw] " fill='blue' />

        </div>
    </div>
  )
}

export default Primary
