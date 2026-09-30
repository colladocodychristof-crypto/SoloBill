export default function InvoicePreview({ invoice, compact = false }) {
  const total = invoice.items.reduce((sum, item) => sum + item.quantity * item.rate, 0)
  const formatMoney = (amount) => new Intl.NumberFormat('en-PH', {
    style: 'currency', currency: invoice.currency, maximumFractionDigits: 2,
  }).format(amount)

  return (
    <figure className={compact ? 'invoice-preview compact' : 'invoice-preview'}>
      <figcaption className="invoice-caption">Sample invoice · Demo data only</figcaption>
      <div className="invoice-paper">
        <div className="invoice-heading">
          <div>
            <p className="invoice-brand">SoloBill</p>
            <p className="invoice-muted">Prepared by {invoice.sender}</p>
          </div>
          <div className="invoice-title">
            <p>Invoice</p>
            <span>{invoice.number}</span>
          </div>
        </div>
        <div className="invoice-client">
          <span className="invoice-muted">Billed to</span>
          <strong>{invoice.client}</strong>
        </div>
        <table>
          <caption className="visually-hidden">Fictional services and sample charges in Philippine pesos</caption>
          <thead><tr><th scope="col">Description</th><th scope="col">Qty</th><th scope="col">Amount</th></tr></thead>
          <tbody>
            {invoice.items.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.description}<span className="invoice-rate">{formatMoney(item.rate)} each</span></th>
                <td>{item.quantity}</td>
                <td>{formatMoney(item.quantity * item.rate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="invoice-total"><span>Total</span><strong>{formatMoney(total)}</strong></div>
        <p className="invoice-note">Fictional client and charges. Not a real invoice or SoloBill plan pricing.</p>
      </div>
    </figure>
  )
}
