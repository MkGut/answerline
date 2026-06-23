'use client'

import Logo from './Logo'

type Screen = 'home' | 'how' | 'sample' | 'join'

interface FooterProps {
  navigate: (s: Screen) => void
}

const links: { label: string; screen: Screen }[] = [
  { label: 'How it works', screen: 'how' },
  { label: 'Sample', screen: 'sample' },
  { label: 'Join', screen: 'join' },
]

export default function Footer({ navigate }: FooterProps) {
  return (
    <div
      style={{
        background: '#25282b',
        color: '#fff',
        borderTop: '1px solid rgba(255,255,255,0.14)',
      }}
    >
      <div
        className="al-shell"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '36px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 20,
        }}
      >
        <Logo tone="on-dark" size={22} />

        <div style={{ display: 'flex', gap: 28, fontSize: 14, color: '#bebebe' }}>
          {links.map(({ label, screen }) => (
            <button
              key={screen}
              onClick={() => navigate(screen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: 14,
                color: '#bebebe',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        <span
          style={{
            fontSize: 12,
            color: '#7e7e7e',
            textTransform: 'uppercase',
            letterSpacing: '0.57px',
          }}
        >
          © 2026 Answerline
        </span>
      </div>
    </div>
  )
}
