'use client'

import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { angleToRadian } from './utils/general.util'

type Props = {
  size: number
  bgColor: string
  avatarUrls: string[]
}

const getImage = (url: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = '*'
    img.src = url
    img.onload = () => resolve(img)
    img.onerror = reject
  })

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

    // render user's connection circles
    Promise.all(props.avatarUrls.map(getImage)).then((avatarImages) => {
      for (let i = 0; i < configurations.length; i++) {
        const config = configurations[i]
        const offset = i * 30
        const angleSize = 360 / config.count

        const images = avatarImages.splice(0, config.count)

        for (let i = 0; i < images.length; i++) {
          const radian = angleToRadian(i * angleSize + offset)
          const centerX = Math.cos(radian) * config.distance + width / 2
          const centerY = Math.sin(radian) * config.distance + height / 2

          ctx.save()
          ctx.beginPath()
          ctx.arc(centerX, centerY, config.radius, 0, Math.PI * 2)
          ctx.clip()
          ctx.drawImage(
            images[i]!,
            centerX - config.radius,
            centerY - config.radius,
            config.radius * 2,
            config.radius * 2
          )
          ctx.restore()
        }
      }
    })
  }, [props.bgColor, props.size, props.avatarUrls[0]])

  return (
    <canvas id='user-connection-circle' ref={canvasRef} height={props.size} width={props.size} />
  )
})

export default UserConnectionCircle
