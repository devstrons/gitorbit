'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'

const schema = z.object({ githubUsername: z.string() })

export default function UsernameInputForm() {
  const router = useRouter()
  const { register, handleSubmit } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  })

  return (
    <form
      className='mx-auto mb-8 flex max-w-md divide-x overflow-hidden rounded-md border'
      onSubmit={handleSubmit((data) => {
        router.push(`/${data.githubUsername}`)
      })}>
      <input
        className='flex-1 border-none bg-slate-100 shadow-inner placeholder:text-slate-400 autofill:shadow-none dark:bg-slate-600 autofill:dark:bg-slate-500'
        {...register('githubUsername')}
        placeholder='Search GitHub Username'
        type='text'
      />
      <button className='icon bg-white px-4 dark:bg-slate-800'>search</button>
    </form>
  )
}
