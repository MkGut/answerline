'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'

export default function AnswerOrb({ size = 60 }: { size?: number }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const buzzRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.4 })

    // Bob
    tl.to(btnRef.current, {
      y: -5,
      duration: 0.18,
      ease: 'power2.out',
      yoyo: true,
      repeat: 1,
    })

    // Press + glow + ring + dot + buzz
    tl.to(
      btnRef.current,
      { y: size * 0.22, scaleY: 0.9, duration: 0.1, ease: 'power3.in' },
      '+=0.2'
    )
    tl.to(btnRef.current, {
      y: -size * 0.07,
      scaleY: 1.03,
      duration: 0.12,
      ease: 'power2.out',
    })
    tl.to(btnRef.current, { y: 0, scaleY: 1, duration: 0.1 })

    tl.to(
      dotRef.current,
      { opacity: 1, boxShadow: '0 0 30px rgba(230,0,0,1)', duration: 0.1 },
      '<-0.1'
    )
    tl.to(dotRef.current, {
      opacity: 0.32,
      boxShadow: '0 0 8px rgba(230,0,0,0.5)',
      duration: 0.3,
    })

    tl.fromTo(
      ringRef.current,
      { scale: 0.35, opacity: 0 },
      { scale: 2.2, opacity: 0, duration: 0.55, ease: 'power1.out' },
      '<-0.15'
    )

    tl.fromTo(
      buzzRef.current,
      { opacity: 0, y: 4, scale: 0.6 },
      { opacity: 1, y: -8, scale: 1.14, duration: 0.12 },
      '<'
    )
    tl.to(buzzRef.current, { y: -12, scale: 1, duration: 0.1 })
    tl.to(buzzRef.current, { opacity: 0, y: -20, duration: 0.2 })

    return () => {
      tl.kill()
    }
  }, [size])

  return (
    <div
      ref={containerRef}
      style={{ width: size, height: size, position: 'relative' }}
    >
      {/* Outer ring */}
      <div
        ref={ringRef}
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '9999px',
          border: '2px solid #e60000',
          transform: 'scale(0.35)',
          opacity: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Main orb */}
      <div
        ref={btnRef}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '9999px',
          background: '#e60000',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Live dot */}
        <div
          ref={dotRef}
          style={{
            width: size * 0.22,
            height: size * 0.22,
            borderRadius: '9999px',
            background: '#fff',
            opacity: 0.32,
            boxShadow: '0 0 8px rgba(230,0,0,0.5)',
          }}
        />
      </div>

      {/* Buzz label */}
      <div
        ref={buzzRef}
        style={{
          position: 'absolute',
          bottom: '100%',
          left: '50%',
          transform: 'translate(-50%, 4px)',
          background: '#e60000',
          color: '#fff',
          fontSize: 10,
          fontWeight: 800,
          letterSpacing: 1,
          padding: '2px 8px',
          borderRadius: 4,
          whiteSpace: 'nowrap',
          opacity: 0,
          pointerEvents: 'none',
        }}
      >
        BUZZ
      </div>
    </div>
  )
}
