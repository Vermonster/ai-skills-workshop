# Copilot Instructions for Demo App

This repository is a workshop project for AI-assisted development exercises.

## Tech Stack
- TypeScript
- Express
- Zod
- Jest

## Code Style and Structure
- Prefer small, readable functions over deeply nested logic.
- Keep route handlers thin; move reusable logic into `src/lib` when appropriate.
- Use explicit names and avoid single-letter variables except simple loop indices.
- Preserve existing folder layout and naming conventions.

## API and Error Handling
- Validate request payloads with Zod for API endpoints.
- Return consistent JSON errors with `error` and `message` fields where possible.
- Avoid leaking internal details in error messages.

## Testing Expectations
- Add or update Jest tests for behavior changes.
- Prefer table-driven tests for input matrix scenarios.
- Include edge and negative cases for generated tests.

## Workshop Intent
- Some code is intentionally imperfect for exercises.
- When refactoring, preserve behavior unless explicitly asked to change it.
- For debugging tasks, propose a minimal safe fix and a regression test.

## Mode Guidance
- Ask mode: understand code, errors, and hypotheses.
- Plan mode: outline approach and tradeoffs before coding larger changes.
- Agent mode: implement scoped multi-file changes once plan is clear.
