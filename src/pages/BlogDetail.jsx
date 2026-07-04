import { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import AutoFooter from './AutoFooter'
import { Marquee } from './AutoSections'
import { BLOGS } from './automotiveData'
import './Automotive.css'

/* ---------- share icons ---------- */
const ShLi = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.5 8h4V24h-4zM8 8h3.8v2.2h.05c.53-1 1.83-2.2 3.95-2.2 4.2 0 5 2.77 5 6.37V24h-4v-7.2c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.77 1.87-2.77 3.8V24H8z" />
  </svg>
)
const ShX = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)
const ShFb = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.6V13h2.7v8z" />
  </svg>
)
const ShLink = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" />
    <path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
  </svg>
)

function MoreBlog() {
  return (
    <section className="blog-more">
      <div className="blog-more__inner">
        <div className="blog-more__head" data-rev>
          <h2 className="blog-more__title">More blog</h2>
          <Link to="/automotive" className="sat-btn sat-btn--dark">
            Read more blogs
          </Link>
        </div>
        <div className="blog-more__grid">
          {BLOGS.map((b, i) => (
            <div
              className="auto-bcard-wrap"
              key={b.slug}
              data-rev
              style={{ '--rev-d': i * 120 + 'ms' }}
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

function BlogDetail() {
  const { slug } = useParams()
  const rootRef = useRef(null)
  const blog = BLOGS.find((b) => b.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  /* Scroll reveal for [data-rev] elements (incl. the footer). */
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
  }, [slug])

  if (!blog) {
    return (
      <div className="auto-page" ref={rootRef}>
        <div className="blog-article blog-article--missing">
          <h1 className="blog-article__title">Article not found</h1>
          <Link to="/automotive" className="blog-article__back">
            ← Back to blog
          </Link>
        </div>
        <AutoFooter />
      </div>
    )
  }

  return (
    <div className="auto-page" ref={rootRef}>
      <article className="blog-article">
        <div className="blog-article__col">
          <Link to="/automotive" className="blog-article__back">
            ← Back to blog
          </Link>
          <div className="blog-article__tags">
            <span className="blog-tag blog-tag--feat">Featured</span>
            <span className="blog-tag">{blog.cat}</span>
            <span className="blog-article__date">• {blog.date}</span>
          </div>
          <h1 className="blog-article__title">{blog.title}</h1>
          <p className="blog-article__lead">{blog.excerpt}</p>

          <div className="blog-article__byline">
            <div className="blog-article__author">
              <span className="blog-article__avatar" aria-hidden="true" />
              <span className="blog-article__authortext">
                <span className="blog-article__authortop">Written by:</span>
                <strong>Ananya Marlinez</strong>
              </span>
            </div>
            <div className="blog-article__share">
              <span className="blog-article__sharelabel">Share on:</span>
              <a href="#linkedin" className="blog-share" aria-label="Share on LinkedIn"><ShLi /></a>
              <a href="#x" className="blog-share" aria-label="Share on X"><ShX /></a>
              <a href="#facebook" className="blog-share" aria-label="Share on Facebook"><ShFb /></a>
              <a href="#copy" className="blog-share" aria-label="Copy link"><ShLink /></a>
            </div>
          </div>
        </div>

        <div className={`blog-article__hero ${blog.g}`} aria-hidden="true" />

        <div className="blog-article__col blog-article__body">
          {blog.body.map((blk, i) => {
            if (blk.type === 'label') {
              return (
                <span key={i} className="blog-article__label">
                  {blk.text}
                </span>
              )
            }
            if (blk.type === 'img') {
              return (
                <div
                  key={i}
                  className={`blog-article__inlineimg ${blk.g}`}
                  aria-hidden="true"
                />
              )
            }
            return (
              <p key={i} className="blog-article__p">
                {blk.text}
              </p>
            )
          })}
        </div>
      </article>

      <MoreBlog />
      <Marquee />
      <AutoFooter />
    </div>
  )
}

export default BlogDetail
