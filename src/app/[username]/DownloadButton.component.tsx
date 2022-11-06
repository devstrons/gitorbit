'use client'

import React from 'react'

export default function DownloadButton(props) {
  return (
    <button
      className='mt-6 rounded-md bg-sky-500 p-2 pr-4 text-white shadow-md disabled:bg-slate-600 disabled:shadow-none'
      disabled={!props.filename}
      onClick={() => {
        const canvasRef = document.getElementById('user-connection-circle') as HTMLCanvasElement
        if (canvasRef) {
          const link = document.createElement('a')
          link.download = props.filename

          link.href = canvasRef.toDataURL('image/png').replace('image/png', 'image/octet-stream')

          link.click()
        }
      }}
      type='button'>
      <span className='icon mx-1'>download</span> Download
    </button>
  )
}
