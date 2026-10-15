# DevJobs

DevJobs is a modern remote-tech job board built with React, TypeScript, Vite, Tailwind CSS, TanStack Query, and React Router.

## Features

- Interchangeable Remotive API and local demo job listings
- Search by keyword and category
- Filter by job type and region
- Save favorite jobs in localStorage
- Responsive dashboard and job details experience
- Clean portfolio-oriented UI built with reusable components

## Data Sources

**API Mode:** Fetches real remote jobs from Remotive.

**Demo Mode:** Uses fictional sample job listings for portfolio demonstration. Demo listings are not real vacancies and applications are unavailable.

## Environment Configuration

Set the data source before starting the development server:

```env
VITE_DATA_SOURCE=api
```

Use `VITE_DATA_SOURCE=mock` to run locally with the sample listings. If the variable is missing or has an unsupported value, the app defaults to API mode.

For Vercel, add `VITE_DATA_SOURCE` under the project's Environment Variables, selecting `api` or `mock` for the desired deployment. `VITE_` variables are embedded in the client bundle at build time, so changing this value in Vercel requires a new deployment.

## Scripts

```bash
npm install
npm run dev
npm test
npm run build
npm run lint
```

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- TanStack Query
- Lucide React
