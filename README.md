# ANGEL — Plan with purpose

A personal productivity and project-planning workspace built with Next.js App Router, TypeScript, and React for Vercel.

## Foundation
- Daily, weekly, and monthly planning views
- Task creation, completion check-ins, priorities, and progress
- Responsive dashboard with focus and planning summaries
- Browser-local persistence for the first usable prototype
- Extension points for schedule import, authenticated sync, AI planning, and integrations

## Run locally

```bash
npm install
npm run dev
```

Production: `npm run build && npm start`.

## Security boundaries
The prototype stores task data in browser local storage; it is not secure storage or a multi-device backup. Never put provider secrets in client code or `NEXT_PUBLIC_*` variables. Future server-backed features must enforce per-user authorization, validate uploads and requests, use least-privilege OAuth scopes, and keep provider tokens server-side.

## Roadmap
1. Schedule import and normalization for XLSX/CSV/DOCX/PDF, with preview and validation.
2. Authentication and persistent task/project storage with per-user authorization.
3. Server-side AI planning and performance analysis under explicit user control.
4. Google Calendar/Drive and GitHub integrations via scoped OAuth.
5. Optional publishing/reply workflows with human approval before external actions.

Integrations and AI are not active until their backend, permissions, and failure handling are implemented and tested.
