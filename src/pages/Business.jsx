import { useEffect, useRef, useState } from 'react'
import {
  Check,
  ArrowUpRight,
  Search,
  Puzzle,
  Rocket,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react'
import heroBg from '../assets/images/bussiness/hero-bg.avif'
import excellence1 from '../assets/images/bussiness/excellence-1.avif'
import excellence2 from '../assets/images/bussiness/excellence-2.avif'
import excellence3 from '../assets/images/bussiness/excellence-3.avif'
import excellence4 from '../assets/images/bussiness/excellence-4.avif'
import partnership1 from '../assets/images/bussiness/partnership-1.avif'
import partnership2 from '../assets/images/bussiness/partnership-2.avif'
import partnership3 from '../assets/images/bussiness/partnership-3.avif'
import case1 from '../assets/images/bussiness/case-1.avif'
import case2 from '../assets/images/bussiness/case-2.avif'
import case3 from '../assets/images/bussiness/case-3.avif'
import case4 from '../assets/images/bussiness/case-4.avif'
import case5 from '../assets/images/bussiness/case-5.avif'
import case6 from '../assets/images/bussiness/case-6.avif'
import ctaImage from '../assets/images/bussiness/cta-image.avif'
import './Page.css'
import './Business.css'

const articles = [
  {
    tag: 'Markets',
    title: 'Soft landing or stalled engine? Q1 numbers tell two stories',
    excerpt:
      'Headline GDP looks healthy, but a closer read of the sector data shows growing imbalances.',
  },
  {
    tag: 'Strategy',
    title: 'How four mid-cap firms are quietly outpacing the giants',
    excerpt:
      'Focused product lines and disciplined hiring are beating scale in some unexpected categories.',
  },
  {
    tag: 'Leadership',
    title: 'The CEO playbook for navigating a fragmented supply chain',
    excerpt:
      'Three operators share what changed after the last shock — and what they refuse to give up.',
  },
  {
    tag: 'Finance',
    title: 'Private credit keeps growing. Regulators are starting to notice.',
    excerpt:
      'New disclosure rules are coming. Here is what that will mean for borrowers and lenders.',
  },
  {
    tag: 'Workplace',
    title: 'Hybrid work, three years on: what actually stuck',
    excerpt:
      'A look at the policies that survived contact with reality — and the ones quietly rolled back.',
  },
  {
    tag: 'Trends',
    title: 'The unbundling of professional services',
    excerpt:
      'Boutique advisors are pulling work away from the incumbents. The big firms are watching closely.',
  },
]

const HERO_STATS = [
  { value: '98%', label: 'Client satisfaction' },
  { value: '$50M+', label: 'Revenue generated' },
  { value: '300+', label: 'Projects delivered' },
]

const EXCELLENCE = [
  {
    num: '01',
    title: 'Strategy Consulting',
    desc: 'Guiding individuals and businesses with smart financial planning, investment advice, and long-term wealth strategies.',
    points: [
      'Personalized Financial Planning',
      'Investment & Portfolio Guidance',
      'Risk Management & Wealth Protection',
    ],
    image: excellence1,
  },
  {
    num: '02',
    title: 'Market Insights and Analysis',
    desc: 'Turning raw market data into clear direction — competitor benchmarks, demand signals, and the trends shaping your category.',
    points: [
      'Competitor & Industry Benchmarking',
      'Demand Forecasting & Sizing',
      'Opportunity & Risk Mapping',
    ],
    image: excellence2,
  },
  {
    num: '03',
    title: 'Wealth & Finance Advisory',
    desc: 'Building durable financial foundations through disciplined capital planning, cash-flow strategy, and measured growth.',
    points: [
      'Capital Structure & Funding',
      'Cash-Flow & Margin Strategy',
      'Long-Term Wealth Protection',
    ],
    image: excellence3,
  },
  {
    num: '04',
    title: 'Digital Transformation',
    desc: 'Modernizing operations with the right systems, automation, and data so your teams move faster with far less friction.',
    points: [
      'Process Automation & Tooling',
      'Data & Analytics Enablement',
      'Change Management & Adoption',
    ],
    image: excellence4,
  },
]

const PROCESS = [
  {
    num: '01',
    icon: Search,
    title: 'Discover & Diagnose',
    desc: 'We start by understanding your business, identifying pain points, and analyzing what truly drives performance.',
  },
  {
    num: '02',
    icon: Puzzle,
    title: 'Strategize & Plan',
    desc: 'We develop tailored, data-driven strategies designed to solve challenges and align every team behind one plan.',
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Execute & Optimize',
    desc: 'We work alongside your team to implement solutions, monitor progress, and refine until results compound.',
  },
]

const PARTNERSHIP = [
  {
    tab: 'Deep Collaboration',
    overlay: 'Know What’s Possible',
    text: 'We work as an extension of your team — immersing ourselves in your goals, challenges, and vision to ensure aligned outcomes. We believe great results come from working closely together.',
    image: partnership1,
  },
  {
    tab: 'Expertise',
    overlay: 'Discover What’s Next',
    text: 'Our approach is built on trust, innovation, and measurable results — designed to help you achieve durable, long-term success.',
    image: partnership2,
  },
  {
    tab: 'Tailored Solutions',
    overlay: 'Building Smarter Together',
    text: 'We collaborate closely with your team to craft meaningful strategies, ensuring every solution aligns with your unique business objectives.',
    image: partnership3,
  },
]

const CASES = [
  {
    tag: 'Turnaround',
    title: 'Revive & Rise',
    text: 'We step in to assess what’s holding you back, reshape your strategy, and breathe new life into stalled operations.',
    image: case1,
  },
  {
    tag: 'Scale',
    title: 'Scaling Made Simple',
    text: 'We simplify the scaling process — keeping what works, removing what doesn’t, and building systems that grow with you.',
    image: case2,
  },
  {
    tag: 'Growth',
    title: 'Fast-Track Growth',
    text: 'When time is critical and growth is essential, our focused strategies help you accelerate progress without losing control.',
    image: case3,
  },
  {
    tag: 'Resilience',
    title: 'Future-Ready',
    text: 'We help organizations future-proof their operations with adaptable strategies and smart, well-chosen technologies.',
    image: case4,
  },
  {
    tag: 'Execution',
    title: 'Real Results, Not Just Advice',
    text: 'We go beyond advice — our strategies are implemented with precision and measured against the outcomes that matter.',
    image: case5,
  },
  {
    tag: 'Partnership',
    title: 'Partnerships That Drive Change',
    text: 'Every success story begins with deep collaboration. We work side-by-side with clients to turn challenges into momentum.',
    image: case6,
  },
]

const CTA_POINTS = [
  'Schedule a Free Consultation',
  'Discover Custom Solutions',
  'Start Building Your Competitive Advantage',
]

const FOOTER_COLS = [
  {
    title: 'Explore',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Our Process', href: '#process' },
      { label: 'Partnership', href: '#partnership' },
      { label: 'Case Studies', href: '#cases' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Insights', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Contact', href: '#contact' },
      { label: 'Changelog', href: '#' },
      { label: 'Style Guide', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
  },
]

const FOOTER_SOCIAL = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram']

/* Toggle to true to show the legacy Business article grid again. */
const SHOW_CONTENT = false

function Business() {
  const [loaded, setLoaded] = useState(false)
  const [activeExc, setActiveExc] = useState(0)
  const [activePart, setActivePart] = useState(0)
  const pageRef = useRef(null)
  const casesRef = useRef(null)

  const scrollCases = (dir) => {
    const el = casesRef.current
    if (!el) return
    const card = el.querySelector('.biz-case')
    const amount = card ? card.offsetWidth + 24 : 360
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  // trigger the staggered hero reveal once mounted
  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(id)
  }, [])

  // scroll-reveal for .fade-up elements
  useEffect(() => {
    const page = pageRef.current
    if (!page) return
    const els = page.querySelectorAll('.fade-up')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div ref={pageRef} className={`biz-page${loaded ? ' is-loaded' : ''}`}>
      {/* HERO — Optimo layout, Maison Courant design system */}
      <section className="biz-hero">
        <div className="biz-hero__bg">
          <img src={heroBg} alt="" aria-hidden="true" />
        </div>
        <div className="biz-hero__overlay" />

        <div className="biz-hero__meta">
          <em>Est. 2016</em>
          <span>Strategic Consulting — Worldwide</span>
        </div>

        <div className="biz-hero__inner">
          <p className="biz-hero__eyebrow">
            <span>Strategy</span>
            <span className="biz-hero__dot" aria-hidden="true" />
            <span>Markets</span>
            <span className="biz-hero__dot" aria-hidden="true" />
            <span>Leadership</span>
          </p>

          <h1 className="biz-hero__title">
            Navigate Business with <em>Confidence</em>
          </h1>

          <p className="biz-hero__lead">
            Expert strategic consulting to drive sustainable growth, operational
            innovation, and lasting business transformation — across industries
            and markets.
          </p>

          <div className="biz-hero__actions">
            <a className="biz-hero__cta" href="#contact" data-hover="">
              <span>Book a Free Call</span>
              <span className="biz-hero__cta-plus" aria-hidden="true">
                +
              </span>
            </a>
            <a className="biz-hero__link" href="#services" data-hover="">
              Explore our services →
            </a>
          </div>

          <div className="biz-hero__stats">
            {HERO_STATS.map((s) => (
              <div key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXCELLENCE — Optimo services accordion, Maison Courant design system */}
      <section className="biz-exc" id="services">
        <div className="biz-exc__inner">
          <div className="biz-exc__top fade-up">
            <h2 className="biz-exc__title">
              Driving Growth Through Strategic <em>Excellence</em>
            </h2>
            <a className="biz-exc__btn" href="#contact" data-hover="">
              <span>Contact Us</span>
              <span className="biz-exc__btn-arrow" aria-hidden="true">
                <ArrowUpRight size={16} strokeWidth={2.2} />
              </span>
            </a>
          </div>

          <div className="biz-exc__body fade-up">
            <div className="biz-exc__list">
              {EXCELLENCE.map((it, i) => {
                const open = activeExc === i
                return (
                  <div
                    key={it.num}
                    className={`biz-exc__item${open ? ' is-open' : ''}`}
                  >
                    <button
                      type="button"
                      className="biz-exc__head"
                      aria-expanded={open}
                      onClick={() => setActiveExc(i)}
                    >
                      <span className="biz-exc__num">[{it.num}]</span>
                      <span className="biz-exc__name">{it.title}</span>
                    </button>
                    <div className="biz-exc__panel">
                      <div className="biz-exc__panel-inner">
                        <div className="biz-exc__panel-pad">
                          <p className="biz-exc__desc">{it.desc}</p>
                          <ul className="biz-exc__points">
                            {it.points.map((p) => (
                              <li key={p}>
                                <span
                                  className="biz-exc__check"
                                  aria-hidden="true"
                                >
                                  <Check size={13} strokeWidth={3} />
                                </span>
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="biz-exc__media">
              {EXCELLENCE.map((it, i) => (
                <img
                  key={it.num}
                  src={it.image}
                  alt={it.title}
                  className={`biz-exc__img${activeExc === i ? ' is-active' : ''}`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROVEN PROCESS — Optimo staircase cards, Maison Courant design system */}
      <section className="biz-proc" id="process">
        <div className="biz-proc__inner">
          <h2 className="biz-proc__title fade-up">
            Our Proven Process to Drive Your <em>Success</em>
          </h2>
          <div className="biz-proc__grid">
            {PROCESS.map((p, i) => {
              const Icon = p.icon
              return (
                <article
                  key={p.num}
                  className={`biz-proc__card biz-proc__card--${i + 1} fade-up delay-${i + 1}`}
                >
                  <div className="biz-proc__card-top">
                    <span className="biz-proc__icon" aria-hidden="true">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                    <span className="biz-proc__num">[{p.num}]</span>
                  </div>
                  <div className="biz-proc__card-body">
                    <h3 className="biz-proc__name">{p.title}</h3>
                    <p className="biz-proc__desc">{p.desc}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP — Optimo tabbed value section, Maison Courant design system */}
      <section className="biz-part" id="partnership">
        <div className="biz-part__inner">
          <div className="biz-part__media fade-up">
            {PARTNERSHIP.map((p, i) => (
              <div
                key={p.tab}
                className={`biz-part__slide${activePart === i ? ' is-active' : ''}`}
              >
                <img src={p.image} alt={p.tab} loading="lazy" />
                <div className="biz-part__caption">
                  <h3 className="biz-part__overlay">{p.overlay}</h3>
                  <a className="biz-part__btn" href="#contact" data-hover="">
                    <span>Get in Touch</span>
                    <span className="biz-part__btn-arrow" aria-hidden="true">
                      <ArrowUpRight size={16} strokeWidth={2.2} />
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="biz-part__content">
            <h2 className="biz-part__title fade-up">
              The Value Behind Our <em>Partnership</em>
            </h2>
            <p className="biz-part__lead fade-up">
              Our partnership goes beyond delivering solutions — it’s about
              building trust and aligning fully with your goals. We become your
              strategic partner: tailored solutions, expert insight, and
              measurable results.
            </p>

            <div className="biz-part__tabs fade-up" role="tablist">
              {PARTNERSHIP.map((p, i) => (
                <button
                  key={p.tab}
                  type="button"
                  role="tab"
                  aria-selected={activePart === i}
                  className={`biz-part__tab${activePart === i ? ' is-active' : ''}`}
                  onClick={() => setActivePart(i)}
                >
                  <span className="biz-part__dot" aria-hidden="true" />
                  {p.tab}
                </button>
              ))}
            </div>

            <div className="biz-part__panel fade-up">
              <p key={activePart}>{PARTNERSHIP[activePart].text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES — Optimo "Grow Smarter" card carousel, Maison design system */}
      <section className="biz-cases" id="cases">
        <div className="biz-cases__inner">
          <div className="biz-cases__head fade-up">
            <h2 className="biz-cases__title">
              How We Helped Clients Grow <em>Smarter</em>
            </h2>
            <div className="biz-cases__arrows">
              <button
                type="button"
                className="biz-cases__arrow"
                aria-label="Previous case studies"
                onClick={() => scrollCases(-1)}
              >
                <ArrowLeft size={18} strokeWidth={2} />
              </button>
              <button
                type="button"
                className="biz-cases__arrow"
                aria-label="Next case studies"
                onClick={() => scrollCases(1)}
              >
                <ArrowRight size={18} strokeWidth={2} />
              </button>
            </div>
          </div>

          <div className="biz-cases__track fade-up" ref={casesRef}>
            {CASES.map((c) => (
              <article className="biz-case" key={c.title} tabIndex={0}>
                <div className="biz-case__media">
                  <img src={c.image} alt={c.title} loading="lazy" />
                </div>
                <div className="biz-case__panel">
                  <span className="biz-case__tag">{c.tag}</span>
                  <h3 className="biz-case__name">{c.title}</h3>
                  <div className="biz-case__more">
                    <div className="biz-case__more-inner">
                      <p className="biz-case__text">{c.text}</p>
                      <a className="biz-case__link" href="#contact" data-hover="">
                        Read More
                        <ArrowUpRight size={14} strokeWidth={2.2} />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Optimo "Get Started" block, Maison Courant design system */}
      <section className="biz-cta" id="contact">
        <div className="biz-cta__inner">
          <div className="biz-cta__panel fade-up">
            <div className="biz-cta__left">
              <div className="biz-cta__top">
                <span className="biz-cta__eyebrow">[ CTA ]</span>
                <h2 className="biz-cta__title">
                  Work with Experts to Grow Faster &amp; Run <em>Smarter</em>
                </h2>
                <a className="biz-cta__btn" href="#contact" data-hover="">
                  <span>Get Started</span>
                  <span className="biz-cta__btn-arrow" aria-hidden="true">
                    <ArrowUpRight size={16} strokeWidth={2.2} />
                  </span>
                </a>
              </div>
              <ul className="biz-cta__points">
                {CTA_POINTS.map((p) => (
                  <li key={p}>
                    <span className="biz-cta__check" aria-hidden="true">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="biz-cta__media">
              <img src={ctaImage} alt="Consultants working with a client" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER — Optimo footer-v1, Maison Courant design system */}
      <footer className="biz-footer">
        <div className="biz-footer__inner">
          <div className="biz-footer__top fade-up">
            <div className="biz-footer__cols">
              {FOOTER_COLS.map((col) => (
                <div className="biz-footer__col" key={col.title}>
                  <h4>{col.title}</h4>
                  <ul>
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <a href={l.href} data-hover="">
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="biz-footer__contact fade-up">
            <div className="biz-footer__info">
              <span>Email</span>
              <a href="mailto:hello@pulse.co">hello@pulse.co</a>
            </div>
            <div className="biz-footer__info">
              <span>Visit Us</span>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noreferrer"
              >
                Worldwide
              </a>
            </div>
            <div className="biz-footer__info">
              <span>Call us Now</span>
              <a href="tel:+97141234567">+971 4 123 4567</a>
            </div>
          </div>

          <div className="biz-footer__bar fade-up">
            <div className="biz-footer__bar-top">
              <span className="biz-footer__brand">Pulse</span>
              <div className="biz-footer__legal">
                <a href="#" data-hover="">Privacy Policy</a>
                <span className="biz-footer__dot" aria-hidden="true" />
                <a href="#" data-hover="">Changelog</a>
                <span className="biz-footer__dot" aria-hidden="true" />
                <a href="#" data-hover="">License</a>
              </div>
            </div>
            <div className="biz-footer__bar-bottom">
              <div className="biz-footer__social">
                {FOOTER_SOCIAL.map((s) => (
                  <a
                    key={s}
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    data-hover=""
                  >
                    {s}
                  </a>
                ))}
              </div>
              <span className="biz-footer__copy">
                © 2026 Pulse. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>

      {SHOW_CONTENT && (
        <div className="page__inner">
          <h1 className="page__title">Business</h1>
          <p className="page__intro">
            Strategy, markets, and the people running them. Reporting on what
            drives the bottom line and what bends the curve of the broader
            economy.
          </p>
          <div className="page__grid">
            {articles.map((a, i) => (
              <article key={i} className="article-card">
                <span className="article-card__tag">{a.tag}</span>
                <h3 className="article-card__title">{a.title}</h3>
                <p className="article-card__excerpt">{a.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Business
