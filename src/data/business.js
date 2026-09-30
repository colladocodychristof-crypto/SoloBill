export const business = {
  name: 'SoloBill',
  tagline: 'Quote well. Bill clearly.',
  benefit: 'Quotes, invoices and payment records for the work you take on.',
  overview: 'SoloBill is a simple financial management platform concept for student freelancers and independent workers. It helps users organize client information, prepare quotations, create invoices, and record whether payments have been received.',
  problem: 'Beginning freelancers often rely on informal messages or manual documents for quotations and invoices. This can lead to calculation errors, missed payments, and an unprofessional client experience.',
  audience: 'Student freelancers, designers, photographers, tutors, writers, developers, and other independent service providers, ages 18–40, serving local and online freelance markets.',
  mission: 'SoloBill gives freelancers simple and affordable tools for creating quotations, sending invoices, and tracking income.',
  vision: 'To help every beginning freelancer manage business finances with confidence.',
  plans: 'Activity 4 proposes a free starter plan and paid plans. Pricing and detailed plan limits have not been defined.',
}

export const navigation = [
  { id: 'overview', label: 'Overview' },
  { id: 'services', label: 'Services' },
  { id: 'purpose', label: 'Our purpose' },
  { id: 'objectives', label: 'Objectives' },
  { id: 'why-solobill', label: 'Why SoloBill' },
  { id: 'contact', label: 'Contact' },
]

export const services = [
  {
    id: 'quotation',
    name: 'Quotation Generator',
    description: 'Creates professional price quotations.',
    detail: 'Present your services and charges clearly before the work begins, so you and your client can agree on the price.',
    outcome: 'A clear starting point for every project.',
  },
  {
    id: 'invoice',
    name: 'Invoice Generator',
    description: 'Produces downloadable client invoices.',
    detail: 'Turn your work into a professional, itemized invoice. Downloadable invoices are part of the business concept, not a function of this portfolio.',
    outcome: 'Professional documents, without complicated accounting software.',
  },
  {
    id: 'clients',
    name: 'Client Manager',
    description: 'Stores client details and transaction history.',
    detail: 'Keep client information and previous transactions organized rather than scattered across chats and documents.',
    outcome: 'Client records that are easier to find and follow.',
  },
  {
    id: 'payments',
    name: 'Payment Tracker',
    description: 'Records paid, unpaid, and overdue invoices.',
    detail: 'Know which invoices still need attention. Recording payment status is different from processing online payments, which is a future objective.',
    outcome: 'A simpler way to follow up on unpaid work.',
  },
  {
    id: 'income',
    name: 'Income Dashboard',
    description: 'Summarizes earnings and outstanding payments.',
    detail: 'Bring earnings and outstanding balances into one understandable overview, helping beginning freelancers see where they stand.',
    outcome: 'An approachable view of freelance income.',
  },
]

export const objectives = [
  { id: 'templates', text: 'Develop customizable quotation and invoice templates.' },
  { id: 'future-features', text: 'Introduce expense tracking and online payments in future versions.' },
  { id: 'follow-up', text: 'Help freelancers monitor unpaid and overdue invoices.' },
  { id: 'pdf', text: 'Allow users to download invoices as PDF files.' },
]

export const benefits = [
  { id: 'documents', title: 'Make a professional impression', description: 'Use professional-looking quotations and invoices to communicate clearly with clients.' },
  { id: 'records', title: 'Keep client records organized', description: 'Bring client details and transaction history together instead of searching through messages.' },
  { id: 'charges', title: 'Simplify charge calculations', description: 'Make service charges easier to organize and understand.' },
  { id: 'follow-up', title: 'Follow up with clarity', description: 'Identify unpaid and overdue invoices so outstanding work is easier to follow up on.' },
  { id: 'approachable', title: 'Start with confidence', description: 'Make financial management approachable for freelancers who are just beginning.' },
]

// Fictional sample data, not prices for SoloBill or real transactions.
export const sampleInvoice = {
  number: 'DEMO-001',
  sender: 'Sample Freelancer',
  client: 'Sample Client',
  currency: 'PHP',
  items: [
    { id: 'identity-design', description: 'Brand identity design', quantity: 1, rate: 2500 },
    { id: 'social-templates', description: 'Social media template', quantity: 2, rate: 750 },
  ],
}

export const contactDetails = [
  { id: 'email', label: 'Email', value: '[Team email to be provided]' },
  { id: 'phone', label: 'Phone', value: '[Team phone to be provided]' },
  { id: 'location', label: 'Location', value: '[Business location to be provided]' },
]
