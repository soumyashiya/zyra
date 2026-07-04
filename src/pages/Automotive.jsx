import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '@fontsource-variable/geist'
import AutoFooter from './AutoFooter'
import { BLOGS } from './automotiveData'
import './Automotive.css'

/* ---------- auto-rotating coverflow image deck ---------- */
const DECK = [
  { id: 1, grad: 'sat-card--g1' },
  { id: 2, grad: 'sat-card--g2' },
  { id: 3, grad: 'sat-card--g3' },
  { id: 4, grad: 'sat-card--g4' },
  { id: 5, grad: 'sat-card--g5' },
  { id: 6, grad: 'sat-card--g6' },
]

function HeroDeck() {
  const [front, setFront] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setFront((f) => (f + 1) % DECK.length)
    }, 3600)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="sat-deck" aria-hidden="true">
      {DECK.map((c, i) => {
        const n = DECK.length
        let rel = (((i - front) % n) + n) % n
        if (rel > n / 2) rel -= n
        const abs = Math.abs(rel)
        const scale = abs === 0 ? 1 : abs === 1 ? 0.87 : 0.76
        return (
          <div
            key={c.id}
            className={`sat-card ${c.grad}`}
            data-pos={abs}
            style={{
              transform: `translate(-50%, -50%) translateX(${rel * 44}%) scale(${scale})`,
              zIndex: 50 - abs,
              opacity: abs <= 1 ? 1 : 0,
            }}
          />
        )
      })}
    </div>
  )
}

/* ---------- count-up stat counter ---------- */
function Counter({ to, pad = 0 }) {
  const ref = useRef(null)
  const [val, setVal] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    let raf
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        io.disconnect()
        const dur = 1500
        const t0 = performance.now()
        const tick = (t) => {
          const p = Math.min(1, (t - t0) / dur)
          const eased = 1 - Math.pow(1 - p, 3)
          setVal(Math.round(to * eased))
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [to])

  const text = pad ? String(val).padStart(pad, '0') : String(val)
  return (
    <span ref={ref}>
      {text}
      <i className="auto-stat__plus">+</i>
    </span>
  )
}

const STATS = [
  { to: 300, label: ['Wellness', 'guides'] },
  { to: 6, pad: 2, label: ['Years', 'of writing'] },
  { to: 45, label: ['Lifestyle', 'topics'] },
  { to: 60, label: ['Expert', 'contributors'] },
]

/* ---------- Classes — accordion with swapping image ---------- */
const CLASSES = [
  {
    id: 'healthy',
    name: 'Healthy Living',
    desc: 'Simple nutrition, movement, and sleep habits that keep your body energised every day.',
    g: 'auto-ph--c1',
  },
  {
    id: 'growth',
    name: 'Personal Development',
    desc: 'Practical routines for focus, learning, and steady personal growth that compound over time.',
    g: 'auto-ph--c2',
  },
  {
    id: 'home',
    name: 'Home Organization',
    desc: 'Declutter, simplify, and create calm, functional spaces you actually enjoy living in.',
    g: 'auto-ph--c3',
  },
  {
    id: 'productivity',
    name: 'Mindful Productivity',
    desc: 'Work smarter with gentle systems that protect your time, focus, and energy.',
    g: 'auto-ph--c4',
  },
  {
    id: 'balance',
    name: 'Life Balance',
    desc: 'Set boundaries and build rhythms that keep work, rest, and play in harmony.',
    g: 'auto-ph--c5',
  },
]

function ClassesSection() {
  /* -1 = no item open; the accordion stays closed until the user clicks. */
  const [active, setActive] = useState(-1)

  return (
    <section className="auto-classes" id="classes">
      <div className="auto-classes__inner">
        <div className="auto-classes__head">
          <h2 className="auto-classes__title" data-rev>
            Habits that bring <em>balance to life</em>
          </h2>
          <p className="auto-classes__sub" data-rev style={{ '--rev-d': '80ms' }}>
            Build a healthier routine, an organised home, and a calmer, more
            focused mind.
          </p>
        </div>

        <div className="auto-classes__body">
          <div className="auto-accordion" data-rev>
            {CLASSES.map((c, i) => (
              <button
                key={c.id}
                type="button"
                className={`auto-acc${i === active ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="auto-acc__name">{c.name}</span>
                <span className="auto-acc__panel">
                  <span className="auto-acc__desc">{c.desc}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="auto-classes__media" data-rev style={{ '--rev-d': '120ms' }}>
            {CLASSES.map((c, i) => (
              <div
                key={c.id}
                className={`auto-classes__img ${c.g}`}
                style={{ opacity: i === (active < 0 ? 0 : active) ? 1 : 0 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Blog — staggered cards revealed on scroll ---------- */
const BLOG_PREVIEW_COUNT = 3

function BlogSection() {
  const [showAll, setShowAll] = useState(false)
  const gridRef = useRef(null)
  const visibleBlogs = showAll ? BLOGS : BLOGS.slice(0, BLOG_PREVIEW_COUNT)
  const hasMore = BLOGS.length > BLOG_PREVIEW_COUNT

  /* Reveal the cards added on "Read more" — the page observer only tracks
     elements present at mount, so newly shown cards are revealed here. */
  useEffect(() => {
    if (!showAll || !gridRef.current) return
    const cards = gridRef.current.querySelectorAll('[data-rev]:not(.is-in)')
    const raf = requestAnimationFrame(() => {
      cards.forEach((el) => el.classList.add('is-in'))
    })
    return () => cancelAnimationFrame(raf)
  }, [showAll])

  return (
    <section className="auto-blog" id="blog">
      <div className="auto-blog__inner">
        <div className="auto-blog__head">
          <h2 className="auto-blog__title" data-rev>
            Lifestyle &amp; <em>wellness guides</em>
          </h2>
          <div className="auto-blog__headrow">
            <p className="auto-blog__sub" data-rev style={{ '--rev-d': '80ms' }}>
              Tips for healthy living, personal development, home organization,
              and lifestyle improvements - from wellness advice to productivity
              hacks.
            </p>
            {hasMore && !showAll && (
              <div data-rev style={{ '--rev-d': '140ms' }}>
                <button
                  type="button"
                  className="sat-btn sat-btn--dark"
                  onClick={() => setShowAll(true)}
                >
                  Read more guides
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="auto-blog__grid" ref={gridRef}>
          {visibleBlogs.map((b, i) => (
            <div
              className="auto-bcard-wrap"
              key={b.slug}
              data-rev
              style={{ '--rev-d': (i % BLOG_PREVIEW_COUNT) * 140 + 'ms' }}
            >
              <Link className="auto-bcard" to={`/automotive/blog/${b.slug}`}>
                <div className={`auto-bcard__media ${b.g}`} />
                <div className="auto-bcard__body">
                  <p className="auto-bcard__meta">
                    <span className="auto-bcard__cat">{b.cat}</span>
                    <span className="auto-bcard__dot">•</span>
                    <span>{b.date}</span>
                  </p>
                  <h3 className="auto-bcard__title">{b.title}</h3>
                  <p className="auto-bcard__excerpt">{b.excerpt}</p>
                  <span className="auto-bcard__link">Read blog</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Automotive — Sattvara-style page ---------- */
function Automotive() {
  const rootRef = useRef(null)

  /* Scroll reveal for [data-rev] elements within the page. */
  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined
    const els = root.querySelectorAll('[data-rev]')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'))
      return undefined
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="auto-page" ref={rootRef}>
      {/* ===== Hero ===== */}
      <section className="auto-hero">
        <div className="auto-hero__inner">
          <div className="auto-hero__text">
            <span className="auto-hero__eyebrow">The heart behind the practice</span>
            <h1 className="auto-hero__title">
              Lifestyle
              <br />
              &amp; <em>Wellness.</em>
            </h1>
            <p className="auto-hero__sub">
              Discover tips for healthy living, personal development, home
              organization, and lifestyle improvements. From wellness advice to
              productivity hacks and life balance strategies.
            </p>
            <div className="auto-hero__cta">
              <a href="#blog" className="sat-btn sat-btn--primary">
                Explore Wellness Tips
              </a>
            </div>
          </div>

          <div className="auto-hero__media">
            <HeroDeck />
          </div>
        </div>

        <div className="sat-quote">
          <span className="sat-quote__mark" aria-hidden="true">&rdquo;</span>
          <span className="sat-quote__avatar" aria-hidden="true" />
          <p className="sat-quote__text">
            These wellness tips reshaped my daily routine - I feel healthier,
            more organized, and balanced.
          </p>
          <span className="sat-quote__by">~ Maya, Reader</span>
        </div>
      </section>

      {/* ===== About ===== */}
      <section className="auto-about" id="about">
        <div className="auto-about__inner">
          <div className="auto-about__collage">
            <div className="ab-img ab-img--a auto-ph--g1" data-rev />
            <div className="ab-img ab-img--b auto-ph--g2" data-rev style={{ '--rev-d': '90ms' }} />
            <div className="ab-img ab-img--c auto-ph--g3" data-rev style={{ '--rev-d': '180ms' }} />
            <div className="ab-img ab-img--d auto-ph--g4" data-rev style={{ '--rev-d': '270ms' }} />
          </div>

          <div className="auto-about__text">
            <span className="auto-about__eyebrow" data-rev>
              Small habits, better days.
            </span>
            <h2 className="auto-about__title" data-rev style={{ '--rev-d': '80ms' }}>
              Live well and <em>with intention.</em>
            </h2>
            <p className="auto-about__copy" data-rev style={{ '--rev-d': '160ms' }}>
              We share practical tips for healthy living, personal growth, and
              home organization - simple, sustainable changes that make everyday
              life calmer, lighter, and more balanced.
            </p>
            <div className="auto-about__cta" data-rev style={{ '--rev-d': '240ms' }}>
              <a href="#blog" className="sat-btn sat-btn--dark">
                Browse Wellness Guides
              </a>
              <a href="#classes" className="sat-btn sat-btn--text">
                See healthy habits
              </a>
            </div>
          </div>
        </div>

        <div className="auto-stats" data-rev>
          {STATS.map((s, i) => (
            <div className="auto-stat" key={i}>
              <span className="auto-stat__num">
                <Counter to={s.to} pad={s.pad} />
              </span>
              <span className="auto-stat__label">
                {s.label[0]}
                <br />
                {s.label[1]}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Classes ===== */}
      <ClassesSection />

      {/* ===== Latest blog ===== */}
      <BlogSection />

      {/* ===== Footer ===== */}
      <AutoFooter />
    </div>
  )
}

export default Automotive
