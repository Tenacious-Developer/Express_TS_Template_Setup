# TS_Template 🚀

**Simple TypeScript + Express backend template**

## 🔎 Project overview
A minimal TypeScript backend using Express. This repo demonstrates a small HTTP server and the TypeScript configuration needed to run it with `ts-node` during development.

## ✅ What we have done so far
- Added a minimal Express server in `src/server.ts` with a `/ping` route that returns `Pong Hello, TypeScript with Express!`.
- Configured TypeScript in `tsconfig.json` and adjusted settings to run with `ts-node`:
  - Set `"module": "commonjs"` and `"moduleResolution": "node"` to work with `ts-node`/Node (CommonJS).
  - Disabled `"verbatimModuleSyntax"` (set to `false`) to allow TS imports in a CommonJS runtime.
  - Enabled interoperability flags: `"esModuleInterop": true` and `"allowSyntheticDefaultImports": true` to avoid runtime import issues with CommonJS packages like Express.
- Installed dependencies:
  - `express` (runtime)
  - Dev: `typescript`, `ts-node`, `@types/express`, `@types/node`, `nodemon`.

## ▶️ How to run (development)
1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the server directly with `ts-node`:

   ```bash
   npx ts-node src/server.ts
   ```

3. Open `http://localhost:3000/ping` to verify the server responds.

> Tip: Add a short `package.json` script for convenience (example below).

```json
"scripts": {
  "dev": "ts-node src/server.ts",
  "start": "node dist/index.js",
  "build": "tsc"
}
```

## ⚠️ Known issue that was fixed
- Error: `ECMAScript imports and exports cannot be written in a CommonJS file under 'verbatimModuleSyntax'` caused by `verbatimModuleSyntax` + `module: "nodenext"`. Fix applied: switched to CommonJS module settings and turned off `verbatimModuleSyntax` so `import express from 'express'` runs under `ts-node`.

If you prefer to use native ESM instead, we can revert to ESM settings and add `"type": "module"` to `package.json` and run `ts-node --esm`.

## 🔭 Next steps (suggested)
- Add `dev` script to `package.json` and optional `nodemon` setup for auto-reload.
- Add a simple test setup (e.g., Jest or Vitest).
- Add build & start scripts and CI (GitHub Actions) for automated checks.
- Add more routes and small request/response examples.

## 🛠 Troubleshooting
- If you see `express_1.default is not a function` — ensure `"esModuleInterop": true` is set in `tsconfig.json`.
- If you want true ESM behavior, set `"type": "module"` in `package.json`, adjust TS settings, and use `ts-node` with `--esm`.

## 📄 Project files of interest
- `src/server.ts` — Express server
- `tsconfig.json` — TypeScript configuration
- `package.json` — dependencies and scripts

---

If you'd like, I can also add the `dev` script and a `.gitignore` (if missing) next — just tell me which you'd prefer and I'll add it.