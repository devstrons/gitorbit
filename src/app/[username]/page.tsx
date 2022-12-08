import React from 'react'
import DownloadableUserCircle from '../DownloadableUserCircle.server'

export default function UserPage({ params }) {
  // @ts-expect-error Server Component
  return <DownloadableUserCircle githubUsername={params.username} />
}
