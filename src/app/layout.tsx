import './globals.css'

import Image from 'next/image'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'

import ToggleThemeButton from './ToggleThemeButton.client'

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang='en' className='dark'>
      <head>
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons+Round'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons+Outlined'
          rel='stylesheet'
        />
        <title>GitOrbit</title>
      </head>
      <body className='bg-slate-100 transition dark:bg-slate-700'>
        <div className='grid h-screen grid-rows-[auto,1fr] overflow-y-auto text-slate-500 dark:text-slate-300'>
          <header className='sticky top-0 bg-white px-2 py-4 shadow-md dark:bg-slate-800 md:px-4'>
            <div className='mx-auto flex max-w-7xl items-center justify-between'>
              <Link href='/' className='relative aspect-[6/1] h-8 invert-[0.75] dark:invert-0'>
                <Image src='/gitorbit-logo.png' alt='gitorbit logo' fill />
              </Link>
              <ToggleThemeButton />
            </div>
          </header>
          <main className='px-2 md:px-4'>
            <div className='mx-auto max-w-7xl py-4 md:py-8'>{props.children}</div>
          </main>
        </div>
      </body>
    </html>
  )
}
