# Exercise 4: Debugging with AI

## Goal
Use AI to diagnose and fix an error path.

## Scenario
`GET /api/debug/encounter-age-days` can fail when date input is bad.

## Suggested Prompt
"Given this route and stack trace, provide top 3 root-cause hypotheses,
ordered debug steps, and a minimal safe fix with a regression test."

## Success Criteria
- Participants articulate why the bug occurs.
- Fix includes validation.
- Regression test is added.
