'use client'

import { useRef } from 'react'
import gsap from 'gsap'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'on-dark' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
}

const styles = {
  primary: {
    background: '#e60000',
    color: '#ffffff',
    border: 'none',
  },
  'on-dark': {
    background: 'transparent',
    color: '#ffffff',
    border: '1.5px solid rgba(255,255,255,0.4)',
  },
  ghost: {
    background: 'transparent',
    color: '#25282b',
    border: '1.5px solid rgba(37,40,43,0.3)',
  },
}

const sizes = {
  sm: { height: 36, padding: '0 18px', fontSize: 14, borderRadius: 36 },
  md: { height: 46, padding: '0 26px', fontSize: 15, borderRadius: 46 },
  lg: { height: 56, padding: '0 36px', fontSize: 17, borderRadius: 56 },
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)

  const handleMouseEnter = () => {
    gsap.to(ref.current, {
      scale: 1.04,
      duration: 0.22,
      ease: 'power2.out',
    })
  }

  const handleMouseLeave = () => {
    gsap.to(ref.current, {
      scale: 1,
      duration: 0.28,
      ease: 'power2.out',
    })
  }

  const handleMouseDown = () => {
    gsap.to(ref.current, { scale: 0.96, duration: 0.1, ease: 'power2.in' })
  }

  const handleMouseUp = () => {
    gsap.to(ref.current, { scale: 1.04, duration: 0.15, ease: 'power2.out' })
  }

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={`cursor-pointer font-bold whitespace-nowrap inline-flex items-center justify-center ${className}`}
      style={{
        ...styles[variant],
        ...sizes[size],
        fontFamily: 'inherit',
      }}
    >
      {children}
    </button>
  )
}
