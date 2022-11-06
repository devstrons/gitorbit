'use client'

import React from 'react'

export default function Error() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <span className='icon text-8xl'>error</span>
      <p className='text-center text-2xl font-semibold'>Error Occurred! Try refreshing the page.</p>
    </div>
  )
}
