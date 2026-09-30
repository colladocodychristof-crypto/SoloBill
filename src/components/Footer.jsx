export default function Footer({ name, tagline }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div><a className="wordmark" href="#home">{name}</a><p>{tagline}</p></div>
        <p>INTECH 3112 · Student business portfolio<br />Business concept and demonstrations only.</p>
        <a className="text-link" href="#home">Back to top</a>
      </div>
    </footer>
  )
}
