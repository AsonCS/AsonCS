# Next.js agent skill

## Purpose
Use these rules when changing any Next.js app code in this repository.

## Core rules
- Use the Next.js App Router only. Do not introduce Pages Router files such as pages/* or next/router patterns.
- Prefer Server Components by default. Add `'use client'` only for interactive leaf components that require browser APIs, event handlers, or client state.
- Keep server/client boundaries explicit. Pass serializable data across boundaries and keep client components thin.
- Use server actions for mutations and form submissions. Do not add API routes for ordinary form handling.
- Return typed results from server actions, for example with a discriminated union or an explicit state object containing `success`, `error`, and `data` fields.
- Prefer data fetching on the server. Use explicit caching intent and revalidation strategy.
- For cacheable data, prefer `cache()` or `unstable_cache()` when appropriate; for invalidation use `revalidateTag()` or `revalidatePath()` as needed.
- If a framework feature requires it, use `use cache` only in supported environments and keep the intent obvious in code comments.
- Avoid barrel files such as `index.ts` in app code, especially under the Next.js app directory, because they can slow down Turbopack.
- Prefer direct imports from concrete modules rather than re-exporting through index files.

## File organization
- Put route entry points under `apps/frontend/src/app/[lang]/...`.
- Keep route layouts, page components, and route-specific UI separated.
- Put reusable UI in `apps/frontend/src/components/`.
- Put framework-specific adapters in `apps/frontend/src/lib/` or `apps/frontend/src/actions/`.

## Implementation guidance
- Favor server rendering and progressive enhancement.
- Keep client components minimal and focused on interaction.
- Use TypeScript strictly; define props and return types explicitly.
- Prefer semantic HTML and accessible components from the shared UI layer.
- Do not create unnecessary API routes when server actions can solve the problem.

## Avoid
- `getServerSideProps`, `getStaticProps`, or `pages/` route files.
- Large client components that contain data fetching and business logic.
- Hidden framework coupling inside domain logic.
- New barrel exports for app-facing modules.
