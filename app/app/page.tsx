export default function AppHome(){
  return (
    <div className="grid">
      <div className="card">
        <h1>Welcome 👋</h1>
        <p>Start by uploading your resume or pasting a job ad.</p>
      </div>
      <div className="grid grid-3">
        <div className="card"><h3>1. Parse Resume</h3><p>Extract structure from your resume.</p></div>
        <div className="card"><h3>2. Tailor to Job</h3><p>Rewrite bullets to match keywords.</p></div>
        <div className="card"><h3>3. Practice Interview</h3><p>Get STAR answers and feedback.</p></div>
      </div>
    </div>
  );
}
