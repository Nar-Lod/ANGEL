# ANGEL — Plan with purpose

A personal productivity and project planning workspace built with Next.js, designed for Vercel.

## Current preview
- Daily schedule grouped by Early morning, Morning, Mid-day, and Evening
- Day, week, and month calendar views
- Task creation, check-ins, progress indicators, and task detail panels
- Schedule import entry point (parsing/integration is not yet implemented)
- AI briefing preview and integration placeholders

## Run locally

```bash
npm install
npm run dev
```

## Roadmap
1. Parse XLSX/CSV, DOCX, and PDF schedules and map extracted events to a normalized task model.
2. Persist tasks and attachments with authentication and a database.
3. Add secure AI planning and performance analysis.
4. Connect GitHub and Google Drive through OAuth and scoped server-side access.
5. Add social publishing/reply workflows with explicit approval controls.

External integrations are placeholders in this initial UI. Do not add provider secrets to client-side code.
