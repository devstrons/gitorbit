import React from 'react'

export default function UserNotFoundPage() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <span className='icon text-8xl'>no_accounts</span>
      <p className='text-center text-2xl font-semibold'>No user found!</p>
    </div>
  )
}
