# Actual browser-verification evidence

This folder is verification support, not part of the application's runtime. The app requires only the dependencies in `package.json`. Python/browser-harness are optional agent-side tools for repeating these targeted checks, not a new service or application dependency.

## Results

- `browser-results.json`: 44 unique targeted checks, all passed in the final verified run.
- `desktop-checks.py`: 19 desktop checks; actual accessibility-tree element lookup and coordinate clicks, keyboard events, form input, assertions, and viewport screenshots.
- `mobile-checks.py`: 24 additional checks; mobile menu and contact interactions plus seven responsive widths. Run after desktop checks; it appends to the same JSON evidence file.
- One additional contrast check was executed through browser-harness using live computed page colors and the WCAG relative-luminance calculation.

These are targeted visual/runtime checks, not lint, a production build, a full test suite, a full accessibility audit, or a recorded demonstration video.

## Screenshots

Final desktop/mobile hero, invoice demo, service selection, contact validation/feedback, and mobile menu screenshots are saved here. Additional desktop overview, mission/vision, objectives, and why-choose-us screenshots support content/layout review.

## Local verification environment actually used

- Reused `http://localhost:5173/`; did not start another Vite server.
- Isolated headless local Chrome; personal profiles and default-browser settings untouched.
- CDP endpoint: `http://127.0.0.1:9224`.
- `BU_NAME=solobill`, `BU_CDP_URL=http://127.0.0.1:9224`.
- `BH_HOME=C:/Users/WINDOWS 10/Documents/SoloBill/node_modules/.cache/solobill-harness`.
- `BH_RECORD=0`: these runs captured screenshots, **not video**.
- Chrome's verification profile lives under the project's `node_modules/.cache/solobill-browser` and is not an application asset.

The final commands were:

```sh
browser-harness < evidence/desktop-checks.py
browser-harness < evidence/mobile-checks.py
```

Both returned exit code 0 in the final run. Early helper runs encountered a screenshot timeout, an overly strict bottom-anchor assertion, and keyboard-event/instrumentation issues; these were corrected in the verification helper. Only the final verified results are used for the approval handoff.

No `npm run lint`, `npm run build`, formatting command, typecheck, or full test suite was run before design approval. The file tools' automatic syntax checks are separate from those pending quality gates.
