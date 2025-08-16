import Link from "next/link";

export default function Marketing() {
  return (
    <main className="container grid" style={{gap: 24}}>
      <section className="card">
        <h1 style={{fontSize: 36, marginBottom: 8}}>Land your next job faster.</h1>
        <p>AI that tailors your resume, writes cover letters, and coaches you for interviews.</p>
        <div style={{marginTop:16, display:"flex", gap:12}}>
          <Link className="btn" href="/login">Log in</Link>
          <Link className="btn" href="/(marketing)/pricing">See pricing</Link>
        </div>
      </section>
      <section className="grid grid-3">
        <div className="card"><h3>Smart Resume</h3><p>Upload or paste your resume, get ATS-aligned improvements.</p></div>
        <div className="card"><h3>Cover Letters</h3><p>Generate job-specific letters with adjustable tone.</p></div>
        <div className="card"><h3>Interview Coach</h3><p>Practice Q&A with STAR answers and targeted feedback.</p></div>
      </section>
    </main>
  );
}
