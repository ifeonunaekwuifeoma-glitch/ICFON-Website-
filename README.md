# ICFON-Website-
org website 
ICFN – Canada Branch Website
============================

Monorepo containing a React + Tailwind SPA and a NestJS backend.

Project layout

```
client/  - React + Vite + Tailwind
server/  - NestJS API and static serving (production)
```

Quick start (two terminals)

1) Client

```
cd client
npm install
npm run dev
```

2) Server

```
cd server
npm install
npm run start:dev
```

Production build

```
cd client && npm install && npm run build
cd ../server && npm install && npm run build && npm start
```

The NestJS app serves the built React app via `@nestjs/serve-static` with `/api` reserved for API.

API

- POST `/api/contact` -> { name, email, message }
  - Validates the body and stores it to `server/data/contacts.json`.

Design

- Colors: primary `#006400`, white `#ffffff`, accent `#d62828`
- Font: Poppins
- SPA sections: Home, About, Programs, Contact
