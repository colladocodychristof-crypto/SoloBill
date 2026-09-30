# SoloBill

**Professional billing made simple**

A responsive, single-page business portfolio for the INTECH 3112 Second Term Project, based on the supplied SoloBill Activity 4. Built with React functional components, Vite, JavaScript/JSX, and plain CSS. This is a student portfolio, not a working financial-management platform.

## Prerequisites

- Node.js 22.12 or newer on the Node 22 release line, or a newer supported LTS release.
- npm (included with Node.js).
- A modern browser. No API keys, database, or accounts are needed.

The implementation environment has Node.js v22.23.2 and npm 10.9.8.

## Install and run

Run these commands from the project directory:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. Vite normally uses `http://localhost:5173/`, but may choose a different port if it is occupied. Reuse an existing server for this project rather than starting duplicates. During implementation, the existing server at `http://localhost:5173/` was reused; a second pre-existing server at port 5174 was left untouched.

## Checks and production build

Only run these after design approval for the current implementation:

```sh
npm run lint
npm run build
npm run preview
```

The build outputs static files in `dist/`. Preview serves that build locally; it does not deploy anything. No test or typecheck script is currently defined in `package.json`. See `REQUIREMENTS.md` for actual verification status. A successful development page is not proof that the production build passes.

## Component structure

```text
src/
  main.jsx                     React root, StrictMode, stylesheet import
  App.jsx                      Section composition and parent-to-child props
  styles.css                   Active plain-CSS design and responsive rules
  data/business.js             Business content, services, objectives, sample data
  components/
    Header.jsx                 Anchor navigation, mobile menu state
    BusinessOverview.jsx       Overview, problem, audience
    ProductsServices.jsx       Service array rendering and selected-service state
    ServiceCard.jsx            Reusable service button receiving props
    InvoicePreview.jsx         Reused hero/full demo, calculated sample total
    MissionVision.jsx          Mission and vision
    BusinessObjectives.jsx     All four objectives and future-feature distinction
    WhyChooseUs.jsx            Concept benefits
    ContactForm.jsx            Controlled fields, local validation, honest feedback
    Footer.jsx                 Business identity and portfolio disclaimer
public/
  solobill.svg                 Local typographic favicon
```

Original starter assets and unused `src/App.css` / `src/index.css` remain preserved, but are not imported by the portfolio. No unrelated files were deleted. The existing project was not a Git repository, so implementation took place here without creating a worktree, commits, or a remote repository.

## React concepts to explain

- `App` passes the services array to `ProductsServices` through props.
- `ProductsServices` renders every service using `.map()` and `key={service.id}`; `ServiceCard` uses its `service`, `selected`, and `onSelect` props.
- `useState` stores the selected service ID. Clicking a service changes its selected appearance and the visible detail panel without reloading the page.
- `Header` uses state for the mobile menu, including `aria-expanded` and Escape-to-close behavior.
- `ContactForm` keeps field values, errors, and feedback in state. It prevents submission and validates locally.
- `InvoicePreview` is reused with the same sample data in two layouts through the `compact` prop; line amounts and total come from the sample array.

## Business fidelity and demo limitations

- All five services describe the proposed business. Client storage, payment tracking, and an income dashboard are not implemented as working tools.
- The primary CTA opens `#invoice-demo`, a **read-only** sample. No signup, invoice creation, invoice sending, persistence, PDF export, or payment processing exists.
- All sample client names and service charges are fictional. Invoice charges are **not SoloBill subscription prices**.
- Expense tracking and online payments are future-version objectives.
- Activity 4 mentions a free starter plan and paid plans but supplies no prices or limits; none are invented.
- The contact form is explicitly a demo. Entries are only held in React memory while the page is open; submission sends no message and saves no record. Avoid real personal information. Browser autofill behavior remains under the browser's control.
- Contact details are labeled placeholders, not working links. The team must provide its chosen email, phone, and business location in `src/data/business.js` before considering the portfolio submission-ready.
- No authentication, external APIs, analytics, databases, external fonts, third-party images, or security claims are added. The development runtime contacts only the local Vite server.
- Navy and emerald follow the supplied brand direction. The specific CSS hex values are implementation choices, not official brand codes.

## Submission handoff

`REQUIREMENTS.md` maps the assignment checklist to source files and records verification. `DEMO-SCRIPT.md` provides a matching screen sequence and voice-over script. **A script is not a recorded video.** The team still needs to record, review, and account for the required system-demonstration video with voice-over. No live presentation is required.

Current gate: design approval and final lint/build remain pending. Contact placeholders and the unrecorded demonstration also prevent a submission-ready claim.
