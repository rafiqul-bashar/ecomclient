import React from 'react'

export default function Loading() {
    return (
        <article className='w-full h-full flex items-center justify-center space-y-3 py-32'>
            <div className='flex flex-col items-center space-y-3'>
                <div class="animate-bounce flex space-x-4">
                    <div class=" bg-black/70 h-4 w-4" />
                    <div class=" bg-black/70 h-4 w-4" />
                    <div class=" bg-black/70 h-4 w-4" />
                    <div class=" bg-black/70 h-4 w-4" />
                </div>
                <div className='text-3xl tracking-widest animate-pulse '>Loading ....</div>
            </div>
        </article>
    )
}
