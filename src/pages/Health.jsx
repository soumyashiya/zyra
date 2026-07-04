import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/cart-context'
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Star,
  Pill,
  Sparkles,
  Dumbbell,
  Droplet,
  Flower2,
  HeartPulse,
  Moon,
  Droplets,
  ShieldCheck,
} from 'lucide-react'
import heroBg from '../assets/images/health/hero-bg.png'
import discover1 from '../assets/images/health/alluvi-product3.png'
import discover3 from '../assets/images/health/alluvi-product2.png'
import wellnessImg from '../assets/images/health/product1.png'
import catSupplements from '../assets/images/health/alluvi-product4.png'
import catOils from '../assets/images/health/alluvi-product5.png'
import catPowders from '../assets/images/health/alluvi-product6.png'
import product1 from '../assets/images/health/alluvi-product10.png'
import product2 from '../assets/images/health/alluvi-product7.png'
import product3 from '../assets/images/health/BPCI57-2D.png'
import product4 from '../assets/images/health/alluvi-product10.png'
import testimonialImg from '../assets/images/health/testimonial.webp'
import newsletterImg from '../assets/images/health/alluvi-product9.png'
import './Health.css'

const HERO_CATS = [
  { Icon: Pill, label: 'Vitamins' },
  { Icon: Sparkles, label: 'Collagen' },
  { Icon: Dumbbell, label: 'Protein' },
  { Icon: Droplet, label: 'Essential Oils' },
]

const DISCOVER_IMAGES = [
  { src: discover1, label: 'Supplements' },
  { src: wellnessImg, label: 'Retatrutide' },
  { src: discover3, label: 'Injectable Pens' },
]

const CATEGORIES = [
  {
    name: 'Retatrutide',
    desc: 'A triple agonist of GLP-1, GIP, and glucagon receptors — engineered to support powerful appetite control and effective, lasting weight management.',
    image: catSupplements,
    big: true,
  },
  {
    name: 'Glow',
    desc: 'A dual-action glow kit that supports radiant, even-toned skin from within for a healthy everyday glow.',
    image: catOils,
  },
  {
    name: 'Tirzepatide',
    desc: 'A dual GLP-1 & GIP receptor agonist that supports appetite control and steady, sustainable weight management.',
    image: catPowders,
  },
]

const PRODUCTS = [
  { id: 'retatrutide-52', name: 'Retatrutide 40mg', price: '$52.00', image: product1 },
  { id: 'tirzepatide-40', name: 'Tirzepatide 40mg', price: '$16.00', was: '$20.00', image: product2 },
  { id: 'bpc157-tb500', name: 'BPC157 & TB500', price: '$20.00', image: product3 },
  { id: 'retatrutide-112', name: 'Retatrutide 40mg', price: '$112.00', image: product4 },
]

const ADVANTAGES = [
  { Icon: Flower2, title: 'Radiant, healthy skin' },
  { Icon: HeartPulse, title: 'Appetite & weight management' },
  { Icon: Moon, title: 'Better sleep' },
  { Icon: Droplets, title: 'Faster tissue recovery' },
  { Icon: Dumbbell, title: 'Muscle support' },
  { Icon: ShieldCheck, title: 'Immune support' },
]

const TESTIMONIALS = [
  {
    name: 'Mary H.',
    quote:
      'I love their products and will be ordering again! I noticed an increase in energy and clarity on the very first day.',
  },
  {
    name: 'James P.',
    quote:
      'The essential oils completely changed my evening routine. I sleep better and wake up genuinely refreshed.',
  },
  {
    name: 'Leïla M.',
    quote:
      'Clean ingredients, honest labelling, and results I can actually feel. A permanent spot in my cabinet now.',
  },
]

const FOOTER_COLS = [
  {
    title: 'Shop',
    links: ['Shop All', 'Supplements', 'Essential Oils', 'Powders'],
  },
  {
    title: 'About',
    links: ['About Us', 'Our Team', 'Blog', 'Testimonials'],
  },
  {
    title: 'Customer Care',
    links: ['Contact Us', 'FAQs', 'Returns & Exchanges', 'Support'],
  },
]

function Health() {
  const [loaded, setLoaded] = useState(false)
  const [activeT, setActiveT] = useState(0)
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const handleAddToCart = (product) => {
    addToCart(product)
    navigate('/cart')
  }
  const pageRef = useRef(null)
  const heroImgRef = useRef(null)

  /* staggered hero reveal on mount */
  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(id)
  }, [])

  /* scroll-reveal for .fade-up elements */
  useEffect(() => {
    const page = pageRef.current
    if (!page) return undefined
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
      { threshold: 0.14, rootMargin: '0px 0px -7% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  /* hero parallax drift on mouse move */
  useEffect(() => {
    const img = heroImgRef.current
    if (!img) return undefined
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 16
      const y = (e.clientY / window.innerHeight - 0.5) * 16
      img.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1.06)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const prevT = () =>
    setActiveT((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const nextT = () => setActiveT((i) => (i + 1) % TESTIMONIALS.length)
  const t = TESTIMONIALS[activeT]

  return (
    <div ref={pageRef} className={`hearty-page${loaded ? ' is-loaded' : ''}`}>
      {/* 01 — HERO */}
      <section className="hh-hero">
        <div className="hh-hero__bg">
          <img ref={heroImgRef} src={heroBg} alt="" aria-hidden="true" />
        </div>
        <div className="hh-hero__overlay" />

        <div className="hh-hero__inner">
          <p className="hh-hero__eyebrow">Pulse Health · Wellness Co.</p>
          <h1 className="hh-hero__title">
            Health and <em>wellness</em> accessible to all
          </h1>
          <p className="hh-hero__lead">
            Celebrate your health with our products — crafted with the balance
            of science and nature.
          </p>
          <a className="hh-btn hh-btn--solid" href="#products" data-hover="">
            <span>Try out now</span>
            <span className="hh-btn__arrow" aria-hidden="true">
              <ArrowUpRight size={16} strokeWidth={2.2} />
            </span>
          </a>
        </div>

        <div className="hh-hero__cats">
          {HERO_CATS.map((c) => (
            <a className="hh-hero__cat" href="#categories" key={c.label}>
              <c.Icon size={24} strokeWidth={1.6} aria-hidden="true" />
              <span>{c.label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* 02 — DISCOVER */}
      <section className="hh-discover">
        <div className="hh-discover__head fade-up">
          <span className="hh-eyebrow">( Our Products )</span>
          <h2 className="hh-discover__title">
            Discover our <em>Products</em>
          </h2>
          <p className="hh-discover__sub">
            We put intention into every product we make — with the balance of
            science and nature.
          </p>
          <a className="hh-btn hh-btn--outline" href="#products" data-hover="">
            <span>Try out now</span>
            <span className="hh-btn__arrow" aria-hidden="true">
              <ArrowUpRight size={15} strokeWidth={2.2} />
            </span>
          </a>
        </div>

        <div className="hh-discover__grid">
          {DISCOVER_IMAGES.map((img, i) => (
            <figure
              className={`hh-discover__fig hh-discover__fig--${i + 1} fade-up delay-${i + 1}`}
              key={img.label}
            >
              <img src={img.src} alt={img.label} loading="lazy" />
              <figcaption>{img.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 03 — CATEGORIES */}
      <section className="hh-cats" id="categories">
        <div className="hh-cats__inner">
          {CATEGORIES.map((c) => (
            <article
              className={`hh-cat${c.big ? ' hh-cat--big' : ''} fade-up`}
              key={c.name}
            >
              <div className="hh-cat__body">
                <h3 className="hh-cat__name">{c.name}</h3>
                <p className="hh-cat__desc">{c.desc}</p>
                <a className="hh-btn hh-btn--solid" href="#products" data-hover="">
                  <span>Explore Category</span>
                  <span className="hh-btn__arrow" aria-hidden="true">
                    <ArrowUpRight size={15} strokeWidth={2.2} />
                  </span>
                </a>
              </div>
              <div className="hh-cat__media">
                <img src={c.image} alt={c.name} loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 04 — LATEST PRODUCTS */}
      <section className="hh-shop" id="products">
        <div className="hh-shop__head fade-up">
          <h2 className="hh-shop__title">
            Latest <em>Products</em>
          </h2>
          <a className="hh-btn hh-btn--ghost" href="#categories" data-hover="">
            <span>Show more</span>
            <span className="hh-btn__arrow" aria-hidden="true">
              <ArrowUpRight size={15} strokeWidth={2.2} />
            </span>
          </a>
        </div>

        <div className="hh-shop__grid">
          {PRODUCTS.map((p, i) => (
            <article className={`hh-prod fade-up delay-${(i % 4) + 1}`} key={p.name}>
              <div className="hh-prod__media">
                <span className="hh-prod__badge">On Sale</span>
                <img src={p.image} alt={p.name} loading="lazy" />
              </div>
              <div className="hh-prod__row">
                <h3 className="hh-prod__name">{p.name}</h3>
                <span className="hh-prod__price">
                  {p.price}
                  {p.was && <s>{p.was}</s>}
                </span>
              </div>
              <button
                type="button"
                className="hh-prod__cart"
                data-hover=""
                onClick={() => handleAddToCart(p)}
              >
                Add to Cart
                <ArrowUpRight size={13} strokeWidth={2.4} />
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* 05 — ADVANTAGES */}
      <section className="hh-adv">
        <div className="hh-adv__head fade-up">
          <span className="hh-eyebrow">( Why Pulse Health )</span>
          <h2 className="hh-adv__title">
            Our <em>Advantages</em>
          </h2>
          <p className="hh-adv__sub">
            We use our knowledge and expertise to help you live your best life
            — natural products that help people make their life better.
          </p>
        </div>

        <div className="hh-adv__grid">
          {ADVANTAGES.map((a, i) => (
            <article className={`hh-advcard fade-up delay-${(i % 3) + 1}`} key={a.title}>
              <span className="hh-advcard__ico" aria-hidden="true">
                <a.Icon size={30} strokeWidth={1.5} />
              </span>
              <h3 className="hh-advcard__title">{a.title}</h3>
              <p className="hh-advcard__desc">
                We create balance daily in people’s lives with our products.
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* 06 — TESTIMONIALS */}
      <section className="hh-tm">
        <div className="hh-tm__inner">
          <div className="hh-tm__content fade-up">
            <div className="hh-tm__stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="hh-tm__name">{t.name}</span>
            <blockquote className="hh-tm__quote" key={activeT}>
              {t.quote}
            </blockquote>
            <div className="hh-tm__nav">
              <button
                type="button"
                className="hh-tm__arrow"
                aria-label="Previous testimonial"
                onClick={prevT}
              >
                <ArrowLeft size={18} strokeWidth={2} />
              </button>
              <button
                type="button"
                className="hh-tm__arrow"
                aria-label="Next testimonial"
                onClick={nextT}
              >
                <ArrowRight size={18} strokeWidth={2} />
              </button>
              <span className="hh-tm__count">
                {String(activeT + 1).padStart(2, '0')} / {String(TESTIMONIALS.length).padStart(2, '0')}
              </span>
            </div>
          </div>
          <div className="hh-tm__media fade-up delay-1">
            <img src={testimonialImg} alt="Happy Pulse Health customer" loading="lazy" />
          </div>
        </div>
      </section>

      {/* 07 — NEWSLETTER */}
      <section className="hh-news">
        <div className="hh-news__panel fade-up">
          <div className="hh-news__body">
            <h2 className="hh-news__title">
              Join our <em>family!</em>
            </h2>
            <p className="hh-news__text">
              Be the first to know about our latest products and offers. As a
              welcome gift, we’ll send you a 30% off coupon.
            </p>
            <form
              className="hh-news__form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email address"
              />
              <button type="submit">Subscribe →</button>
            </form>
          </div>
          <div className="hh-news__media">
            <img src={newsletterImg} alt="" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* 08 — FOOTER */}
      <footer className="hh-footer">
        <div className="hh-footer__inner">
          <div className="hh-footer__top fade-up">
            <div className="hh-footer__brand">
              <span className="hh-footer__mark">Pulse Health</span>
              <p className="hh-footer__tagline">
                Everything you need for better health.
              </p>
              <ul className="hh-footer__contact">
                <li>
                  <span>Visit</span>
                  Worldwide
                </li>
                <li>
                  <span>Call</span>
                  <a href="tel:+97141234567">+971 4 123 4567</a>
                </li>
              </ul>
            </div>

            <div className="hh-footer__cols">
              {FOOTER_COLS.map((col) => (
                <div className="hh-footer__col" key={col.title}>
                  <h4>{col.title}</h4>
                  <ul>
                    {col.links.map((l) => (
                      <li key={l}>
                        <a href="#" data-hover="">
                          {l}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="hh-footer__base fade-up">
            <span>© 2026 Pulse Health. All rights reserved.</span>
            <div className="hh-footer__social">
              <a href="#" data-hover="">Twitter</a>
              <a href="#" data-hover="">Instagram</a>
              <a href="#" data-hover="">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Health
