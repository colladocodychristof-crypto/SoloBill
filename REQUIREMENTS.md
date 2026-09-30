# SoloBill requirements and verification

Sources: supplied `ACTIVITY 4 - INTECH 3112.pdf` and `SECOND TERM PROJECT - INTECH 3112-2.pdf`, plus the implementation brief. No faculty approval is inferred from the Activity 4 checkboxes.

Status legend: **Inspected** = implemented and reviewed in source; **Browser verified** = exercised in the actual development application; **Pending** = not yet verified or requires team/user action. Browser verification and approval do not replace a production build.

## 1. Component-based architecture

| Technical checklist item | Component/file | Verification status |
|---|---|---|
| Create the project using React.js and Vite | Existing `package.json`, `vite.config.js`, `src/main.jsx` | Inspected; browser verified in the existing Vite runtime; production build pending |
| Create a `src/components/` directory | `src/components/` | Inspected; eight required and two reusable component files created |
| Reusable functional components returning JSX | All files in `src/components/` | Inspected; components rendered in actual app |
| Header/Navbar component | `Header.jsx` | Browser verified; all six anchors on desktop and mobile |
| Business Profile/Overview component | `BusinessOverview.jsx` | Browser verified; overview screenshot inspected |
| Products/Services component | `ProductsServices.jsx` | Browser verified; all five services exercised |
| Mission/Vision or Business Features component | `MissionVision.jsx`, `WhyChooseUs.jsx` | Browser verified; both sections visually inspected |
| Contact Form component | `ContactForm.jsx` | Browser verified; empty, malformed, short, and valid demo inputs |
| Footer component | `Footer.jsx` | Browser verified; screenshot inspected and Back to top target exists |

## 2. Props and dynamic data flow

| Technical checklist item | Component/file | Verification status |
|---|---|---|
| Parent-to-child data through props | `App.jsx` passes `services`, `business`, mission/vision, objectives, benefits, and contact data | Source inspected and passed content rendered correctly in browser |
| Products/Services as an array of objects | `src/data/business.js`: `services` with five stable string IDs | Inspected; browser verified five services |
| Services rendered with JavaScript `.map()` | `ProductsServices.jsx` | Source inspected; browser verified full five-item list |
| Unique `key` on every mapped item | `ServiceCard key={service.id}`; ID keys also used for navigation, benefits, objectives, contacts, invoice rows | Source inspected; no captured React console errors during all selections |
| Props make components reusable | `ServiceCard.jsx`; `InvoicePreview.jsx` used twice with `invoice` and `compact` props | Source inspected; five ServiceCards and two invoice previews rendered |

## 3. State management and interactivity

| Technical checklist item | Component/file | Verification status |
|---|---|---|
| Use the `useState()` hook | `ProductsServices.jsx`, `Header.jsx`, `ContactForm.jsx` | Source inspected; service, menu, and form state changes browser verified |
| At least one interactive feature | Five service-selector buttons in `ProductsServices.jsx` | Browser verified; every service button changes the detail panel |
| State produces a visible UI change | Selected button and service title/detail/outcome change | Browser verified; selected service/title/detail/outcome change |

## 4. Information organization and visual presentation

| Technical checklist item | Component/file | Verification status |
|---|---|---|
| Use Activity 4 business information | `src/data/business.js`; concept vs implementation made explicit | Inspected against both PDFs; no approval claim |
| Business name | Hero in `App.jsx`, `Header.jsx`, `Footer.jsx` | Browser verified; visible in hero, navigation, and footer |
| Business profile/overview | `BusinessOverview.jsx` | Browser verified; overview screenshot inspected |
| Mission and vision | `MissionVision.jsx` | Browser verified; both faithful statements visually inspected |
| Business objectives | `BusinessObjectives.jsx`: all four | Browser verified; four items counted and visually inspected |
| Products/services | `ProductsServices.jsx`: all five original offerings | Browser verified; all five offerings counted and individually exercised |
| Business features / Why Choose Us | `WhyChooseUs.jsx`: all five requested benefits | Browser verified; five benefits counted and visually inspected |
| Contact information / contact form | `ContactForm.jsx`, `contactDetails` data | Browser verified; demo form works; three labeled contact placeholders remain unresolved |
| Footer | `Footer.jsx` | Browser verified; footer screenshot inspected |
| CSS styling | Active `src/styles.css` | Browser verified; navy/emerald/neutral palette, focus states, core text contrast |
| Responsive desktop/mobile | `src/styles.css` grid and mobile media queries | Browser verified; seven widths 320–1440px, screenshots, no overflow |

## 5. Additional brief acceptance criteria

| Requirement | Implementation | Verification status |
|---|---|---|
| Hero name, tagline, benefit, sample professional invoice | `App.jsx`, `InvoicePreview.jsx` | Browser verified; final desktop and mobile screenshots inspected |
| Required CTA opens explicit preview, not signup | Link to `#invoice-demo` | Browser verified on desktop and mobile; #invoice-demo reached |
| Full service list remains rendered and accessible | Five native buttons from `services.map()` | Browser verified; all five remain after selection; keyboard activation works |
| Name/email/message with labels and validation | `ContactForm.jsx` | Browser verified; labels linked; empty, invalid, short, and valid cases checked |
| Visible, honest demo-only contact feedback | `handleSubmit` prevents submission; feedback says not sent/saved | Browser verified; no request/navigation on submit; feedback says not sent or saved |
| Working section anchor navigation | `Header.jsx`, all section IDs | Browser verified; all six links work in both layouts; every anchor target exists |
| Keyboard mobile menu with expanded state | Native button, `aria-expanded`, Escape handling, closes on link | Browser verified; Tab, Enter, Space, Escape, expanded state, closes on links |
| Semantic HTML, contrast, focus, reduced motion | Landmarks/headings/lists/table, `:focus-visible`, reduced-motion rule | Source inspected; labels/IDs, 3px keyboard focus, reduced motion, and five core contrast pairs verified; not full accessibility certification |
| No horizontal overflow on mobile | Responsive grids and table sizing | Browser verified at 320, 360, 390, 620, 768, 1024, and 1440px |
| No invented pricing, contact details, endorsements, or security guarantees | Central data and disclosures | Inspected |
| Future features not advertised as existing | Objectives and Payment Tracker details | Inspected |
| No backend/full-dashboard/scope expansion | Client-only React portfolio | Inspected |
| README documentation | `README.md` | Written |
| Requirement mapping | This file | Written; updated with actual browser verification and outstanding gates |
| Matching screen sequence and voice-over | `DEMO-SCRIPT.md` | Written; **video not recorded** |
| Actual browser evidence and error inspection | `evidence/` | 44/44 targeted checks passed; evidence/browser-results.json and screenshots |
| Reuse existing server, no duplicate | Existing Vite server at `http://localhost:5173/` | Verified via process/listener discovery; port 5174 pre-existed |
| Approval before lint/typecheck/build/format/full suites | Design gate | Pending user approval; no explicit quality-check command run |
| Production lint and build | `npm run lint`; `npm run build` | Pending design approval |
| No commit/push/deployment/PR | Non-Git project; local-only work | Preserved |

## 6. Final submission checklist

| Assignment item | Current status |
|---|---|
| React.js/Vite project complete | Implementation present; final checks pending |
| Required components working | Browser verified in development; final lint/build pending |
| Props working correctly | Source inspected; expected passed data rendered in browser |
| Arrays rendered using `.map()` | Source inspected; browser counted all five services, four objectives, five benefits |
| `useState()` interaction working | Browser verified; all five selections and additional form/menu state |
| Responsive layout working | Browser verified at seven viewport widths; desktop/mobile screenshots inspected |
| Business content matches Activity 4 | Inspected; all supplied statements/offerings present with honest qualifiers |
| Project ready for submission | **Not yet**: design gate, quality checks, real contact details, and voice-over video remain |

## 7. Rubric traceability

- Component architecture (30): eight required section components plus two small reusable components under `src/components/`.
- Props and array rendering (25): centralized object arrays, meaningful parent-to-child props, reusable `ServiceCard`, stable unique keys.
- State management (20): visible service selection; additional mobile menu and contact validation state.
- Information organization (15): faithful sections with plain-CSS desktop/mobile layouts.
- Setup/code quality (10): existing Vite setup; valid JSX rendered and no captured browser errors; lint/production build remain pending design approval.

These mappings are not an awarded score or a guarantee of faculty approval.

## Verification record

- Workspace discovery: `git status --short` returned `fatal: not a git repository`; no Git actions were taken.
- Environment discovery: `node --version` returned `v22.23.2`; `npm --version` returned `10.9.8`.
- Existing listeners identified on 5173 and 5174 for this workspace; no new Vite server started.
- Browser tool initially refused real-profile mode because the default browser was not a supported Chromium browser. Recovered using isolated local Chrome with browser-harness via CDP at 127.0.0.1:9224; no user browser setting was changed. A large screenshot capture timed out; viewport captures on a fresh verification tab succeeded. The helper was corrected to send native Enter character events and allow bottom-clamped anchor positions; the final checks all pass.
- No `npm run lint`, `npm run build`, typecheck, format command, or full test suite has been run. File tools may perform their automatic syntax checks; those are not the project's pending quality gates.

### Executed browser verification

- `browser-harness < evidence/desktop-checks.py`: final execution **exit 0**, 19 targeted checks passed.
- `browser-harness < evidence/mobile-checks.py`: final execution **exit 0**, 24 additional targeted checks passed.
- Live rendered contrast calculation through browser-harness: **exit 0**, five core text/background pairs all exceed 4.5:1, recorded as one additional check.
- Aggregated `evidence/browser-results.json`: **44 unique checks, 44 passed**, five service selections exercised, seven viewport widths verified. This is targeted UI/runtime verification, not a full test suite or accessibility certification.
- Desktop viewport: 1440 × 1000. Primary mobile viewport: 390 × 844. Additional overflow measurements: 320, 360, 620, 768, 1024px.
- Observed contact resource count remained 22 before and after submission; no form navigation occurred. Runtime error/console-error/unhandled-rejection capture was empty. No cross-origin page resources were observed.
- Core contrast ratios from computed browser colors: heading 13.59:1; body on white 7.00:1; body on neutral 6.53:1; primary button 5.53:1; selection label 6.83:1.
- Sample invoice total in both preview instances: PHP 4,000.00, calculated from fictional sample line items. This is not plan pricing.
- Final screenshots in `evidence/` were visually inspected, including hero, invoice, services, purpose/objectives, benefits, and contact states.

### Remaining approval/submission gates

1. Explicit **design approval** from the user (blueprint approval is not design approval).
2. After approval, execute `npm run lint` and `npm run build`, address scoped failures, then recheck the app and record actual results here.
3. Resolve the three labeled contact placeholders with team-supplied details.
4. Record and review the required system demonstration with voice-over using `DEMO-SCRIPT.md`; record the video path and submission evidence. **No video was recorded during browser verification.**

Do not mark the project submission-ready until all four gates are accounted for.
