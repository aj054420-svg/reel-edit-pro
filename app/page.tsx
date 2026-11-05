"use client";
import Editor from "../components/Editor";
export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <header className="h-14 border-b border-zinc-800 flex items-center px-4 justify-between bg-zinc-900">
        <h1 className="font-bold">ReelEdit Pro FREE</h1>
      </header>
      <Editor />
    </main>
  );
}
