# AI Resume + Interview Coach (MVP Scaffold)

## Quickstart
```bash
pnpm i # or npm install / yarn
cp .env.example .env
npx prisma db push
npm run dev
```
Visit http://localhost:3000

## What’s included
- Next.js 14 + TS (App Router)
- Auth placeholder (no OAuth wired yet)
- Minimal pages: landing, pricing, dashboard, resume, cover letter, interview, settings
- API stubs: parse-resume, parse-job, score, tailor-resume, Stripe checkout/portal/webhook (no secrets needed to boot)
- Prisma schema (User/Subscription/Document/Interview)

Wire in your own keys and swap the AI provider in `lib/ai.ts`.
