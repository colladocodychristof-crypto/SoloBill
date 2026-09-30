import { useState } from 'react'
import ServiceCard from './ServiceCard'

export default function ProductsServices({ services, plans }) {
  const [selectedId, setSelectedId] = useState(services[0].id)
  const selectedService = services.find((service) => service.id === selectedId)

  return (
    <section id="services" className="section service-section" aria-labelledby="services-heading">
      <div className="container">
        <div className="section-heading">
          <h2 id="services-heading">The tools behind each client job.</h2>
          <p>Explore the proposed services. They are shown as a concept here, not working billing tools.</p>
        </div>
        <div className="services-grid">
          <ul className="service-list" aria-label="Explore all five proposed services">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} selected={service.id === selectedId} onSelect={setSelectedId} />
            ))}
          </ul>
          <div id="service-details" className="service-details" aria-live="polite" aria-atomic="true">
            <p className="selection-label">Selected service</p>
            <h3>{selectedService.name}</h3>
            <p>{selectedService.detail}</p>
            <div className="service-outcome"><p>{selectedService.outcome}</p></div>
            <p className="small-text">Business concept only. Explore the sample invoice below for a visual example.</p>
            <a className="text-link" href="#invoice-demo">View the invoice demo</a>
          </div>
        </div>
        <p className="plans-note"><strong>About plans.</strong> {plans}</p>
      </div>
    </section>
  )
}
