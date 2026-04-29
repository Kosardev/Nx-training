Nx Fullstack Practice Project
This repository is a small fullstack practice project built with Nx.

The goal of this project was to explore the Nx monorepo workflow and experiment with a simple full‑stack setup.

It includes:

Frontend: Next.js
Backend: Express
Monorepo tooling: Nx
This project was also my first hands‑on experience writing a backend with Express inside an Nx workspace.

Project Structure
The workspace follows a typical Nx monorepo structure:

apps/

frontend → Next.js application

backend → Express API server

packages/

shared → shared TypeScript utilities used by apps

Features
Simple form page available at:
text
/user
When you open this route in the frontend, you can submit data through the form.

The backend stores submitted entries in a local JSON file (db.json).
Demonstrates frontend → backend communication inside an Nx workspace.
Shows how to structure shared code using libraries in Nx.
Running the Project
Install dependencies:

text
npm install
Run the frontend:

text
npx nx serve frontend
Run the backend:

text
npx nx serve backend
After starting both services, open the frontend and navigate to:

text
http://localhost:3000/user
to test the form.

Useful Nx Commands
Run a task for a specific project:

text
npx nx <target> <project>
Examples:

Run the frontend:

text
npx nx serve frontend
Run the backend:

text
npx nx serve backend
Build a project:

text
npx nx build <project>
Visualize the dependency graph of the workspace:

text
npx nx graph
Reset Nx cache:

text
npx nx reset
Useful Nx Links
Nx Documentation

https://nx.dev

Nx Concepts

https://nx.dev/concepts

Nx Task Running

https://nx.dev/features/run-tasks

Nx Plugins

https://nx.dev/concepts/nx-plugins

Purpose of This Project
This project was created mainly for:

Learning Nx monorepo architecture
Practicing Next.js + Express integration
Experimenting with shared libraries inside Nx
Getting hands‑on experience building a simple fullstack setup
