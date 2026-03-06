# Live Demo Script

## Setup

```bash
cd demo-app
npm install
npm run test
npm run dev
```

## Demo Flow

### 1) Generate tests
Prompt in Copilot Chat:

"Write Jest table-driven tests for `calculateBMI`.
Include edge cases for zero and negative inputs.
Preserve readable test names and explain assumptions."

### 2) Plan before coding
Prompt in Copilot Chat:

"Design a `POST /api/notes` endpoint for this Express app.
Include request validation, error responses, and logging strategy.
Return a concise plan before writing code."

### 3) Refactor safely
Prompt in Copilot Chat:

"Refactor `legacyRiskScore.ts` for readability and maintainability without changing behavior.
Then propose tests that prove parity."

### 4) Debug issue
Prompt in Copilot Chat:

"Given this stack trace and route, list top 3 root-cause hypotheses, debug steps in order,
and a minimal safe fix with a regression test."

### 5) Convert to skill
Take two successful prompts from earlier steps and convert them into new skill folders:

- `demo-app/.github/skills/<skill-name>/SKILL.md`
- `demo-app/.github/skills/<another-skill-name>/SKILL.md`

Each `SKILL.md` should include:
- frontmatter with `name` and `description`
- role
- constraints/standards
- output contract
- quality checks
