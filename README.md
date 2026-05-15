# Nx Fullstack Practice Project

This repository is a small fullstack practice project built with Nx.

The goal of this project was to explore the Nx monorepo workflow and experiment with a simple full‑stack setup using Next.js and Express inside a monorepo architecture.

---

# Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js |
| Backend | Express |
| Monorepo Tooling | Nx |
| Language | TypeScript |
| Package Manager | npm |

This project was also my first hands‑on experience building a backend application with Express inside an Nx workspace.

---

# Project Structure

```txt
apps/
  frontend   → Next.js application
  backend    → Express API server

packages/
  shared     → Shared TypeScript utilities
```

---

# Features

- Simple form page available at:

```txt
/user
```

- Submit form data from frontend to backend
- Backend stores submitted entries inside a local JSON database (`db.json`)
- Demonstrates frontend ↔ backend communication in an Nx monorepo
- Shows how to structure and share reusable code using Nx libraries
- Practice project for understanding Nx architecture and workflows

---

# Getting Started

## 1. Clone the Repository

```bash
git clone <repository-url>
```

Enter the project directory:

```bash
cd <project-folder>
```

---

## 2. Install Dependencies

```bash
npm install
```

This installs:

- Nx
- Next.js
- Express
- TypeScript
- Nx plugins
- All workspace dependencies

---

## 3. Run the Frontend

```bash
npx nx show @org/frontend
npx nx dev @org/frontend
```

Frontend URL:

```txt
http://localhost:3000
```

Form page:

```txt
http://localhost:3000/user
```

---

## 4. Run the Backend

```bash
npx nx serve backend
```

The backend creates and updates:

```txt
apps/backend/data/db.json
```

---

# Useful Nx Commands

| Purpose | Command |
|---|---|
| Install dependencies | `npm install` |
| Show all projects | `npx nx show projects` |
| Show project details | `npx nx show project frontend` |
| Run frontend | `npx nx serve frontend` |
| Run backend | `npx nx serve backend` |
| Build frontend | `npx nx build frontend` |
| Build backend | `npx nx build backend` |
| Build shared package | `npx nx build shared` |
| Run tests | `npx nx test <project>` |
| Lint project | `npx nx lint <project>` |
| Reset Nx cache | `npx nx reset` |
| Open dependency graph | `npx nx graph` |
| Run any target | `npx nx <target> <project>` |

---

# Useful Git Commands

| Purpose | Command |
|---|---|
| Clone repository | `git clone <repo-url>` |
| Check changes | `git status` |
| Add files | `git add .` |
| Commit changes | `git commit -m "message"` |
| Push changes | `git push` |
| Pull latest changes | `git pull` |

---

# Common Problems & Fixes

## Problem: Cannot find configuration for task

Example:

```txt
NX Cannot find configuration for task frontend:serve
```

### Fixes

Check available projects:

```bash
npx nx show projects
```

Check project details:

```bash
npx nx show project frontend
```

Reset Nx cache:

```bash
npx nx reset
```

Reinstall dependencies:

```bash
rm -rf node_modules package-lock.json
npm install
```

---

## Problem: Nx Plugins Missing

Check installed plugins:

```bash
npm ls @nx/next
npm ls @nx/express
```

Install missing plugin:

```bash
npm install -D @nx/next
```

---

## Problem: Node Version Issues

Recommended Node.js versions:

```txt
v20 or v22
```

Check current version:

```bash
node -v
```

---

# Nx Dependency Graph

Visualize project relationships:

```bash
npx nx graph
```

This helps understand:

- App dependencies
- Shared libraries
- Monorepo structure
- Build relationships

---

# Useful Nx Links

| Topic | Link |
|---|---|
| Nx Documentation | https://nx.dev |
| Nx Concepts | https://nx.dev/concepts |
| Nx Task Running | https://nx.dev/features/run-tasks |
| Nx Plugins | https://nx.dev/concepts/nx-plugins |
| Next.js | https://nextjs.org |
| Express | https://expressjs.com |

---

# Purpose of This Project

This project was created mainly for:

- Learning Nx monorepo architecture
- Practicing Next.js + Express integration
- Experimenting with shared libraries inside Nx
- Understanding workspace-based development
- Getting hands‑on experience building a simple fullstack setup

---

# Notes

- Always use `npx nx ...` commands instead of global Nx commands.
- If Nx behaves unexpectedly, try:

```bash
npx nx reset
```

- If the backend cannot create `db.json`, make sure the data directory exists:

```txt
apps/backend/data/
```

---

# Author

Created as a personal learning and practice project for exploring Nx fullstack development.
