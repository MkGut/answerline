'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CtaBand from '../CtaBand'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { n: '01', t: 'Pick a category', d: 'Literature, Science, Fine Arts, or History — plus a difficulty level that matches your play.' },
  { n: '02', t: 'We mine real questions', d: 'We pull past tossups on a high-yield answerline from real Quizbowl data and strip the noise.' },
  { n: '03', t: 'You learn the clues', d: 'The highest-value clues — plus the explanations behind them — arrive in your inbox in one clean email each morning. Train recognition.' },
]

const anatomy = [
  { k: 'A', t: 'The answerline', d: 'One high-yield answer, with its category, difficulty, and how often it has appeared.' },
  { k: 'B', t: 'The mental model', d: 'A short read on how this answer tends to show up — the shape of its clues.' },
  { k: 'C', t: 'Why the clues matter', d: 'The recurring clue families — events, people, works — that point straight to the answer.' },
  { k: 'D', t: 'Confusion traps', d: 'The lookalike answers that steal buzzes, and the line that ends with a memory phrase.' },
]

interface HowScreenProps {
  navigate: (s: 'home' | 'how' | 'sample' | 'join') => void
}

export default function HowScreen({ navigate }: HowScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)
  const anatomyRef = useRef<HTMLDivElement>(null)
  const quoteRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Hero entrance
      const heroEls = heroRef.current?.querySelectorAll('.hero-el')
      if (heroEls) {
        gsap.fromTo(
          heroEls,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out', delay: 0.1 }
        )
      }

      // Step cards stagger
      const cards = stepsRef.current?.querySelectorAll('.step-card')
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: stepsRef.current,
              start: 'top 82%',
            },
          }
        )
      }

      // Anatomy cards stagger
      const anatCards = anatomyRef.current?.querySelectorAll('.anat-card')
      if (anatCards) {
        gsap.fromTo(
          anatCards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.65,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: anatomyRef.current,
              start: 'top 82%',
            },
          }
        )
      }

      // Philosophy quote
      gsap.fromTo(
        quoteRef.current,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: quoteRef.current,
            start: 'top 80%',
          },
        }
      )
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef}>
      {/* DARK HEADER */}
      <div ref={heroRef} style={{ background: '#25282b', color: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px 72px' }}>
          <div
            className="hero-el"
            style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#e60000',
            }}
          >
            How it works
          </div>
          <h1
            className="hero-el"
            style={{
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '-1.5px',
              lineHeight: 0.9,
              margin: '18px 0 0',
              fontSize: 'clamp(56px,9vw,112px)',
            }}
          >
            One email.
            <br />
            Every day.
          </h1>
          <p
            className="hero-el"
            style={{
              fontSize: 22,
              lineHeight: '30px',
              color: '#cfcfcf',
              maxWidth: 600,
              margin: '30px 0 0',
              fontWeight: 300,
            }}
          >
            Raw question history, turned into repeatable training. No app to open,
            no flashcards to grind — just recognition, delivered.
          </p>
        </div>
      </div>

      {/* 3-STEP CARDS */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 32px 24px' }}>
        <div
          ref={stepsRef}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}
        >
          {steps.map((s) => (
            <div
              key={s.n}
              className="step-card"
              style={{
                background: '#fff',
                border: '1px solid rgba(37,40,43,0.12)',
                borderRadius: 6,
                padding: 30,
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                minHeight: 240,
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 800, color: '#e60000', letterSpacing: '0.5px' }}>
                {s.n}
              </span>
              <h3 style={{ fontSize: 26, fontWeight: 700, margin: 0, letterSpacing: '-0.5px' }}>
                {s.t}
              </h3>
              <p style={{ fontSize: 16, lineHeight: '24px', color: '#7e7e7e', margin: 0 }}>
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* EMAIL ANATOMY */}
      <div style={{ background: '#f2f2f2', marginTop: 40 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 32px' }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#e60000',
              marginBottom: 14,
            }}
          >
            Inside each email
          </div>
          <h2
            style={{
              fontWeight: 300,
              fontSize: 'clamp(34px,5vw,48px)',
              lineHeight: 1.08,
              margin: '0 0 40px',
              maxWidth: 720,
            }}
          >
            Every lesson follows the same shape, so your eye learns where to look.
          </h2>
          <div
            ref={anatomyRef}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}
          >
            {anatomy.map((a) => (
              <div
                key={a.k}
                className="anat-card"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(37,40,43,0.12)',
                  borderRadius: 6,
                  padding: 26,
                  display: 'flex',
                  gap: 18,
                  alignItems: 'flex-start',
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    fontSize: 13,
                    fontWeight: 800,
                    color: '#e60000',
                    paddingTop: 3,
                  }}
                >
                  {a.k}
                </span>
                <div>
                  <div style={{ fontSize: 19, fontWeight: 700, marginBottom: 6 }}>{a.t}</div>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: '23px', color: '#7e7e7e' }}>
                    {a.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PHILOSOPHY */}
      <div ref={quoteRef} style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 32px' }}>
        <p
          style={{
            fontSize: 'clamp(30px,4.5vw,44px)',
            lineHeight: 1.18,
            fontWeight: 300,
            letterSpacing: '-0.5px',
            margin: 0,
          }}
        >
          Train{' '}
          <span style={{ color: '#e60000', fontWeight: 800 }}>recognition</span>, not
          recall. If you wait for the giveaway, you've already lost the buzz.
        </p>
      </div>

      <CtaBand onGo={() => navigate('join')} />
    </div>
  )
}
