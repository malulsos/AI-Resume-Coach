"use client";
import { useState } from "react";

export default function ResumePage(){
  const [raw, setRaw] = useState("");
  const [parsed, setParsed] = useState<any>(null);
  const [job, setJob] = useState("");
  const [score, setScore] = useState<any>(null);
  const [tailored, setTailored] = useState<any>(null);

  async function handleParse(){
    const r = await fetch("/api/parse-resume", {method:"POST", body: raw});
    setParsed(await r.json());
  }
  async function handleJob(){
    const r = await fetch("/api/parse-job", {method:"POST", body: job});
    setScore(null); setTailored(null);
    const j = await r.json();
    if (parsed?.structured){
      const s = await fetch("/api/score", {method:"POST", headers:{'content-type':'application/json'}, body: JSON.stringify({ resume: parsed.structured, job: j })});
      setScore(await s.json());
    }
  }
  async function handleTailor(){
    const r = await fetch("/api/tailor-resume", {method:"POST", headers:{'content-type':'application/json'}, body: JSON.stringify({ resume: parsed.structured, job: score.job })});
    setTailored(await r.json());
  }

  return (
    <div className="grid">
      <div className="card">
        <h2>Resume</h2>
        <textarea placeholder="Paste your resume text here..." value={raw} onChange={e=>setRaw(e.target.value)} />
        <button className="btn" onClick={handleParse}>Parse Resume</button>
      </div>
      <div className="card">
        <h3>Job Ad</h3>
        <textarea placeholder="Paste the job ad here..." value={job} onChange={e=>setJob(e.target.value)} />
        <button className="btn" onClick={handleJob}>Analyze Job</button>
      </div>
      {parsed && <div className="card"><pre>{JSON.stringify(parsed, null, 2)}</pre></div>}
      {score && <div className="card"><h3>Match Score: {score.score}/100</h3><pre>{JSON.stringify(score, null, 2)}</pre><button className="btn" onClick={handleTailor}>Tailor Resume</button></div>}
      {tailored && <div className="card"><pre>{JSON.stringify(tailored, null, 2)}</pre></div>}
    </div>
  );
}
