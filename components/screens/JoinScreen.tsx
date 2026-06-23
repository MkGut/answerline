'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const perks = [
  'Free while in beta — unsubscribe anytime.',
  'One short email a day, no app to open.',
  'Built from real Quizbowl question history.',
]

export default function JoinScreen() {
  const containerRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const infoEls = infoRef.current?.querySelectorAll('.info-el')
      if (infoEls) {
        gsap.fromTo(
          infoEls,
          { x: -40, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.1, duration: 0.75, ease: 'power3.out', delay: 0.1 }
        )
      }

      gsap.fromTo(
        formRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
      )
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} style={{ background: '#25282b', color: '#fff' }}>
      <div
        className="al-shell al-join-grid"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '60px 32px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 56,
          alignItems: 'start',
        }}
      >
        {/* Left — info */}
        <div ref={infoRef} className="al-join-info" style={{ position: 'sticky', top: 96 }}>
          <div
            className="info-el"
            style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#e60000',
            }}
          >
            Start free
          </div>
          <h1
            className="info-el"
            style={{
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '-1.5px',
              lineHeight: 0.92,
              margin: '16px 0 0',
              fontSize: 'clamp(52px,8vw,96px)',
            }}
          >
            Start
            <br />
            training
          </h1>
          <p
            className="info-el"
            style={{
              fontSize: 19,
              lineHeight: '28px',
              color: '#cfcfcf',
              maxWidth: 440,
              margin: '26px 0 30px',
              fontWeight: 300,
            }}
          >
            Pick a category and difficulty. We handle the rest — a fresh high-yield
            answerline in your inbox each morning at 6am.
          </p>
          <div
            className="info-el"
            style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 380 }}
          >
            {perks.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span
                  style={{
                    flexShrink: 0,
                    width: 24,
                    height: 24,
                    borderRadius: '9999px',
                    background: '#e60000',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 13,
                    fontWeight: 800,
                  }}
                >
                  ›
                </span>
                <span style={{ fontSize: 16, lineHeight: '24px', color: '#e8e8e8' }}>
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div
          ref={formRef}
          style={{
            background: '#fff',
            borderRadius: 6,
            padding: 14,
            minHeight: 620,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.57px',
              textTransform: 'uppercase',
              color: '#7e7e7e',
              padding: '10px 12px 6px',
            }}
          >
            Sign up
          </div>
          <iframe
            src="https://lend-scrubber-bobcat.ngrok-free.dev/form/d47913c0-f09b-4162-8995-e4b6b357a700"
            title="Answerline signup"
            style={{
              flex: 1,
              width: '100%',
              border: 0,
              borderRadius: 4,
              minHeight: 580,
              background: '#fff',
            }}
          />
        </div>
      </div>
    </div>
  )
}
