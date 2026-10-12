# FPL AI Manager

A Next.js and TypeScript foundation for an AI-assisted Fantasy Premier League manager.

## Current scope

This version contains a responsive home page, three home-page tests, and development/check commands. Team lookup, live FPL data, captain picks, and transfer recommendations are not implemented. No account credentials are requested and no automatic transfers are made. This independent project is not affiliated with the Premier League.

## Requirements

Use Node.js 22.13 or newer; Node.js 22 is the intended validation runtime. npm is required. No environment variables or paid API keys are needed for the foundation.

## Run locally

```bash
git clone https://github.com/Africanspice/fpl-ai-manager.git
cd fpl-ai-manager
git checkout feature/project-foundation
npm install
npm run dev
```

Open http://localhost:3000.

The first installation generates `package-lock.json`. Commit the generated lockfile after validating dependency resolution; future installations should use `npm ci`. A lockfile has not been generated in this repository yet, so dependency resolution is not reproducible until it is committed.

## Validation

```bash
npm run lint
npm run typecheck
npm run test:run
npm run build
```

Or run all checks with `npm run check`. For test watch mode, use `npm test`. To serve a production build, run `npm run build` followed by `npm start`.

Tests cover the application heading, honest unavailable-feature messaging, and the absence of password inputs. They do not verify browser layout or external data because neither browser automation nor FPL integration is included yet.

## Repository structure

| Path | Purpose |
| --- | --- |
| `app/page.tsx` | Foundation home page |
| `app/layout.tsx` | Root layout and metadata |
| `app/globals.css` | Responsive styling |
| `tests/home.test.tsx` | Home-page tests |
| `vitest.config.ts` | React and jsdom test configuration |
| `eslint.config.mjs` | Next.js lint rules |
| `tsconfig.json` | Strict TypeScript configuration |

## Next milestone

Connect real FPL player and fixture data, then add public team-ID lookup with input validation, caching, loading states, and error handling. Recommendations should be advisory and grounded in actual data.

## Validation status

The foundation was committed through the GitHub connector, which does not execute local npm commands. Dependency installation, lint, type-check, tests, and build must be verified before this branch is considered complete. The CI workflow upload also needs to be resolved; do not assume automated checks are active.

## Setup references

- https://nextjs.org/docs/app/getting-started/installation
- https://nextjs.org/docs/app/guides/testing/vitest
- https://nextjs.org/docs/app/api-reference/config/eslint

Setup guidance consulted on 2026-10-12.
