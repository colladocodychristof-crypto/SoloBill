import { useRef, useState } from 'react'

export default function Header({ name, links }) {
  const [isOpen, setIsOpen] = useState(false)
  const menuButton = useRef(null)

  function handleEscape(event) {
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false)
      menuButton.current.focus()
    }
  }

  return (
    <header className="site-header" onKeyDown={handleEscape}>
      <div className="container header-inner">
        <a className="wordmark" href="#home" onClick={() => setIsOpen(false)}>{name}</a>
        <button
          ref={menuButton}
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Close menu' : 'Menu'}
        </button>
        <nav id="primary-navigation" aria-label="Main navigation" className={isOpen ? 'navigation is-open' : 'navigation'}>
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={() => setIsOpen(false)}>{link.label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
