'use client'

import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { angleToRadian, delay } from './utils/general.util'

type Props = {
  size: number
  bgColor: string
  avatarUrls: string[]
}

const UserConnectionCircle = forwardRef<HTMLCanvasElement, Props>((props, ref) => {
  const configurations = [
    { distance: 0, count: 1, radius: props.size * 0.12 },
    { distance: props.size * 0.2, count: 8, radius: props.size * 0.06 },
    { distance: props.size * 0.33, count: 16, radius: props.size * 0.05 },
    { distance: props.size * 0.44, count: 26, radius: props.size * 0.04 },
  ]

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useImperativeHandle(ref, () => canvasRef.current!)

  useEffect(() => {
    if (!canvasRef.current || props.avatarUrls.length === 0) return

    const ctx = canvasRef.current.getContext('2d')!
    const width = props.size
    const height = props.size
    // fill the background
    ctx.fillStyle = props.bgColor
    // ctx.fillStyle = 'rgba(0,0,0,0.05)'
    // ctx.globalAlpha = 0.2
    // ctx.fillStyle = 'black'

    ctx.fillRect(0, 0, width, height)

    // render logo
    getImage('/gitorbit-logo.png').then((logo) => {
      const logoHeight = props.size * 0.033,
        logoWidth = logoHeight * 6,
        padding = props.size * 0.01

      ctx.save()
      ctx.beginPath()
      ctx.drawImage(
        logo,
        props.size - padding - logoWidth,
        props.size - padding - logoHeight,
        logoWidth,
        logoHeight
      )
      ctx.restore()
    })

    const userAvatarUrls = [...props.avatarUrls]

    // render user's connection circles
    for (let i = 0; i < configurations.length; i++) {
      const config = configurations[i]
      const offset = i * 30
      const angleSize = 360 / config.count

      const urls = userAvatarUrls.splice(0, config.count)
      for (let i = 0; i < urls.length; i++) {
        const radian = angleToRadian(i * angleSize + offset)
        const centerX = Math.cos(radian) * config.distance + width / 2
        const centerY = Math.sin(radian) * config.distance + height / 2

        drawUserAvatar(ctx, urls[i], centerX, centerY, config.radius)
      }
    }
  }, [props.bgColor, props.size, props.avatarUrls[0]])

  return (
    <canvas ref={canvasRef} id='user-connection-circle' height={props.size} width={props.size} />
  )
})
export default UserConnectionCircle

const getImage = (url: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = '*'
    img.src = url
    img.onload = () => resolve(img)
    img.onerror = reject
  })

async function drawUserAvatar(
  ctx: CanvasRenderingContext2D,
  avatarUrl: string,
  centerX: number,
  centerY: number,
  radius: number
) {
  const [image] = await Promise.all([getImage(avatarUrl), delay(Math.random() * 2)])

  ctx.save()
  ctx.beginPath()
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
  ctx.clip()

  ctx.fillStyle = '#fff8'
  ctx.fill()

  ctx.drawImage(image, centerX - radius, centerY - radius, radius * 2, radius * 2)
  ctx.restore()
}
