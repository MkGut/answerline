'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import Logo from './Logo'
import Button from './Button'

type Screen = 'home' | 'how' | 'sample' | 'join'

interface NavProps {
  current: Screen
  navigate: (s: Screen) => void
}

const links: { label: string; screen: Screen }[] = [
  { label: 'Home', screen: 'home' },
  { label: 'How it works', screen: 'how' },
  { label: 'Sample lesson', screen: 'sample' },
  { label: 'Join', screen: 'join' },
]

export default function Nav({ current, navigate }: NavProps) {
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -64, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.1 }
    )
  }, [])

  return (
    <div
      ref={navRef}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: '#25282b',
        color: '#fff',
        borderBottom: '1px solid rgba(255,255,255,0.12)',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '16px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
        }}
      >
        <button
          onClick={() => navigate('home')}
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        >
          <Logo tone="on-dark" size={26} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          {links.map(({ label, screen }) => (
            <button
              key={screen}
              onClick={() => navigate(screen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: 15,
                color: '#fff',
                padding: '6px 0',
                position: 'relative',
              }}
            >
              {label}
              {current === screen && (
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -2,
                    height: 2,
                    background: '#e60000',
                  }}
                />
              )}
            </button>
          ))}

          <Button variant="primary" size="sm" onClick={() => navigate('join')}>
            Start training
          </Button>
        </div>
      </div>
    </div>
  )
}
