'use client'

import { useRef, useEffect, useState } from 'react'
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
  const [open, setOpen] = useState(false)

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -64, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.1 }
    )
  }, [])

  // Close the mobile menu whenever we switch to a desktop-width viewport
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const go = (screen: Screen) => {
    navigate(screen)
    setOpen(false)
  }

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
        className="al-shell"
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
          onClick={() => go('home')}
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        >
          <Logo tone="on-dark" size={26} />
        </button>

        {/* Desktop links — hidden at <= 860px */}
        <div className="al-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
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

        {/* Mobile hamburger — shown only at <= 860px */}
        <button
          className="al-nav-burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
            {open ? (
              <>
                <line x1="6" y1="6" x2="20" y2="20" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                <line x1="20" y1="6" x2="6" y2="20" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="4" y1="8" x2="22" y2="8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                <line x1="4" y1="13" x2="22" y2="13" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                <line x1="4" y1="18" x2="22" y2="18" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown panel — collapsed/hidden on desktop via CSS */}
      <div className={`al-nav-panel${open ? ' open' : ''}`}>
        <div className="al-shell" style={{ padding: '8px 32px 20px' }}>
          {links.map(({ label, screen }) => (
            <button
              key={screen}
              onClick={() => go(screen)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                borderTop: '1px solid rgba(255,255,255,0.10)',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: 17,
                color: current === screen ? '#e60000' : '#fff',
                fontWeight: current === screen ? 700 : 400,
                padding: '16px 2px',
              }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => go('join')}
            style={{
              width: '100%',
              marginTop: 14,
              background: '#e60000',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontWeight: 700,
              fontSize: 16,
              height: 50,
              borderRadius: 50,
            }}
          >
            Start training
          </button>
        </div>
      </div>
    </div>
  )
}
