# Facilitator Guide

## Run of Show (90 min)

1. Context + problem framing (10 min)
2. Workflow model + prompts vs skills (20 min)
3. Live demo (20 min)
4. Hands-on exercises in pairs (30 min)
5. Debrief + adoption commitments (10 min)

## Delivery Notes

- Keep each concept tied to one engineering pain point.
- Use repo files, not slides alone, during explanations.
- Ask participants to share one reusable skill by end of session.

## Live Demo Choreography

1. Open `demo-app/src/lib/calculateBMI.ts`.
2. Prompt Copilot to generate tests in `demo-app/tests/calculateBMI.test.ts`.
3. Run `npm test` to validate and iterate.
4. Open `demo-app/src/lib/legacyRiskScore.ts` and refactor with AI.
5. Trigger debug scenario from `demo-app/src/routes/debug.ts`.
6. Convert best prompt into `demo-app/.github/skills/<skill-name>/SKILL.md`.

## Debrief Prompts

- What improved quality vs just speed?
- Which prompts were too vague?
- Which generated output violated team standards?
- What should become a shared skill immediately?

## Facilitation Risks

- If Copilot output quality drops, narrow the prompt and add constraints.
- If participants over-focus on code generation, redirect to validation and review.
- If time is short, skip Exercise 4 and keep Exercise 5.
