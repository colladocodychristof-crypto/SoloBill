export default function MissionVision({ mission, vision }) {
  return (
    <section id="purpose" className="section container purpose-section" aria-labelledby="purpose-heading">
      <h2 id="purpose-heading">A simple idea. A clear purpose.</h2>
      <div className="purpose-grid">
        <div><h3>Our mission</h3><p>{mission}</p></div>
        <div><h3>Our vision</h3><p>{vision}</p></div>
      </div>
    </section>
  )
}
