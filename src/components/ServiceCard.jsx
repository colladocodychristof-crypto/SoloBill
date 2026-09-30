export default function ServiceCard({ service, selected, onSelect }) {
  return (
    <li>
      <button
        type="button"
        className={selected ? 'service-card is-selected' : 'service-card'}
        aria-pressed={selected}
        aria-controls="service-details"
        onClick={() => onSelect(service.id)}
      >
        <span className="service-name">{service.name}</span>
        <span className="service-description">{service.description}</span>
        <span className="service-action">Details</span>
      </button>
    </li>
  )
}
