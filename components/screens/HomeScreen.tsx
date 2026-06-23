'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '../Button'
import CtaBand from '../CtaBand'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  { n: '01', name: 'Literature', note: 'Answers are mainly authors and their works — novels, poems, plays, and characters.' },
  { n: '02', name: 'Science', note: 'Answers are mainly scientists, laws, and phenomena across biology, chemistry, physics, and math.' },
  { n: '03', name: 'Fine Arts', note: 'Answers are mainly composers, painters, and the specific works and pieces they made.' },
  { n: '04', name: 'History', note: 'Answers are mainly events, leaders, wars, and places — like today\'s state, South Carolina.' },
]

const learnRows = [
  { tag: 'Early clues', title: 'The obscure lead-in that only the prepared recognize.' },
  { tag: 'Middle clues', title: 'The connective tissue — people, places, and battles.' },
  { tag: 'Giveaways & traps', title: 'The easy line, and the lookalikes that cost the buzz.' },
]

const subjectCategories = ['Literature', 'Science', 'Fine Arts', 'History']

interface HomeScreenProps {
  navigate: (s: 'home' | 'how' | 'sample' | 'join') => void
}

export default function HomeScreen({ navigate }: HomeScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaBtnsRef = useRef<HTMLDivElement>(null)
  const teaserRef = useRef<HTMLDivElement>(null)
  const categoriesRef = useRef<HTMLDivElement>(null)
  const learnRef = useRef<HTMLDivElement>(null)
  const watermarkRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Hero headline — split lines reveal
      const lines = headlineRef.current?.querySelectorAll('.hero-line')
      if (lines) {
        gsap.fromTo(
          lines,
          { y: '110%', opacity: 0 },
          {
            y: '0%',
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power4.out',
            delay: 0.2,
          }
        )
      }

      gsap.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.55 }
      )

      gsap.fromTo(
        ctaBtnsRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.75 }
      )

      // Subject row
      const subjectItems = containerRef.current?.querySelectorAll('.subject-item')
      if (subjectItems) {
        gsap.fromTo(
          subjectItems,
          { opacity: 0, x: -12 },
          {
            opacity: 1,
            x: 0,
            stagger: 0.08,
            duration: 0.5,
            ease: 'power2.out',
            delay: 0.3,
          }
        )
      }

      // Today's teaser — scroll reveal
      gsap.fromTo(
        teaserRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: teaserRef.current,
            start: 'top 82%',
          },
        }
      )

      // Category cards stagger
      const cards = categoriesRef.current?.querySelectorAll('.cat-card')
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: categoriesRef.current,
              start: 'top 82%',
            },
          }
        )
      }

      // Watermark parallax
      gsap.to(watermarkRef.current, {
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: learnRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Learn rows stagger
      const rows = learnRef.current?.querySelectorAll('.learn-row')
      if (rows) {
        gsap.fromTo(
          rows,
          { x: -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: learnRef.current,
              start: 'top 80%',
            },
          }
        )
      }
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef}>
      {/* HERO */}
      <div style={{ background: '#25282b', color: '#fff' }}>
        <div className="al-shell" style={{ maxWidth: 1280, margin: '0 auto', padding: '30px 32px 90px' }}>
          {/* Subject categories row */}
          <div
            className="al-subject-row"
            style={{
              display: 'flex',
              gap: 40,
              color: '#7e7e7e',
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              borderBottom: '1px solid rgba(255,255,255,0.14)',
              paddingBottom: 18,
            }}
          >
            {subjectCategories.map((cat) => (
              <span
                key={cat}
                className="subject-item"
                style={{ color: cat === 'History' ? '#e60000' : '#7e7e7e' }}
              >
                {cat}
              </span>
            ))}
          </div>

          <div style={{ marginTop: 40 }}>
            <h1
              ref={headlineRef}
              className="al-hero-h1"
              style={{
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '-2px',
                lineHeight: 0.86,
                margin: 0,
                fontSize: 'clamp(64px,11vw,140px)',
                overflow: 'hidden',
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <span className="hero-line" style={{ display: 'block' }}>Buzz</span>
              </div>
              <div style={{ overflow: 'hidden' }}>
                <span className="hero-line" style={{ display: 'block' }}>earlier</span>
              </div>
            </h1>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: 32,
                marginTop: 32,
              }}
            >
              <p
                ref={subtitleRef}
                style={{
                  fontSize: 22,
                  lineHeight: '30px',
                  color: '#cfcfcf',
                  maxWidth: 540,
                  margin: 0,
                  fontWeight: 300,
                }}
              >
                Real Quizbowl questions, distilled into one short study email a day.
                Learn the clues behind the answer — not another pile of random facts.
              </p>

              <div ref={ctaBtnsRef} className="al-hero-cta" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Button variant="primary" size="lg" onClick={() => navigate('join')}>
                  Start training free
                </Button>
                <Button variant="on-dark" size="lg" onClick={() => navigate('sample')}>
                  See a sample lesson
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TODAY'S ANSWERLINE TEASER */}
      <div className="al-shell" style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 32px 24px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#e60000',
            }}
          >
            Today's answerline
          </div>
          <button
            onClick={() => navigate('sample')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: 15,
              color: '#25282b',
              textDecoration: 'underline',
              textUnderlineOffset: 3,
            }}
          >
            Read the full lesson ›
          </button>
        </div>

        <div ref={teaserRef} className="al-home-teaser" style={{ display: 'grid', gridTemplateColumns: '1.15fr .85fr', gap: 24, alignItems: 'stretch' }}>
          {/* Left card */}
          <div
            style={{
              background: '#fff',
              border: '1px solid rgba(37,40,43,0.12)',
              borderRadius: 6,
              padding: 36,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ marginBottom: 22 }}>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.57px',
                  textTransform: 'uppercase',
                  color: '#7e7e7e',
                }}
              >
                Answerline
              </div>
              <div
                style={{
                  fontSize: 40,
                  fontWeight: 800,
                  letterSpacing: '-1px',
                  lineHeight: 1.05,
                }}
              >
                South Carolina
              </div>
            </div>
            <p
              style={{
                margin: '0 0 24px',
                fontSize: 17,
                lineHeight: '26px',
                color: '#7e7e7e',
                maxWidth: 460,
              }}
            >
              An American state recognized by its colonial and antebellum history,
              the port of Charleston, and a deep literary trail.
            </p>
            <div style={{ marginTop: 'auto', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: 32,
                  padding: '0 16px',
                  borderRadius: 32,
                  border: '1px solid rgba(37,40,43,0.2)',
                  fontSize: 13,
                  fontWeight: 600,
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
                High-yield · seen 30×
              </span>
            </div>
          </div>

          {/* Right card */}
          <div
            style={{
              background: '#25282b',
              color: '#fff',
              borderRadius: 6,
              padding: 36,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.57px',
                textTransform: 'uppercase',
                color: '#bebebe',
                marginBottom: 14,
              }}
            >
              Recognize it by
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 22,
                lineHeight: '30px',
                fontWeight: 300,
                color: '#fff',
              }}
            >
              Charleston's Fort Sumter, the Stono Rebellion, and Pat Conroy's novels
              define South Carolina.
            </p>
          </div>
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="al-shell" style={{ maxWidth: 1280, margin: '0 auto', padding: '56px 32px 16px' }}>
        <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>
          Four categories to train
        </div>
        <div
          ref={categoriesRef}
          className="al-home-cats"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.n}
              className="cat-card"
              onClick={() => navigate('join')}
              style={{
                textAlign: 'left',
                background: '#f2f2f2',
                border: 'none',
                borderRadius: 6,
                padding: 26,
                cursor: 'pointer',
                fontFamily: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                minHeight: 170,
              }}
              onMouseEnter={(e) =>
                gsap.to(e.currentTarget, { background: '#e8e8e8', duration: 0.2 })
              }
              onMouseLeave={(e) =>
                gsap.to(e.currentTarget, { background: '#f2f2f2', duration: 0.2 })
              }
            >
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  color: '#e60000',
                  letterSpacing: '0.5px',
                }}
              >
                {cat.n}
              </span>
              <span
                style={{
                  fontSize: 26,
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: '-0.5px',
                }}
              >
                {cat.name}
              </span>
              <span
                style={{
                  fontSize: 14,
                  lineHeight: '20px',
                  color: '#7e7e7e',
                  marginTop: 'auto',
                }}
              >
                {cat.note}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* LEARN ROWS */}
      <div ref={learnRef} style={{ position: 'relative', marginTop: 64, overflow: 'hidden' }}>
        <div
          ref={watermarkRef}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 34,
            textAlign: 'center',
            fontSize: 'clamp(80px,13vw,170px)',
            fontWeight: 800,
            letterSpacing: '-3px',
            color: '#f2f2f2',
            textTransform: 'uppercase',
            lineHeight: 1,
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            userSelect: 'none',
          }}
        >
          Recognition
        </div>

        <div className="al-shell al-learn-wrap" style={{ position: 'relative', maxWidth: 1100, margin: '0 auto', padding: '120px 32px 80px' }}>
          {learnRows.map((row, i) => (
            <button
              key={i}
              className="learn-row"
              onClick={() => navigate('sample')}
              style={{
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                borderTop: '1px solid rgba(37,40,43,0.16)',
                cursor: 'pointer',
                fontFamily: 'inherit',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 24,
                padding: '26px 4px',
              }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, { background: '#f7f7f7', duration: 0.18 })
                gsap.to(e.currentTarget.querySelector('.arrow-circle'), {
                  scale: 1.15,
                  duration: 0.22,
                })
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { background: 'transparent', duration: 0.2 })
                gsap.to(e.currentTarget.querySelector('.arrow-circle'), {
                  scale: 1,
                  duration: 0.22,
                })
              }}
            >
              <span style={{ flex: 1 }}>
                <span
                  style={{
                    display: 'block',
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: '#e60000',
                    marginBottom: 6,
                  }}
                >
                  {row.tag}
                </span>
                <span
                  className="al-learn-title"
                  style={{
                    display: 'block',
                    fontSize: 30,
                    fontWeight: 300,
                    lineHeight: 1.1,
                    letterSpacing: '-0.5px',
                  }}
                >
                  {row.title}
                </span>
              </span>
              <span
                className="arrow-circle"
                style={{
                  flexShrink: 0,
                  width: 38,
                  height: 38,
                  borderRadius: '9999px',
                  border: '1px solid rgba(37,40,43,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                }}
              >
                ›
              </span>
            </button>
          ))}
          <div style={{ borderBottom: '1px solid rgba(37,40,43,0.16)' }} />
        </div>
      </div>

      <CtaBand onGo={() => navigate('join')} />
    </div>
  )
}
