'use client'

import React from 'react'

export default function ToggleThemeButton() {
  return (
    <button
      className='icon'
      onClick={() => {
        document.documentElement.classList.toggle('dark')
      }}
      type='button'>
      <span className='dark:hidden'>dark_mode</span>
      <span className='hidden dark:inline'>light_mode</span>
    </button>
  )
}
