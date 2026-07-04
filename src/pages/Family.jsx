import './Page.css'

const articles = [
  {
    tag: 'Parenting',
    title: 'What pediatricians wish parents knew about screen time',
    excerpt:
      'It is less about minutes and more about context. Three doctors share their own family rules.',
  },
  {
    tag: 'Education',
    title: 'How to choose between two equally good schools',
    excerpt:
      'A practical framework for the decision parents lose the most sleep over.',
  },
  {
    tag: 'Money',
    title: 'Building an allowance that actually teaches saving',
    excerpt:
      'A simple system that sticks — even with kids who spend the second the cash hits.',
  },
  {
    tag: 'Wellness',
    title: 'The case for a real, screen-free Sunday',
    excerpt:
      'Families who tried it for a month report sharper moods and surprising new rituals.',
  },
  {
    tag: 'Travel',
    title: 'Five city breaks that work with kids in tow',
    excerpt:
      'Walkable, calmer, and forgiving when the nap schedule goes sideways.',
  },
  {
    tag: 'Home',
    title: 'A kitchen rhythm that survives a hectic week',
    excerpt:
      'Three families share the systems that keep dinner on the table without the daily scramble.',
  },
]

function Family() {
  return (
    <div className="page">
      <div className="page__inner">
        <h1 className="page__title">Family</h1>
        <p className="page__intro">
          Stories, advice, and ideas for the people you go home to. Practical
          reporting on parenting, schools, wellness, and the rhythms of life
          under one roof.
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
    </div>
  )
}

export default Family
