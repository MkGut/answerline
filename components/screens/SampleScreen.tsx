'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnswerOrb from '../AnswerOrb'
import CtaBand from '../CtaBand'

gsap.registerPlugin(ScrollTrigger)

const clues = [
  { t: 'Stono Rebellion', hot: true, d: 'This major British colonial slave revolt, led by Cato and featuring a "Liberty" chant, points directly to South Carolina.' },
  { t: 'Charleston', hot: true, d: 'The major port city — linked to Fort Sumter, Rainbow Row, Sullivan\'s Island, and the International African American Museum.' },
  { t: 'Indigo & rice', hot: false, d: 'These crops were central to the colonial economy and its large enslaved population.' },
  { t: 'Denmark Vesey', hot: false, d: 'His planned slave revolt on Bastille Day is a specific event tied to the state.' },
  { t: 'Pat Conroy', hot: false, d: 'Author of "The Prince of Tides" and "The Great Santini" — frequently set his novels here.' },
  { t: 'Lake Wylie', hot: false, d: 'A body of water demarcating part of the border between South and North Carolina.' },
  { t: 'Articles of Confederation', hot: false, d: 'South Carolina is explicitly listed among the original states in this founding document.' },
  { t: 'Yamasee War', hot: false, d: 'Instigated by deer scarcity and trade debt, it began here and involved tribes like the Catawba.' },
]

interface SampleScreenProps {
  navigate: (s: 'home' | 'how' | 'sample' | 'join') => void
}

export default function SampleScreen({ navigate }: SampleScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const identityRef = useRef<HTMLDivElement>(null)
  const cluesGridRef = useRef<HTMLDivElement>(null)
  const trapsRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Hero entrance — orb + headline stagger
      const heroEls = heroRef.current?.querySelectorAll('.hero-el')
      if (heroEls) {
        gsap.fromTo(
          heroEls,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: 'power3.out', delay: 0.1 }
        )
      }

      // Identity section
      const identEls = identityRef.current?.querySelectorAll('.ident-el')
      if (identEls) {
        gsap.fromTo(
          identEls,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: identityRef.current,
              start: 'top 82%',
            },
          }
        )
      }

      // Clue cards grid
      const clueCards = cluesGridRef.current?.querySelectorAll('.clue-card')
      if (clueCards) {
        gsap.fromTo(
          clueCards,
          { y: 40, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.07,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cluesGridRef.current,
              start: 'top 82%',
            },
          }
        )
      }

      // Traps + memory phrase
      const trapEls = trapsRef.current?.querySelectorAll('.trap-el')
      if (trapEls) {
        gsap.fromTo(
          trapEls,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: trapsRef.current,
              start: 'top 82%',
            },
          }
        )
      }
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef}>
      {/* DARK HEADER */}
      <div style={{ background: '#25282b', color: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 32px 64px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 16,
              marginBottom: 30,
            }}
          >
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
              Daily Quizbowl story
            </div>
            <div className="hero-el" style={{ display: 'flex', gap: 10 }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: 32,
                  padding: '0 16px',
                  borderRadius: 32,
                  border: '1px solid rgba(255,255,255,0.3)',
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#fff',
                }}
              >
                History
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: 32,
                  padding: '0 16px',
                  borderRadius: 32,
                  background: '#e60000',
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                Rank 76 · Freq 30
              </span>
            </div>
          </div>

          <div
            className="hero-el"
            style={{ display: 'flex', alignItems: 'flex-end', gap: 18, flexWrap: 'wrap' }}
          >
            <AnswerOrb size={60} />
            <div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.57px',
                  textTransform: 'uppercase',
                  color: '#bebebe',
                }}
              >
                Answerline
              </div>
              <h1
                style={{
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '-2px',
                  lineHeight: 0.9,
                  margin: '4px 0 0',
                  fontSize: 'clamp(54px,9vw,108px)',
                }}
              >
                South
                <br />
                Carolina
              </h1>
            </div>
          </div>

          <p
            className="hero-el"
            style={{
              fontSize: 20,
              lineHeight: '29px',
              color: '#e8e8e8',
              maxWidth: 640,
              margin: '28px 0 0',
              fontWeight: 300,
            }}
          >
            Recognize South Carolina through its colonial history, key cities like
            Charleston, and its literary connections.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 32px' }}>

        {/* IDENTITY + MENTAL MODEL */}
        <div
          ref={identityRef}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: 48,
            alignItems: 'start',
            marginBottom: 64,
          }}
        >
          <div className="ident-el">
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: '#e60000',
                marginBottom: 12,
              }}
            >
              Identity
            </div>
            <p style={{ fontSize: 20, lineHeight: '28px', margin: 0, fontWeight: 300 }}>
              An American state known for its significant role in colonial history, the
              Civil War, and its distinctive coastal culture.
            </p>
          </div>

          <div className="ident-el">
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: '#e60000',
                marginBottom: 12,
              }}
            >
              The mental model
            </div>
            <p style={{ fontSize: 17, lineHeight: '27px', color: '#3a3d40', margin: '0 0 16px' }}>
              South Carolina frequently appears in Quizbowl through its deep colonial and
              antebellum history. Clues often center on the state's early economy —
              particularly indigo and rice cultivation, which led to a large enslaved
              population. The Stono Rebellion, led by Cato, and Denmark Vesey's planned
              revolt are key events tied to this history, often featuring the chant of
              "Liberty." The capital, Charleston, is a major clue anchor — associated
              with Fort Sumter, Rainbow Row, Sullivan's Island, and the International
              African American Museum.
            </p>
            <p style={{ fontSize: 17, lineHeight: '27px', color: '#3a3d40', margin: 0 }}>
              Geographically, the state is linked to its border with North Carolina, with
              specific mentions of Lake Wylie or I-95 billboards featuring Pedro. It was
              one of the original states in the Articles of Confederation. Its literary
              landscape is prominent too: Pat Conroy, Sue Monk Kidd's "The Secret Life
              of Bees," and Dorothy Allison's "Bastard Out of Carolina" recur as clues,
              as do figures like Eliza Pinckney, who popularized indigo planting, and
              Daniel Payne of the AME Church.
            </p>
          </div>
        </div>

        {/* WHY THESE CLUES MATTER */}
        <div
          style={{
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            color: '#e60000',
            marginBottom: 20,
          }}
        >
          Why these clues matter
        </div>
        <div
          ref={cluesGridRef}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18, marginBottom: 64 }}
        >
          {clues.map((c, i) => (
            <div
              key={i}
              className="clue-card"
              style={{
                background: '#fff',
                border: '1px solid rgba(37,40,43,0.12)',
                borderRadius: 6,
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
              onMouseEnter={(e) =>
                gsap.to(e.currentTarget, {
                  borderColor: 'rgba(37,40,43,0.3)',
                  y: -2,
                  duration: 0.2,
                })
              }
              onMouseLeave={(e) =>
                gsap.to(e.currentTarget, {
                  borderColor: 'rgba(37,40,43,0.12)',
                  y: 0,
                  duration: 0.22,
                })
              }
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.5px' }}>
                  {c.t}
                </span>
                {c.hot && (
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      height: 22,
                      padding: '0 10px',
                      borderRadius: 32,
                      background: '#e60000',
                      color: '#fff',
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.3px',
                    }}
                  >
                    Anchor
                  </span>
                )}
              </div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: '23px', color: '#7e7e7e' }}>
                {c.d}
              </p>
            </div>
          ))}
        </div>

        {/* TRAPS + MEMORY PHRASE */}
        <div
          ref={trapsRef}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'stretch' }}
        >
          {/* Confusion traps */}
          <div
            className="trap-el"
            style={{
              background: '#25282b',
              color: '#fff',
              borderRadius: 6,
              padding: 32,
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: '#e60000',
                marginBottom: 18,
              }}
            >
              Confusion traps
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div>
                <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>
                  Not the Sea Islands
                </div>
                <p style={{ margin: 0, fontSize: 15, lineHeight: '23px', color: '#cfcfcf' }}>
                  Related, but clues must point to South Carolina itself — not the Sea
                  Islands as a separate answerline.
                </p>
              </div>
              <div style={{ height: 1, background: 'rgba(255,255,255,0.18)' }} />
              <div>
                <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>
                  Not North Carolina
                </div>
                <p style={{ margin: 0, fontSize: 15, lineHeight: '23px', color: '#cfcfcf' }}>
                  Often paired for border clues like Lake Wylie or I-95 — but the Stono
                  Rebellion and Pat Conroy distinguish the South.
                </p>
              </div>
            </div>
          </div>

          {/* Memory phrase */}
          <div
            className="trap-el"
            style={{
              background: '#f2f2f2',
              borderRadius: 6,
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: '#e60000',
                marginBottom: 14,
              }}
            >
              Final memory phrase
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 'clamp(24px,3.4vw,32px)',
                lineHeight: 1.18,
                fontWeight: 300,
                letterSpacing: '-0.5px',
              }}
            >
              Charleston's Fort Sumter, the Stono Rebellion, and Pat Conroy's novels
              define South Carolina.
            </p>
          </div>
        </div>
      </div>

      <CtaBand onGo={() => navigate('join')} />
    </div>
  )
}
