import './globals.css'

import Image from 'next/image'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import AppProviders from './App.provider'

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons+Round'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons+Outlined'
          rel='stylesheet'
        />
      </head>
      <body className='bg-slate-700'>
        <div className='grid h-screen grid-rows-[auto,1fr] overflow-y-auto text-slate-300'>
          <header className='bg-slate-800 px-2 py-4 shadow-md md:px-4'>
            <div className='mx-auto flex max-w-7xl items-center justify-between'>
              <Link
                href='/'
                className='relative block aspect-[6/1] h-8 mix-blend-lighten brightness-150 contrast-125'>
                <Image src='/gitorbit_logo.png' alt='gitorbit logo' fill />
              </Link>
              <button className='icon' type='button'>
                dark_mode
              </button>
            </div>
          </header>
          <main className='px-2 md:px-4'>
            <div className='mx-auto max-w-7xl py-4 md:py-8'>
              <AppProviders>{props.children}</AppProviders>
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
