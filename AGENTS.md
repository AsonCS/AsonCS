# AGENTS.md

This monorepo is a full-stack Next.js application built with Turbo and organized for agent-friendly, clean-architecture development.

## Project context
- Package manager: npm
- Primary app: apps/frontend
- Build: npm run build
- Test: npm run test
- Lint/type-check: npm run lint && npm run check-types

## Skill loading
Load the following skills only when relevant:
- [Next.js app conventions](.agents/skills/nextjs.md)
- [Clean architecture and testing](.agents/skills/architecture.md)

## Working conventions
- Prefer small, focused changes with clear intent.
- Keep the root guidance lean; place domain-specific instructions in the skill files above.
- Follow TDD for new business logic and behavior changes.
- Avoid introducing Pages Router patterns or barrel files in app code.
