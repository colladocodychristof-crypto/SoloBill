# SoloBill recorded demonstration script

**Status: script prepared; video has NOT been recorded.**

The assignment requires a recorded system demonstration with voice-over, not a live presentation. Record the actual working app, not a slideshow of screenshots. Suggested length: approximately 4–5 minutes, with time to read the interface. Timings are guidance, not a rubric requirement.

## Before recording

1. Obtain design approval, run the project's lint and production build, and update `REQUIREMENTS.md` with real results.
2. Replace labeled contact placeholders with the team's chosen legitimate details. Do not invent contacts.
3. Open the running app at the Vite URL. Close unrelated tabs and hide personal notifications.
4. Open the source files listed below in the editor. Use readable zoom.
5. Set the desktop browser wide enough to show the two-column hero; prepare responsive mode at 390px width.
6. Use only sample form information: name `Demo Student`, email `demo@example.test`, message `This is a sample inquiry about the SoloBill concept.` This is fictional test input, not a SoloBill contact address.
7. Record microphone narration with screen capture. Listen to a short test clip first. Do not claim submission-ready until the video file has been reviewed and is included or submitted as required.

## Matching screen sequence and voice-over

| Scene | On-screen action | Voice-over |
|---|---|---|
| 1. Introduction | Show the desktop hero, SoloBill name, tagline, CTA, and sample invoice. | “This is SoloBill, our INTECH 3112 second-term business portfolio, built with React, Vite, JavaScript, and plain CSS. Our tagline is Professional billing made simple. The business concept supports student freelancers and independent workers. This website is a portfolio demonstration, not a complete billing platform.” |
| 2. Invoice demo | Click **Create a Free Invoice**. Show the `Invoice preview / demo` section, itemized table and calculated total. | “The primary button opens an explicitly labeled invoice demo instead of a signup page. The names and charges are fictional. The preview illustrates itemized services, quantities, and a total calculated from the sample data. It does not create, send, save, or export invoices.” |
| 3. Business overview | Use **Overview** in navigation. Show the profile, problem, and audience. | “SoloBill aims to organize client information, quotations, invoices, and payment records. Beginning freelancers often rely on informal messages or manual documents, which can lead to calculation errors, missed payments, and an unprofessional client experience. Our audience includes student freelancers, designers, photographers, tutors, writers, developers, and other independent service providers aged eighteen to forty in local and online markets.” |
| 4. Services and state | Navigate to **Services**. Point out all five offerings. Click **Invoice Generator**, then **Payment Tracker**; pause on the changed panel. | “The proposed services are Quotation Generator, Invoice Generator, Client Manager, Payment Tracker, and Income Dashboard. All five remain visible. Selecting a service changes the selected button and its description without reloading. This uses React's useState hook. These descriptions explain the business concept; they are not claims that this portfolio implements the tools. Free and paid plans are proposed, but no pricing or detailed limits were supplied.” |
| 5. Mission and vision | Navigate to **Our purpose**. Keep both statements readable. | “Our mission is to give freelancers simple and affordable tools for creating quotations, sending invoices, and tracking income. Our vision is to help every beginning freelancer manage business finances with confidence.” |
| 6. Objectives | Navigate to **Objectives** and show all four. | “Our objectives are customizable quotation and invoice templates, expense tracking and online payments in future versions, monitoring unpaid and overdue invoices, and downloadable PDF invoices. Expense tracking and online payments are future objectives. PDF export is also not implemented in this portfolio.” |
| 7. Why choose us | Navigate to **Why SoloBill**. Show all five benefits. | “The intended benefits are professional-looking documents, organized client records, simpler charge calculations, easier payment follow-up, and approachable financial management. The minimalist navy and emerald layout follows our Activity 4 direction.” |
| 8. Contact behavior | Navigate to **Contact**. Submit empty fields to show inline errors. Fill the sample name, invalid email `not-an-email`, and a short message; show validation. Then use the prepared valid sample inputs and click **Check demo inquiry**. | “The contact form has labeled name, email, and message fields. It checks required information and basic input validity and displays errors. With valid sample entries, the feedback says the demo passed validation, but the message was not sent or saved. There is no backend. The contact details must be provided by the team before submission.” |
| 9. Props, map, keys | Switch to the editor. Show `src/App.jsx`, `src/data/business.js`, `src/components/ProductsServices.jsx`, and `ServiceCard.jsx`. | “App is the parent component. It passes the services array to ProductsServices through props. Each service is an object with a stable unique ID. ProductsServices uses map to render reusable ServiceCard components, with service.id as the key. ServiceCard receives the service data, selected state, and selection callback as props. The selected ID is stored using useState and determines the details shown on screen.” |
| 10. Reuse and structure | Show the `src/components/` directory, then `InvoicePreview.jsx`. | “Our portfolio separates Header, BusinessOverview, ProductsServices, MissionVision, BusinessObjectives, WhyChooseUs, ContactForm, and Footer into functional components returning JSX. InvoicePreview is reused in the hero and demo section using props, including a compact layout option.” |
| 11. Responsive and keyboard use | Return to browser, switch to 390px width, open **Menu** using keyboard Enter, navigate to Services, select another service, show stacked invoice and contact form. | “On mobile, the layout stacks without horizontal scrolling. The menu is a native keyboard-operable button with an expanded state, and selecting a navigation link closes it. Services remain available, the invoice stays readable, and contact fields fit the screen. Visible focus outlines help keyboard users.” |
| 12. Closing | Show footer and Back to top. | “This is our SoloBill business portfolio: organized business information, reusable components, props, dynamic array rendering, and visible state interaction. The footer identifies this as a student concept demonstration. Thank you.” |

## Recording review and submission record

- [ ] Actual app recorded, with readable interface and source code.
- [ ] All listed scenes and interactions captured; no invented delivery or real payment claims.
- [ ] Voice-over audible and matched to on-screen actions.
- [ ] Contact details resolved and approved by the team.
- [ ] Lint/build results documented honestly.
- [ ] Recording replayed from beginning to end; no broken/missing audio or private information.
- [ ] Video filename/location recorded below and accounted for in submission.

**Video filename/path:** [Not recorded yet]

**Recorded/reviewed by:** [Team member to complete]

**Submission evidence:** [Team to complete according to instructor instructions]

Writing this script, taking screenshots, or exercising the app does not fulfill the recorded-video requirement.
