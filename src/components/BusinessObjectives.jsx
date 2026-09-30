export default function BusinessObjectives({ objectives }) {
  return (
    <section id="objectives" className="section container objectives-section" aria-labelledby="objectives-heading">
      <div>
        <h2 id="objectives-heading">What we aim to build.</h2>
        <p>Our business objectives guide the concept, not the capabilities of this portfolio.</p>
        <p className="small-text">Expense tracking and online payments are future-version objectives, not existing features.</p>
      </div>
      <ol className="objectives-list">
        {objectives.map((objective) => <li key={objective.id}>{objective.text}</li>)}
      </ol>
    </section>
  )
}
