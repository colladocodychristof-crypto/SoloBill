export default function BusinessOverview({ business }) {
  return (
    <section id="overview" className="section container" aria-labelledby="overview-heading">
      <div className="overview-grid">
        <div>
          <h2 id="overview-heading">Your work is independent.<br />Your billing can be organized.</h2>
          <p className="section-intro">{business.overview}</p>
        </div>
        <div className="overview-details">
          <div><h3>The problem we want to solve</h3><p>{business.problem}</p></div>
          <div><h3>Built around beginning freelancers</h3><p>{business.audience}</p></div>
        </div>
      </div>
    </section>
  )
}
