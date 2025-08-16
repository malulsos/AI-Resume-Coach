import Link from "next/link";
import { requireUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AppLayout({ children }:{children:React.ReactNode}){
  const user = await requireUser();
  if (!user) redirect("/login");
  return (
    <div className="container grid" style={{gridTemplateColumns:"220px 1fr", gap:24}}>
      <aside className="card" style={{height:"100%"}}>
        <h3 style={{marginTop:0}}>AI Coach</h3>
        <nav className="grid">
          <Link href="/app">Dashboard</Link>
          <Link href="/app/resume">Resume</Link>
          <Link href="/app/cover-letter">Cover Letter</Link>
          <Link href="/app/interview">Interview</Link>
          <Link href="/app/settings">Settings</Link>
        </nav>
      </aside>
      <main>{children}</main>
    </div>
  );
}
