# Copilot Instructions for GrooveSheet FE

These notes make AI agents productive immediately in this repo. Follow the concrete patterns below; avoid generic advice.

## Important Notes

- Do not generate md summary document unless explicitly requested.
- Do not create documents unless explicitly requested.
- Do not create. md files unless explicitly requested.

## Stack & Entry Points

- React 18 + Create React App (`react-scripts`), React Router v7, Tailwind (selective) + component CSS.
- Auth via Clerk. Provider is configured in `src/index.js` with `REACT_APP_CLERK_PUBLISHABLE_KEY` and route `/sso-callback` handled by `src/components/SSOCallback.js`.
- App shell and routes live in `src/App.js` (`/`, `/history`, `/blog`, `/about`, `/sso-callback`). Layout components: `src/components/layout/{Header,Footer}.js`.

## Dev, Build, Deploy

- Dev: `npm start` (Node 16+). CRA dev server proxies API calls via `src/setupProxy.js`.
- Build: `npm run build` outputs to `build/` (ESLint disabled via `DISABLE_ESLINT_PLUGIN=true`).
- Tests: `npm test` (CRA default; none custom present).
- Deploy: Vercel rewrites `/api/*` to Cloud Run (see `vercel.json`). Keep client code calling `'/api'` paths.

## Environment Variables

- Required: `REACT_APP_CLERK_PUBLISHABLE_KEY` (throws on startup if missing; see `src/index.js`).
- Optional toggles in code: `REACT_APP_ENABLE_ANALYTICS` (see `src/lib/constants/index.js`).
- Note on API base URLs: Multiple sources exist (`src/config.js` uses `REACT_APP_API_BASE_URL`; `src/lib/constants/index.js` uses `REACT_APP_API_URL`). Do NOT read these directly for new code. Prefer `'/api'` with the proxy/rewrite and the helpers in `src/utils/api.js`.

## API Integration Pattern (use these helpers)

- Always send authenticated requests using Clerk tokens and the helpers in `src/utils/api.js`:
  - `authenticatedFetch(url, options, getToken)` adds `Authorization: Bearer <jwt>`.
  - `uploadFileAuthenticated(file, endpoint, getToken, baseUrl = '/api')` for uploads.
  - `fetchWorkflowList(baseUrl, getToken)` → `GET /workflow/list`.
  - `fetchWorkflowStatus(baseUrl, workflowId, getToken)` → `GET /workflow/status/:id`.
- Base URL: Use `'/api'` so it works in dev (proxy) and prod (vercel rewrite).
- In components, obtain `getToken` from Clerk’s `useAuth()` and pass into helpers.

## Auth & Gating

- Auth provider: `ClerkProvider` in `src/index.js` with `afterSignOutUrl='/'`.
- UI gating: use `<SignedIn>` / `<SignedOut>` from `@clerk/clerk-react` (see `src/components/layout/Header.js`).
- Login UX: `src/components/LoginModal.js` launches OAuth (Google/Facebook/Apple) and email-code flow. When adding login entry points, call the modal via the `onLoginClick` prop as done in `Header` and `App`.
- SSO flow completes at `/sso-callback` via `AuthenticateWithRedirectCallback`.

## Networking & Proxies

- Dev: `src/setupProxy.js` forwards `'/api'` to Cloud Run with `changeOrigin`, removes the `/api` prefix, and forwards `Authorization` if present (logs "Proxying:" lines for debugging).
- Prod: `vercel.json` rewrites `'/api/:path*'` to Cloud Run and sets permissive CORS headers for those routes.

## UI/Styling Conventions

- Fonts: Hubot Sans is the primary family (see Tailwind `theme.extend.fontFamily`).
- Styling: Most components have dedicated CSS files (e.g., `Hero.css`, `Pricing.css`). Tailwind is used for utility classes where convenient.
- High z-index modals: Render with `ReactDOM.createPortal` and large z-index (see `LoginModal.js`). Apply `body.modal-open { overflow: hidden; }` when open.
- Follow colors/spacing/interaction from `docs/DESIGN_SYSTEM.md`. Example: primary blue `#012FA7` for CTAs; card backgrounds `#323033`.

## File/Module Landmarks

- Routing & shell: `src/App.js`.
- Auth wiring: `src/index.js`, `src/components/SSOCallback.js`, `src/components/LoginModal.js`.
- API helpers: `src/utils/api.js` (the source of truth for authenticated requests).
- Proxy/rewrites: `src/setupProxy.js`, `vercel.json`.
- Constants: `src/lib/constants/index.js` (navigation, feature flags, etc.).
- Config: `src/config.js` exists but avoid introducing new usages of its API base—prefer `'/api'`.

## Implementation Guidance (project-specific)

- New API calls: add small helper wrappers next to existing ones in `src/utils/api.js`, keep signatures `(baseUrl='/api', getToken)` and consistent error handling (`response.ok` with JSON error bodies containing `detail`).
- New protected screens: gate with `<SignedIn>` or check `useAuth()` and redirect to open the `LoginModal`.
- Asset paths: use `process.env.PUBLIC_URL` for images within components needing absolute paths (see `LandingPage` in `App.js`).

## Gotchas

- Env name drift: `REACT_APP_API_URL` vs `REACT_APP_API_BASE_URL`. For cross-env consistency, prefer `'/api'` + helpers instead of reading either directly.
- Router v7: use `<Routes>`/`<Route element={...}>` patterns as in `src/App.js`.

Questions or gaps? If something’s unclear (e.g., additional required envs or missing API endpoints), ask to confirm and we’ll update this file.
