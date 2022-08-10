import React from 'react'
import preloader from "../../assets/loader.gif"
export default function Loading() {
    return (
        <article id='preloader ' className='bg-[#000] h-full w-full fixed z-index-[100]' style={{ 
            backgroundImage: `url(${preloader})` ,backgroundRepeat: 'no-repeat',backgroundSize:"20%",backgroundPosition:"center"
          }}>
           
        </article>
    )
}
