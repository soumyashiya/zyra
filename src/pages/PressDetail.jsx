import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PRESS } from './consumerData'
import './PressDetail.css'

function PressDetail() {
  const { slug } = useParams()
  const item = PRESS.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!item) {
    return (
      <div className="pd-page">
        <div className="pd-article pd-article--missing">
          <h1 className="pd-title">Press item not found</h1>
          <Link to="/consumer" className="pd-back">
            ← Back to Press &amp; Recognition
          </Link>
        </div>
      </div>
    )
  }

  const more = PRESS.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <div className="pd-page">
      <article className="pd-article">
        <Link to="/consumer" className="pd-back">
          ← Back to Press &amp; Recognition
        </Link>

        <div className="pd-meta">
          <span>{item.year}</span>
          <span className="pd-meta__pub">{item.pub}</span>
          <span className="pd-meta__cat">{item.cat}</span>
        </div>

        <h1 className="pd-title">
          {item.headlineParts[0]}
          <em>{item.headlineParts[1]}</em>
          {item.headlineParts[2]}
        </h1>

        <div className="pd-body">
          {item.body.map((blk, i) =>
            blk.type === 'label' ? (
              <span key={i} className="pd-label">
                {blk.text}
              </span>
            ) : (
              <p key={i} className="pd-p">
                {blk.text}
              </p>
            ),
          )}
        </div>
      </article>

      <section className="pd-more">
        <div className="pd-more__head">
          <h2>More press &amp; recognition</h2>
          <Link to="/consumer" className="pd-more__all">
            All press →
          </Link>
        </div>
        <ul className="pd-more__list">
          {more.map((p) => (
            <li key={p.slug}>
              <Link to={`/consumer/press/${p.slug}`} className="pd-more__row">
                <span className="pd-more__year">{p.year}</span>
                <span className="pd-more__pub">{p.pub}</span>
                <span className="pd-more__headline">
                  {p.headlineParts[0]}
                  <em>{p.headlineParts[1]}</em>
                  {p.headlineParts[2]}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer className="pd-footer">
        <span>Press &amp; Recognition</span>
        <span>Guidance for modern families</span>
      </footer>
    </div>
  )
}

export default PressDetail
