# TS_Template 🚀

**Simple TypeScript + Express backend template**

---

## 🔎 Project overview
A minimal TypeScript backend using Express and TypeScript. This repo demonstrates a small HTTP server, environment-based configuration with `dotenv`, and a simple route structure mounted under `/api`.

## ✅ What’s included
- Express server scaffolded in `src/server.ts`.
- Environment-based server config in `src/config/index.ts` (reads `PORT` from `.env`, defaults to `3000`).
- `GET /api/v1/ping` — returns `Pong Hello, TypeScript with Express!` (`src/controllers/ping.ts`).
- `GET /api/v1/ping/health` — simple health check that returns `200 OK`.
- `src/routers/v1` and a placeholder `src/routers/v2` (for future versioning).
- `dotenv` is added as a dependency and `.env` is listed in `.gitignore`.

## ▶️ How to run (development)
1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the server directly with `ts-node` (development):

   ```bash
   npx ts-node src/server.ts
   ```

   Or add a convenience script to `package.json`:

   ```json
   "scripts": {
     "dev": "ts-node src/server.ts",
     "dev:watch": "nodemon --watch src --exec \"ts-node\" src/server.ts",
     "build": "tsc",
     "start": "node dist/index.js"
   }
   ```

3. Verify endpoints:

   - `GET http://localhost:3000/api/v1/ping` → `Pong Hello, TypeScript with Express!`
   - `GET http://localhost:3000/api/v1/ping/health` → `200 OK`

4. To change port, create a `.env` file at the project root:

   ```env
   PORT=4000
   ```

   (Note: `.env` is ignored by git — see `.gitignore`.)

## ⚠️ Notes & known issues
- `tsconfig.json` is configured for a CommonJS/Node-friendly setup (`module: "commonjs"`, `esModuleInterop: true`) so `import express from 'express'` works under `ts-node`.
- If you prefer native ESM, add `"type": "module"` to `package.json` and switch TypeScript/ts-node flags accordingly.

## 🔭 Suggested next steps
- Add `dev`/`dev:watch` scripts (example above) for local development convenience.
- Add tests (Jest/Vitest) and a CI workflow (GitHub Actions).
- Add logging, request validation, and API docs (e.g., OpenAPI/Swagger) for growth.
- Implement more endpoints and sample request/response schemas.

## 🛠 Troubleshooting
- If you see `express_1.default is not a function` — ensure `esModuleInterop` is set in `tsconfig.json`.
- If the server does not start, check that `PORT` is set correctly and not already in use.

## 📄 Project files of interest
- `src/server.ts` — application entry, registers `/api/v1` and `/api/v2` routers
- `src/config/index.ts` — `serverConfig` (dotenv-based PORT)
- `src/controllers/ping.ts` — ping handler
- `src/routers/v1/ping.router.ts` — ping routes and health check
- `tsconfig.json` — TypeScript configuration
- `package.json` — dependencies and scripts

---

If you want, I can also add the `dev` and `dev:watch` scripts to `package.json` and add a simple `.env.example` file — tell me which you'd like me to add.