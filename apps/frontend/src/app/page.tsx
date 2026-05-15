import Link from 'next/link';

export default function Index() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
          Nx Fullstack Practice Project
        </div>

        <h1 className="text-5xl font-bold leading-tight mb-6">
          Next.js + Express
          <span className="block text-cyan-400">Fullstack Monorepo</span>
        </h1>

        <p className="text-slate-300 text-lg leading-8 mb-10">
          A simple fullstack practice project built with Nx monorepo
          architecture. This project demonstrates frontend and backend
          communication using Next.js, Express, and shared TypeScript libraries.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/user"
            className="rounded-xl bg-cyan-500 px-6 py-3 text-lg font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Open User Form
          </Link>

          <a
            href="https://nx.dev"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-600 px-6 py-3 text-lg font-medium text-white transition hover:border-cyan-400 hover:text-cyan-300"
          >
            Learn Nx
          </a>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
            <h3 className="mb-3 text-xl font-semibold text-cyan-400">
              Frontend
            </h3>

            <p className="text-slate-300">
              Built with Next.js and React using the Nx monorepo workflow.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
            <h3 className="mb-3 text-xl font-semibold text-cyan-400">
              Backend
            </h3>

            <p className="text-slate-300">
              Express API server handling form submissions and local storage.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
            <h3 className="mb-3 text-xl font-semibold text-cyan-400">
              Shared Package
            </h3>

            <p className="text-slate-300">
              Shared TypeScript utilities reused across applications.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
