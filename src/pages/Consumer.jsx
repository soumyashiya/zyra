import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Lenis from 'lenis'
import heroVideo1 from '../assets/images/consumers/hero-bg1.mp4'
import heroVideo2 from '../assets/images/consumers/hero-bg2.mp4'
import section2Img from '../assets/images/consumers/section2-img.jpg'
import section4Img from '../assets/images/consumers/section4-bg-img.jpg'
import { GUIDES, PRESS } from './consumerData'
import './Consumer.css'

const SCENES = [
  { plain: 'We ', em: 'listen', tail: ' to real parents, in real, everyday family life.' },
  { plain: 'We ', em: 'test', tail: ' every tip with families before we recommend it.' },
  { plain: 'We ', em: 'share', tail: ' only the guidance that helps families truly thrive.' },
]

const SECTIONS = [
  { id: 'maison-hero', label: 'Cover', num: '01' },
  { id: 'maison-about', label: 'Philosophy', num: '02' },
  { id: 'maison-guides', label: 'The Edit', num: '03' },
  { id: 'maison-scene', label: 'Method', num: '04' },
  { id: 'maison-press', label: 'Press', num: '05' },
  { id: 'maison-contact', label: 'Correspondence', num: '06' },
]

function Consumer() {
  const pageRef = useRef(null)
  const cursorRef = useRef(null)
  const heroImageRef = useRef(null)
  const trackRef = useRef(null)
  const hscrollRef = useRef(null)
  const hscrollProgressRef = useRef(null)
  const hscrollCountRef = useRef(null)
  const sceneRef = useRef(null)
  const sceneStageRefs = useRef([])
  const sceneProgressRef = useRef(null)
  const sceneCounterRef = useRef(null)
  const turbRef = useRef(null)
  const aboutCopyRef = useRef(null)

  const heroVideo1Ref = useRef(null)
  const heroVideo2Ref = useRef(null)

  const [activeSection, setActiveSection] = useState('maison-hero')
  const [activeHeroVideo, setActiveHeroVideo] = useState(1)

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  // Custom cursor
  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x, ty = y
    let rafId

    const onMove = (e) => { x = e.clientX; y = e.clientY }
    const tick = () => {
      tx += (x - tx) * 0.22
      ty += (y - ty) * 0.22
      cursor.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    window.addEventListener('mousemove', onMove)

    const hoverables = document.querySelectorAll('.maison-page [data-hover], .maison-page a, .maison-page button')
    const onEnter = () => cursor.classList.add('is-hover')
    const onLeave = () => cursor.classList.remove('is-hover')
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMove)
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  // Hero parallax on mouse + wave filter animation
  useEffect(() => {
    const heroImage = heroImageRef.current
    if (!heroImage) return
    let mx = 0, my = 0
    const onMove = (e) => {
      const r = heroImage.getBoundingClientRect()
      if (r.bottom < 0 || r.top > window.innerHeight) return
      mx = ((e.clientX / window.innerWidth) - 0.5) * 18
      my = ((e.clientY / window.innerHeight) - 0.5) * 18
      heroImage.style.transform = `translate3d(${mx}px, ${my}px, 0) scale(1.04)`
    }
    window.addEventListener('mousemove', onMove)

    let rafId
    let t = 0
    const animate = () => {
      t += 0.005
      const turb = turbRef.current
      if (turb) {
        const fx = 0.012 + Math.sin(t) * 0.004
        const fy = 0.018 + Math.cos(t * 0.8) * 0.005
        turb.setAttribute('baseFrequency', `${fx} ${fy}`)
      }
      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  // Reveal observers (fade-up, reveal-line)
  useEffect(() => {
    const page = pageRef.current
    if (!page) return
    const els = page.querySelectorAll('.fade-up, .reveal-line')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Reveal-words progressive lighting on scroll
  useEffect(() => {
    const copy = aboutCopyRef.current
    if (!copy) return
    const text = copy.textContent
    copy.innerHTML = ''
    const segments = text.split(/(\s+)/)
    const wordEls = []
    segments.forEach((seg) => {
      if (/^\s+$/.test(seg)) {
        copy.appendChild(document.createTextNode(' '))
      } else if (seg) {
        const span = document.createElement('span')
        span.className = 'word'
        span.textContent = seg
        copy.appendChild(span)
        wordEls.push(span)
      }
    })
    // italic em accents on "parenting" and the last occurrence of "family"
    let lastFamilyIdx = -1
    wordEls.forEach((w, i) => {
      if (w.textContent === 'family') lastFamilyIdx = i
    })
    wordEls.forEach((w, i) => {
      if (w.textContent === 'parenting' || i === lastFamilyIdx) {
        const em = document.createElement('em')
        em.textContent = w.textContent
        w.textContent = ''
        w.appendChild(em)
      }
    })

    const onScroll = () => {
      const rect = copy.getBoundingClientRect()
      const vh = window.innerHeight
      const start = vh * 0.85
      const end = vh * 0.25
      const total = wordEls.length
      const progress = (start - rect.top) / (start - end)
      const lit = Math.max(0, Math.min(total, Math.floor(progress * total)))
      wordEls.forEach((w, i) => {
        if (i < lit) w.classList.add('is-lit')
        else w.classList.remove('is-lit')
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section observer
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { threshold: [0.35], rootMargin: '-20% 0px -50% 0px' }
    )
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  // Horizontal scroll + scene scroll
  useEffect(() => {
    const onScroll = () => {
      // Hscroll horizontal translate
      const hscroll = hscrollRef.current
      const track = trackRef.current
      if (hscroll && track) {
        const rect = hscroll.getBoundingClientRect()
        const total = hscroll.offsetHeight - window.innerHeight
        const passed = Math.max(0, Math.min(total, -rect.top))
        const progress = total > 0 ? passed / total : 0
        const max = track.scrollWidth - track.clientWidth
        track.style.transform = `translate3d(${-progress * max}px, 0, 0)`
        if (hscrollProgressRef.current) {
          hscrollProgressRef.current.style.width = `${progress * 100}%`
        }
        if (hscrollCountRef.current) {
          const idx = Math.min(GUIDES.length, Math.floor(progress * GUIDES.length) + 1)
          hscrollCountRef.current.textContent = String(idx).padStart(2, '0')
        }
      }

      // Scene stages
      const scene = sceneRef.current
      if (scene) {
        const rect = scene.getBoundingClientRect()
        const total = scene.offsetHeight - window.innerHeight
        const passed = Math.max(0, Math.min(total, -rect.top))
        const progress = total > 0 ? passed / total : 0
        const stageIdx = Math.min(SCENES.length - 1, Math.floor(progress * SCENES.length))
        sceneStageRefs.current.forEach((s, i) => {
          if (!s) return
          if (i === stageIdx) s.classList.add('is-on')
          else s.classList.remove('is-on')
        })
        if (progress > 0.04) scene.classList.add('is-open')
        else scene.classList.remove('is-open')
        if (sceneProgressRef.current) {
          sceneProgressRef.current.style.width = `${progress * 100}%`
        }
        if (sceneCounterRef.current) {
          sceneCounterRef.current.textContent = `${String(stageIdx + 1).padStart(2, '0')} / 0${SCENES.length}`
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const goTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div ref={pageRef} className="maison-page is-loaded">
      <div className="maison-cursor" ref={cursorRef} aria-hidden="true" />

      <nav className="dotnav" aria-label="Section navigation">
        {SECTIONS.map(({ id, label, num }) => (
          <button
            key={id}
            type="button"
            className={`dotnav__item${activeSection === id ? ' is-active' : ''}`}
            data-hover=""
            onClick={() => goTo(id)}
          >
            <span className="dotnav__label">{label}</span>
            <span className="dotnav__num">{num}</span>
            <span className="dotnav__dot" />
          </button>
        ))}
      </nav>

      {/* 01 — HERO */}
      <section id="maison-hero" className="hero">
        <svg className="hero__defs" aria-hidden="true">
          <defs>
            <filter id="maison-wave-filter" x="-5%" y="-5%" width="110%" height="110%">
              <feTurbulence ref={turbRef} type="fractalNoise" baseFrequency="0.012 0.018" numOctaves="2" seed="2" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
        </svg>

        <div className="hero__cover">
          <div className="hero__image" ref={heroImageRef}>
            <video
              ref={heroVideo1Ref}
              className={`hero__video${activeHeroVideo === 1 ? ' is-active' : ''}`}
              src={heroVideo1}
              muted
              playsInline
              autoPlay
              preload="auto"
              onEnded={() => {
                const v2 = heroVideo2Ref.current
                if (v2) { v2.currentTime = 0; v2.play().catch(() => {}) }
                setActiveHeroVideo(2)
              }}
            />
            <video
              ref={heroVideo2Ref}
              className={`hero__video${activeHeroVideo === 2 ? ' is-active' : ''}`}
              src={heroVideo2}
              muted
              playsInline
              preload="auto"
              onEnded={() => {
                const v1 = heroVideo1Ref.current
                if (v1) { v1.currentTime = 0; v1.play().catch(() => {}) }
                setActiveHeroVideo(1)
              }}
            />
          </div>
        </div>

        <div className="hero__cats">
          <span>Parenting</span>
          <span className="dot-rule" />
          <span>Kids &amp; Babies</span>
          <span className="dot-rule" />
          <span>Family Life</span>
        </div>

        <h1 className="hero__mark"><span className="word">Family</span> <span className="word">Parenting</span></h1>

        <div className="hero__meta-bl">
          <em>Vol. XIV</em>
          <span>Issue Nº 14 — Edited in Lisbon</span>
        </div>

        <a href="#maison-guides" className="hero__cta" data-hover="" onClick={(e) => { e.preventDefault(); goTo('maison-guides') }}>
          <span>Read the edit</span>
          <span className="hero__cta__plus">+</span>
        </a>
      </section>

      {/* 02 — ABOUT / PHILOSOPHY */}
      <section id="maison-about" className="about">
        <div className="about__visual">
          <div className="parallax-img">
            <img src={section2Img} alt="Editor's portrait" className="about__img" />
          </div>
        </div>

        <div>
          <div className="section-num fade-up">02 — Family Living</div>
          <p className="about__copy reveal-words" ref={aboutCopyRef}>
            Essential guidance for modern families. Explore parenting strategies, family activities, child development, household management, and building strong family relationships through all life stages.
          </p>

          <div className="about__caption">
            <div className="fade-up">
              <h4>Parenting</h4>
              <p>Practical parenting strategies and child-development guidance for every age and every stage of growing up.</p>
            </div>
            <div className="fade-up delay-1">
              <h4>Family Life</h4>
              <p>Ideas for family activities, household management, and routines that build strong, lasting relationships at home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — HORIZONTAL SCROLL EDIT */}
      <section id="maison-guides" className="hscroll" ref={hscrollRef}>
        <div className="hscroll__pin">
          <div className="hscroll__head">
            <h2 className="hscroll__title reveal-line">
              <span className="reveal-line__inner">The <em>Family</em> Edit</span>
            </h2>
            <div className="hscroll__count">
              <span ref={hscrollCountRef}>01</span> / 06<br />
              <span style={{ color: 'var(--ink-3)' }}>Featured guides</span>
            </div>
          </div>
          <div className="hscroll__progress"><span ref={hscrollProgressRef} /></div>

          <div className="hscroll__track" ref={trackRef}>
            {GUIDES.map((g, i) => (
              <article key={i} className="guide" data-hover="">
                <div className="guide__media">
                  <div className="parallax-img">
                    <img src={g.media.img} alt={g.media.label} className="guide__img" />
                  </div>
                </div>
                <div className="guide__row">
                  <span>{g.tag}</span>
                  <span className="acc">{g.count}</span>
                </div>
                <h3 className="guide__name">
                  {g.title[0]}
                  <em>{g.title[1]}</em>
                  {g.title[2]}
                </h3>
                <p className="guide__desc">{g.desc}</p>
                <span className="guide__cta">{g.cta}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — PINNED METHOD SCENE */}
      <section id="maison-scene" className="scene" ref={sceneRef}>
        <div className="scene__pin">
          <div className="scene__bg"><img src={section4Img} alt="Field study" className="scene__img" /></div>
          <div className="scene__overlay" />

          <div className="scene__content">
            <div className="scene__eyebrow">04 — Our Method</div>

            <div className="scene__stages">
              {SCENES.map((s, i) => (
                <p
                  key={i}
                  ref={(el) => (sceneStageRefs.current[i] = el)}
                  className={`scene__stage${i === 0 ? ' is-on' : ''}`}
                >
                  {s.plain}<em>{s.em}</em>{s.tail}
                </p>
              ))}
            </div>

            <div className="scene__footer">
              <span ref={sceneCounterRef}>01 / 03</span>
              <div className="scene__progress"><span ref={sceneProgressRef} /></div>
              <span>Maison Courant · Method</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          <span className="marquee__item">Family first</span>
          <span className="marquee__item">Tested by parents</span>
          <span className="marquee__item">Guidance you can trust</span>
          <span className="marquee__item">Family first</span>
          <span className="marquee__item">Tested by parents</span>
          <span className="marquee__item">Guidance you can trust</span>
        </div>
      </div>

      {/* 05 — PRESS */}
      <section id="maison-press" className="press">
        <div className="press__head">
          <h2 className="press__title reveal-line">
            <span className="reveal-line__inner">Parenting <em>&amp;</em> Family Guides</span>
          </h2>
        </div>

        <ul className="press__list">
          {PRESS.map((p) => (
            <li key={p.slug}>
              <Link
                className="press__row fade-up"
                data-hover=""
                to={`/consumer/press/${p.slug}`}
              >
                <span className="press__year">{p.year}</span>
                <span className="press__pub">{p.pub}</span>
                <span className="press__headline">
                  {p.headlineParts[0]}<em>{p.headlineParts[1]}</em>{p.headlineParts[2]}
                </span>
                <span className="press__cat">{p.cat}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* 06 — CONTACT / FOOTER */}
      <section id="maison-contact" className="contact">
        <div className="contact__inner">
          <div className="contact__eyebrow">06 — Get in Touch</div>

          <h2 className="contact__cta">
            <span className="reveal-line"><span className="reveal-line__inner">Talk to our</span></span><br />
            <span className="reveal-line"><span className="reveal-line__inner"><em>family team,</em> <a href="mailto:hello@maisoncourant.co">hello@…</a></span></span>
          </h2>

          <div className="contact__grid">
            <div className="contact__col">
              <h5>The Family Letter</h5>
              <p style={{ color: 'oklch(0.92 0.013 78 / 0.85)', fontSize: 15, lineHeight: 1.7, margin: '0 0 4px' }}>
                A monthly dispatch — parenting tips, family activities, and trusted picks. 24,000 families subscribed.
              </p>
              <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="your@address.com" aria-label="Email address" />
                <button type="submit">Subscribe →</button>
              </form>
            </div>

            <div className="contact__col">
              <h5>Sections</h5>
              <ul>
                <li><a href="#maison-about" data-hover="" onClick={(e) => { e.preventDefault(); goTo('maison-about') }}>Family Living</a></li>
                <li><a href="#maison-guides" data-hover="" onClick={(e) => { e.preventDefault(); goTo('maison-guides') }}>The Family Edit</a></li>
                <li><a href="#maison-scene" data-hover="" onClick={(e) => { e.preventDefault(); goTo('maison-scene') }}>Our Method</a></li>
                <li><a href="#maison-press" data-hover="" onClick={(e) => { e.preventDefault(); goTo('maison-press') }}>Press</a></li>
              </ul>
            </div>

            <div className="contact__col">
              <h5>Resources</h5>
              <ul>
                <li><a href="#" data-hover="">About our team</a></li>
                <li><a href="#" data-hover="">Parenting library</a></li>
                <li><a href="#" data-hover="">Activity guides</a></li>
                <li><a href="#" data-hover="">Contributors</a></li>
              </ul>
            </div>

            <div className="contact__col">
              <h5>Elsewhere</h5>
              <ul>
                <li><a href="#" data-hover="">Instagram →</a></li>
                <li><a href="#" data-hover="">Are.na →</a></li>
                <li><a href="#" data-hover="">Spotify →</a></li>
                <li><a href="#" data-hover="">RSS →</a></li>
              </ul>
            </div>
          </div>

          <div className="contact__base">
            <span>© MMXXVI · Maison Courant Editorial Ltd.</span>
            <span>Rua das Janelas Verdes 12, 1200-690 Lisboa</span>
            <span>Set in Instrument Serif &amp; Manrope</span>
            <span>Colophon &amp; legal →</span>
          </div>
        </div>

        <span className="contact__sig" aria-hidden="true">MC.</span>
      </section>
    </div>
  )
}

export default Consumer
