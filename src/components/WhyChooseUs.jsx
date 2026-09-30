export default function WhyChooseUs({ benefits }) {
  return (
    <section id="why-solobill" className="section benefits-section" aria-labelledby="benefits-heading">
      <div className="container">
        <div className="section-heading">
          <h2 id="benefits-heading">Made for the way freelancers work.</h2>
          <p>SoloBill focuses on the day-to-day paperwork of independent work.</p>
        </div>
        <dl className="benefits-grid">
          {benefits.map((benefit) => (
            <div key={benefit.id}><dt>{benefit.title}</dt><dd>{benefit.description}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  )
}
