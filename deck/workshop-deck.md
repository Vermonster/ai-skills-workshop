---
marp: true
theme: default
paginate: true
size: 16:9
title: AI-Assisted Development
description: Practical Copilot workflows for engineering teams
---

# AI-Assisted Development
## Practical Copilot Workflows for Engineering Teams
### VSCode + GitHub Copilot + CLI + Team Skills

https://github.com/Vermonster/ai-skills-workshop

---

## Why This Matters Now

- Most teams are experimenting with AI, but **not operationalizing it**.
- Current pattern: random prompting, uneven quality, **no shared standards**.

<br/>

### ⮕ Objective: move from individual wins to team-level reliability.

---

## Session Outcomes

- Introduce agentic development.
- Build a repeatable AI coding workflow.
- Exercises to practice planning, coding, testing, refactoring, and debugging with AI.

---

## The Current Failure Mode

- Ad-hoc prompts produce inconsistent code.
- Review burden increases when generated code lacks standards.
- Knowledge stays in individuals instead of scaling across the team.

---

## The New Development Loop

### Legacy:
> Think → Code → Debug → Search StackOverflow

<br/>

### New workflow:
> Plan → Prompt → Generate → Validate → Refine

<br/>

_Developers remain accountable for correctness and maintainability._

---

<style scoped>
td {
  padding: 10px 50px;
}
</style>

## Where AI Works Best

AI performs extremely well at:


| Task             | Effectiveness |
| ---------------- | ------------- |
| boilerplate code | excellent     |
| unit tests       | excellent     |
| refactoring      | very good     |
| documentation    | very good     |
| debugging help   | good          |
| domain logic     | mixed         |


---

## Quality Model

- AI output is a draft, not a decision.
- Require tests, observability, error handling, and review discipline.

<br/>

### ⮕ Rule: no generated code merges without normal engineering controls.

---

## Copilot in VSCode: Working Modes

- Inline completions for local acceleration.
- Chat for planning and multi-file changes.
- Agent/CLI patterns for larger scoped tasks.

---

## VSCode AI Mode Selection: Ask vs Plan vs Agent

- `Ask` mode: use for fast Q&A, code explanation, small edits, and clarifying errors.
- `Plan` mode: use when work is non-trivial and you want steps, tradeoffs, and review before coding.
- `Agent` mode: use for larger multi-file implementation/refactor tasks once scope and constraints are clear.

<br/>

### Rule of thumb
- Start with `Ask` to understand.
- Move to `Plan` to de-risk.
- Execute with `Agent` for scoped implementation.

---

## Prompting That Works

- Provide role + constraints + context + output format.
- Ask for assumptions and tradeoffs.
- Iterate prompts; first answer is a starting point.

---

## Prompt Example: Weak vs Strong

- Weak: 
```
write tests
```

<br/>

- Strong: 
```
write jest table-driven tests for this function, 
include edge/negative cases, and explain missing 
requirements.
```

---

## Prompts vs Skills

- Prompt: one-time instruction.
- Skill: reusable structured instruction encoding team standards.

<br/>

### ⮕ Prompt = question
### ⮕  Skill = engineered capability

---

## Practical Copilot Difference

- `.github/prompts`: invoked explicitly by developers (VSCode IDE only).
- `.github/skills`: reusable capability templates for consistent outcomes.

<br/>

### ⮕  Use prompts for speed; use skills for standards.

---

## Copilot Instructions File

- `.github/copilot-instructions.md` sets repo-wide AI guidance.
- Use it for coding standards, architecture constraints, and review expectations.
- Keep it short, specific, and aligned with existing code patterns.

<br/>

### Use this for defaults
- stack choices, naming patterns, error model, test expectations

### Do not use this for task-specific one-offs
- keep one-off requests in prompts or chat

---

## Skill Anatomy

- Role: who AI should act as.
- Constraints: stack, architecture, security, style.
- Output contract: required files/artifacts.
- Quality gates: tests, error handling, observability.

---

## Team Repository Pattern

```text
.github/
  copilot-instructions.md
  prompts/
    dn-write-tests.prompt.md
    dn-debug-stacktrace.prompt.md
  skills/
    dn-create-rest-endpoint/SKILL.md
    dn-refactor-typescript/SKILL.md
    dn-generate-migration/SKILL.md
```

---

## Live Demo Overview

- Demo app: lightweight TypeScript API with deliberate exercise targets.
- Show planning -> implementation -> tests -> refactor -> debugging.
- End by converting successful prompts into team skills.

---

## Exercise 1: Test Generation

- Generate robust tests for `calculateBMI`.
- Add edge cases: zero/negative/invalid height and weight.
- Refine into table-driven style.

---

## Exercise 2: Planning Before Coding

- Feature: clinical note endpoint.
- Prompt for architecture first: endpoint shape, validation, errors, logging.
- Implement incrementally using Copilot.

---

## Exercise 3: Refactor Legacy Logic

- Start with intentionally messy legacy scoring function.
- Ask Copilot for safe refactor preserving behavior.
- Validate with tests before and after.

---

## Exercise 4: Debugging Workflow

- Use provided stack trace and failing scenario.
- Ask AI for root-cause hypotheses and ranked debugging steps.
- Fix and add regression coverage.

---

## Exercise 5: Prompt -> Skill Conversion

- Take two successful prompts from exercises.
- Convert into `.github/skills` files with constraints and outputs.
- Share and review in small groups.

---

## Guardrails and Risk Control

- Never trust generated code without review.
- Keep secrets out of prompts.
- Watch licensing and data handling.
- Prefer small, auditable changesets.

---

## AI Maturity Model

- Level 1: random prompting.
- Level 2: personal prompt templates.
- Level 3: team prompt library.
- Level 4: shared skills + workflow automation.

---

## Metrics That Matter

- PR cycle time.
- Defect escape rate.
- Test coverage delta on generated code.
- Onboarding time to first successful change.

---

## Key Takeaways

- AI amplifies disciplined teams.
- Prompts accelerate individuals.
- Skills scale engineering standards.
- Treat AI workflows as production infrastructure.

---

## Optional Expansion: CLI Assistants

- Repository analysis for quicker codebase understanding.
- Automated refactoring and migration scaffolds.
- Scriptable workflows for repeatable tasks.

---

## Optional Expansion: Skill Governance

- Version and review skills like production code.
- Assign owners for high-impact skills.
- Track skill effectiveness over time.

---

## Optional Expansion: Anti-Patterns

- Overly broad prompts.
- Skipping tests on generated code.
- Treating AI output as authoritative.

---

## Optional Expansion: Skill Review Rubric

- Clarity of role and constraints.
- Output contract completeness.
- Quality gates and safety checks.
- Reusability across teams.
