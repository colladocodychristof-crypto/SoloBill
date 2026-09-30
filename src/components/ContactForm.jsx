import { useState } from 'react'

export default function ContactForm({ details }) {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [feedback, setFeedback] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
    setErrors({ ...errors, [name]: '' })
    setFeedback('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}
    if (values.name.trim().length < 2) nextErrors.name = 'Enter your name (at least 2 characters).'
    if (!values.email.trim() || event.currentTarget.elements.email.validity.typeMismatch) {
      nextErrors.email = 'Enter a valid email address.'
    }
    if (values.message.trim().length < 10) nextErrors.message = 'Enter a message (at least 10 characters).'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setFeedback('Please correct the highlighted fields. Nothing has been sent.')
      event.currentTarget.elements[Object.keys(nextErrors)[0]].focus()
      return
    }
    setFeedback('Demo complete: your entries passed basic validation. Your message was not sent or saved.')
  }

  return (
    <section id="contact" className="section container contact-grid" aria-labelledby="contact-heading">
      <div className="contact-copy">
        <h2 id="contact-heading">Let’s talk about<br />simpler billing.</h2>
        <p>Have a question about the SoloBill concept? Try the demo inquiry form.</p>
        <dl className="contact-details">
          {details.map((detail) => (
            <div key={detail.id}><dt>{detail.label}</dt><dd>{detail.value}</dd></div>
          ))}
        </dl>
        <p className="small-text">Contact placeholders: the team has not supplied official contact information. These are not working contact links.</p>
      </div>
      <form className="contact-form" noValidate onSubmit={handleSubmit} aria-describedby="contact-demo-note">
        <p id="contact-demo-note" className="form-notice"><strong>Demo form only.</strong> Messages are not sent. Use sample information; there is no backend or message storage.</p>
        <div className="field">
          <label htmlFor="contact-name">Name <span>(required)</span></label>
          <input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={100} value={values.name} onChange={handleChange} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
          {errors.name && <p id="name-error" className="field-error">{errors.name}</p>}
        </div>
        <div className="field">
          <label htmlFor="contact-email">Email <span>(required)</span></label>
          <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} value={values.email} onChange={handleChange} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
          {errors.email && <p id="email-error" className="field-error">{errors.email}</p>}
        </div>
        <div className="field">
          <label htmlFor="contact-message">Message <span>(required)</span></label>
          <textarea id="contact-message" name="message" rows={4} required minLength={10} maxLength={2000} value={values.message} onChange={handleChange} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
          {errors.message && <p id="message-error" className="field-error">{errors.message}</p>}
        </div>
        <button className="button" type="submit">Check demo inquiry</button>
        <p className="form-feedback" role="status" aria-live="polite">{feedback}</p>
      </form>
    </section>
  )
}
