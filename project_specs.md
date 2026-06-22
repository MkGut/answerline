# Project Specs — Answerline Newsletter Website

## What the app does & who uses it
Marketing website for **Answerline**, a daily Quizbowl training email newsletter. Users are competitive quiz-bowl players who want to improve their buzzer speed by learning high-yield clue patterns. The site explains the product, shows a sample lesson, and drives signups.

## Tech Stack
- **Framework:** Next.js 14+ (App Router), TypeScript
- **Styling:** Tailwind CSS + inline design-token classes
- **Animations:** GSAP (ScrollTrigger, useGSAP hook from @gsap/react)
- **Font:** Archivo (Google Fonts via next/font/google)
- **Deployment:** Vercel

## Pages / Screens (single-page SPA behavior)
| Screen | Route logic | Description |
|--------|-------------|-------------|
| Home | `screen === 'home'` | Hero, today's answerline teaser, category cards, learn rows, CTA band |
| How it works | `screen === 'how'` | Dark header, 3-step cards, email anatomy, philosophy quote, CTA band |
| Sample lesson | `screen === 'sample'` | Dark header with "South Carolina", mental model, 8 clue cards, traps, CTA band |
| Join | `screen === 'join'` | Split layout: sticky info column + embedded signup iframe |

All screens share a sticky dark Nav and dark Footer.

## Data models
All data is static/hardcoded (no database). Content is derived from the design file.

## Third-party services
- Google Fonts (Archivo)
- Signup form embed: iframe pointing to ngrok URL (placeholder in design)

## GSAP Animations
- Nav: slide-down fade-in on mount
- Hero headline: staggered word/line reveal (clip-path + translateY)
- Hero subtitle + CTAs: fade-up with delay
- Teaser cards: fade-up on scroll
- Category cards: staggered fade-up on scroll (ScrollTrigger)
- Learn rows: stagger in from left with border reveal
- "Recognition" watermark: parallax scroll
- Step cards: stagger from below
- Anatomy cards: stagger in
- Clue cards: grid stagger reveal
- CTA band: scale-in from below
- Screen transitions: cross-fade on screen change
- Hover micro-interactions via GSAP on buttons

## File Structure
```
/app
  layout.tsx         — font, metadata, global styles
  page.tsx           — SPA screen state, layout shell
  globals.css        — base reset + Tailwind directives
/components
  Nav.tsx
  Footer.tsx
  CtaBand.tsx
  Logo.tsx
  Button.tsx
  AnswerOrb.tsx      — animated buzzer orb
  screens/
    HomeScreen.tsx
    HowScreen.tsx
    SampleScreen.tsx
    JoinScreen.tsx
```

## "Done" definition
- All 4 screens match the design
- All GSAP animations work without jank
- `npm run build` passes with zero errors
- Dev server runs cleanly at localhost:3000
- Responsive at 860px breakpoint (mobile stack)
