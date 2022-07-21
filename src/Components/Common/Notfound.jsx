import React from 'react'
import img from "../../assets/notfound.png"
export default function Notfound() {
  return (
    <div className='flex items-center justify-center py-8'>
      <img src={img} alt='notfound' />
    </div>
  )
}
