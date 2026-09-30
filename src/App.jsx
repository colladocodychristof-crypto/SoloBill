import Header from './components/Header'
import BusinessOverview from './components/BusinessOverview'
import ProductsServices from './components/ProductsServices'
import MissionVision from './components/MissionVision'
import BusinessObjectives from './components/BusinessObjectives'
import WhyChooseUs from './components/WhyChooseUs'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import InvoicePreview from './components/InvoicePreview'
import { business, navigation, services, objectives, benefits, sampleInvoice, contactDetails } from './data/business'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header name={business.name} links={navigation} />
      <main id="main-content">
        <section id="home" className="hero-section" aria-labelledby="hero-heading">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1 id="hero-heading">{business.tagline}</h1>
              <p className="hero-benefit">{business.benefit}</p>
              <p className="hero-summary">A billing concept for student freelancers. Explore the example invoice and proposed services.</p>
              <a className="button" href="#invoice-demo">View the sample invoice</a>
              <p className="cta-note">Fictional example only. It does not create or send invoices.</p>
            </div>
            <InvoicePreview invoice={sampleInvoice} compact />
          </div>
        </section>
        <BusinessOverview business={business} />
        <ProductsServices services={services} plans={business.plans} />
        <section id="invoice-demo" className="section container demo-grid" aria-labelledby="demo-heading">
          <div>
            <h2 id="demo-heading">A good invoice says enough.</h2>
            <p className="section-intro">The details, in one place.</p>
            <p>This read-only sample illustrates a professional invoice: client information, itemized services, quantities, and a calculated total.</p>
            <p className="demo-disclaimer">All names and charges are fictional. This portfolio does not create, send, save, or export invoices, and does not process payments.</p>
            <a className="text-link" href="#services">Explore the business services</a>
          </div>
          <InvoicePreview invoice={sampleInvoice} />
        </section>
        <MissionVision mission={business.mission} vision={business.vision} />
        <BusinessObjectives objectives={objectives} />
        <WhyChooseUs benefits={benefits} />
        <ContactForm details={contactDetails} />
      </main>
      <Footer name={business.name} tagline={business.tagline} />
    </>
  )
}

export default App
