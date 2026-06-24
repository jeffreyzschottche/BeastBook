# BeastBook

Full-stack fitness tracking app built with Nuxt 4, Laravel, Tailwind CSS, GSAP, and Capacitor.

## Tech Stack

- **Frontend**: Nuxt 4, Vue 3, Tailwind CSS, GSAP, Pinia
- **Backend**: Laravel 12, Sanctum
- **Mobile**: Capacitor (iOS & Android)

## Project Structure

```
BeastBook/
├── backend/   # Laravel API
└── frontend/  # Nuxt 4 app
```

## Requirements

- PHP 8.2+
- Composer
- Node.js 20+
- npm/pnpm

## Backend Setup

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Mobile Build (Capacitor)

```bash
cd frontend
npm run generate
npx cap add android
npx cap add ios
npx cap sync
npx cap open android  # or ios
```

## Development

1. Start backend: `cd backend && php artisan serve`
2. Start frontend: `cd frontend && npm run dev`

## API Base URL

Configure in `frontend/.env`:

```
NUXT_PUBLIC_API_BASE_URL=http://localhost:8000/api/v1
```
