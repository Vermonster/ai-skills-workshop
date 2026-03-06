# Demo App for AI-Assisted Development Workshop

This app is a small TypeScript + Express service designed for live AI workflow exercises.

## Quick Start

```bash
cd demo-app
npm install
npm run test
npm run dev
```

Server runs on `http://localhost:3000`.

## Exercise Targets

- `src/lib/calculateBMI.ts` + `tests/calculateBMI.test.ts` (test generation)
- `src/lib/legacyRiskScore.ts` (safe refactoring)
- `src/routes/debug.ts` + `src/lib/parseEncounterDate.ts` (debugging)
- `.github/prompts/*.prompt.md` and `.github/skills/<skill-name>/SKILL.md` (prompts vs skills)
- `.github/copilot-instructions.md` (repo-wide Copilot behavior defaults)

## API Endpoints

- `GET /health`
- `POST /api/notes`
- `GET /api/notes`
- `GET /api/notes/:id`
- `GET /api/debug/encounter-age-days?date=2026-03-01`

## Current App State and Exercise Alignment

This app is intentionally incomplete in targeted areas so participants can practice AI-assisted workflows end to end.

- Exercise 1 (test generation):
  - `src/lib/calculateBMI.ts` is simple and `tests/calculateBMI.test.ts` is intentionally under-covered.
  - Goal: generate stronger edge/negative tests and refine prompts.
- Exercise 2 (plan before code):
  - `POST /api/notes` works with baseline validation in `src/routes/notes.ts`.
  - Goal: use AI for design-first improvements (logging shape, error model, stricter behavior).
- Exercise 3 (safe refactor):
  - `src/lib/legacyRiskScore.ts` contains intentionally awkward legacy-style logic.
  - Goal: refactor for readability while preserving behavior with tests.
- Exercise 4 (debugging):
  - `GET /api/debug/encounter-age-days` has a deliberate weakness around date input handling.
  - Goal: diagnose failure paths, implement minimal safe fixes, and add regression coverage.
- Exercise 5 (prompts to skills):
  - `.github/prompts/` and `.github/skills/<skill-name>/SKILL.md` include starter assets.
  - Goal: convert successful ad-hoc prompts into reusable team skills.
