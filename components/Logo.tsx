'use client'

interface LogoProps {
  tone?: 'default' | 'on-dark'
  size?: number
}

export default function Logo({ tone = 'default', size = 26 }: LogoProps) {
  const textColor = tone === 'on-dark' ? '#ffffff' : '#25282b'
  const dotColor = '#e60000'

  return (
    <span
      style={{ fontSize: size, lineHeight: 1 }}
      className="font-black tracking-tight uppercase select-none"
    >
      <span style={{ color: textColor }}>Answer</span>
      <span style={{ color: dotColor }}>line</span>
    </span>
  )
}
