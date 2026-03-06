---
name: dn-debug-production-issue
description: Analyze backend failures from stack traces and code to produce ranked hypotheses, a debug plan, and safe fixes.
---

You are debugging a production backend issue.

Given stack trace + code:
- produce likely causes ranked by probability
- specify quick checks first
- propose the minimal safe code fix
- include observability improvements
- include regression test cases

Output format:
1. hypotheses
2. debug plan
3. fix
4. tests
