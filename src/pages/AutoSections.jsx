/* Shared sections — marquee strip + "Where you belong" CTA.
   Reused by the Automotive page and the blog detail page. */

const MQ = [
  { word: 'Daily check-in.', tile: 'auto-ph--m1' },
  { word: 'Breathe.', tile: 'auto-ph--m2' },
  { word: 'Embrace your feelings.', tile: 'auto-ph--m3' },
  { word: 'Unlock your best self.', tile: 'auto-ph--m4' },
]
const MQ_RUN = [...MQ, ...MQ, ...MQ]

export function Marquee() {
  return (
    <div className="auto-mq" aria-hidden="true">
      <div className="auto-mq__track">
        {MQ_RUN.map((m, i) => (
          <span className="auto-mq__item" key={i}>
            <span className={`auto-mq__tile ${m.tile}`} />
            <span className="auto-mq__word">{m.word}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function WhereYouBelong() {
  return (
    <section className="auto-cta" id="membership">
      <div className="auto-cta__inner">
        <div className="auto-cta__text" data-rev>
          <div className="auto-cta__rating">
            <span className="auto-cta__stars">★★★★★</span>
            <span className="auto-cta__rtext">4.6 Rated by 16,000+ Reviews</span>
          </div>
          <h2 className="auto-cta__title">
            Where you <em>belong.</em>
          </h2>
          <p className="auto-cta__sub">
            A space to move, breathe, and grow — yoga that meets you.
          </p>
          <div className="auto-cta__btns">
            <a href="#join" className="sat-btn sat-btn--light">
              Join membership plan
            </a>
            <a href="#instagram" className="sat-btn sat-btn--text sat-btn--text-light">
              Follow @Sattvara
            </a>
          </div>
        </div>
        <div className="auto-cta__media auto-ph--cta" data-rev style={{ '--rev-d': '120ms' }} />
      </div>
    </section>
  )
}
