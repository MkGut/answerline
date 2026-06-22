'use client'

import { useState, useRef, useCallback } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HomeScreen from '@/components/screens/HomeScreen'
import HowScreen from '@/components/screens/HowScreen'
import SampleScreen from '@/components/screens/SampleScreen'
import JoinScreen from '@/components/screens/JoinScreen'

gsap.registerPlugin(ScrollTrigger, useGSAP)

type Screen = 'home' | 'how' | 'sample' | 'join'

export default function Page() {
  const [screen, setScreen] = useState<Screen>('home')
  const contentRef = useRef<HTMLDivElement>(null)
  const isAnimating = useRef(false)

  const navigate = useCallback(
    (next: Screen) => {
      if (next === screen || isAnimating.current) return
      isAnimating.current = true

      // Kill all active scroll triggers before screen change
      ScrollTrigger.getAll().forEach((st) => st.kill())

      gsap.to(contentRef.current, {
        opacity: 0,
        y: -16,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          setScreen(next)
          window.scrollTo({ top: 0, behavior: 'auto' })
          // Refresh scroll triggers after mount
          setTimeout(() => {
            ScrollTrigger.refresh()
          }, 50)
          gsap.fromTo(
            contentRef.current,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
              ease: 'power3.out',
              onComplete: () => {
                isAnimating.current = false
              },
            }
          )
        },
      })
    },
    [screen]
  )

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Nav current={screen} navigate={navigate} />

      <div ref={contentRef} style={{ flex: 1 }}>
        {screen === 'home' && <HomeScreen navigate={navigate} />}
        {screen === 'how' && <HowScreen navigate={navigate} />}
        {screen === 'sample' && <SampleScreen navigate={navigate} />}
        {screen === 'join' && <JoinScreen />}
      </div>

      <Footer navigate={navigate} />
    </div>
  )
}
