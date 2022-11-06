import React from 'react'

export default function Loading() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <span className='icon text-8xl'>person_search</span>
      <p className='text-center text-2xl font-semibold'>Searching user...</p>
    </div>
  )
}
