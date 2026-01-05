// app/page.tsx o pages/index.tsx
import Page from "./dashboard/page";

export default function Home() {
  return (
    <main className="bg-zinc-100 relative h-full">
      <Page />
    </main>
  );
}