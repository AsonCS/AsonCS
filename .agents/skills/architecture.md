# Clean architecture and testing skill

## Purpose
Use these rules when implementing business logic, application services, or domain rules in this repository.

## Architectural rules
- Keep business logic in the domain layer and use cases layer, not inside Next.js route handlers or UI components.
- Define interfaces for external dependencies and inject implementations from the infrastructure layer.
- Use dependency injection so the domain remains framework-agnostic and easy to test.
- Keep framework concerns (Next.js, React, Firebase, CMS adapters) in infrastructure or adapter modules.
- Prefer small, composable use cases that represent user intentions rather than broad service classes.

## Separation of concerns
- Domain: entities, value objects, business rules, and core types.
- Use cases: orchestration of domain logic for a specific feature or action.
- Interfaces: abstractions for repositories, gateways, providers, and other collaborators.
- Infrastructure: concrete implementations for databases, APIs, storage, CMS, and framework adapters.

## Testing workflow
- Follow TDD: write or update a test first, see it fail, implement the minimal fix, and refactor.
- Favor unit tests for domain rules and use cases.
- Add integration tests for adapters and boundary behavior when needed.
- Keep tests deterministic and avoid hidden framework coupling.

## Implementation guidance
- Prefer explicit contracts and typed inputs/outputs.
- Make failure modes visible through typed error results.
- Keep side effects at the edges of the system, not in the core domain.
- When introducing a new capability, start with a failing test and then implement the smallest change that satisfies it.

## Avoid
- Putting repository calls or HTTP logic directly inside UI components.
- Mixing domain logic with Next.js route code or server actions.
- Creating large god objects that combine multiple responsibilities.
- Writing framework-specific tests that do not validate behavior.
