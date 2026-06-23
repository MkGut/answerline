'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from './Button'

gsap.registerPlugin(ScrollTrigger)

interface CtaBandProps {
  onGo: () => void
}

export default function CtaBand({ onGo }: CtaBandProps) {
  const ref = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const btnRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        headlineRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
          },
        }
      )
      gsap.fromTo(
        btnRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          delay: 0.15,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
          },
        }
      )
    },
    { scope: ref }
  )

  return (
    <div ref={ref} style={{ background: '#e60000', color: '#fff' }}>
      <div
        className="al-shell"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '72px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 32,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.8)',
              marginBottom: 14,
            }}
          >
            Free while in beta
          </div>
          <h2
            ref={headlineRef}
            style={{
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '-1.5px',
              lineHeight: 0.9,
              margin: 0,
              fontSize: 'clamp(40px,6vw,76px)',
            }}
          >
            Start training
            <br />
            tomorrow morning
          </h2>
        </div>
        <div ref={btnRef}>
          <button
            onClick={onGo}
            onMouseEnter={(e) =>
              gsap.to(e.currentTarget, { opacity: 0.88, duration: 0.2 })
            }
            onMouseLeave={(e) =>
              gsap.to(e.currentTarget, { opacity: 1, duration: 0.2 })
            }
            style={{
              background: '#fff',
              color: '#25282b',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontWeight: 700,
              fontSize: 18,
              height: 60,
              padding: '0 38px',
              borderRadius: 60,
              whiteSpace: 'nowrap',
            }}
          >
            Get the daily email →
          </button>
        </div>
      </div>
    </div>
  )
}
