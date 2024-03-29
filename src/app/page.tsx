import React from 'react'
import DownloadableUserCircle from './DownloadableUserCircle.server'
import UsernameInputForm from './UsernameInputForm.client'

export default function HomePage() {
  return (
    <>
      <UsernameInputForm />
      {/* @ts-expect-error Server Component */}
      <DownloadableUserCircle githubUsername='devstrons' />
    </>
  )
}
