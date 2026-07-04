import './Page.css'

const articles = [
  {
    tag: 'Manufacturing',
    title: 'Reshoring is real — but it does not look like the brochure',
    excerpt:
      'Plant openings are up, but headcounts are smaller and the skill mix has changed for good.',
  },
  {
    tag: 'Logistics',
    title: 'How a regional port is rewriting its container playbook',
    excerpt:
      'Small operational tweaks added a full day of throughput. Bigger moves are next.',
  },
  {
    tag: 'Energy',
    title: 'Industrial heat is the next decarbonization frontier',
    excerpt:
      'New hardware lets plants electrify processes that have run on gas for a century.',
  },
  {
    tag: 'Robotics',
    title: 'Mobile robots quietly take over the warehouse aisle',
    excerpt:
      'Operators say payback periods have shrunk from years to months in some configurations.',
  },
  {
    tag: 'Materials',
    title: 'A steel mill bets on hydrogen — and a long timeline',
    excerpt:
      'The capital plan is enormous. The carbon math, finally, is starting to work.',
  },
  {
    tag: 'Workforce',
    title: 'Why the best plants are running their own training schools',
    excerpt:
      'A look inside three programs that are producing skilled technicians in under twelve months.',
  },
]

function Industrial() {
  return (
    <div className="page">
      <div className="page__inner">
        <h1 className="page__title">Industrial</h1>
        <p className="page__intro">
          Manufacturing, logistics, energy, and the heavy industries that keep
          the modern economy running. Reporting on the machines, the
          materials, and the people behind them.
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

export default Industrial
