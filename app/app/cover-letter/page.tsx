"use client";
import { useState } from "react";

export default function CoverLetter(){
  const [resume, setResume] = useState("");
  const [job, setJob] = useState("");
  const [tone, setTone] = useState("formal");
  const [letter, setLetter] = useState("");

  async function generate(){
    const res = await fetch("/api/tailor-resume", {method:"POST", headers:{'content-type':'application/json'}, body: JSON.stringify({ resume: {summary: resume}, job: {atsKeywords:[]} })});
    const data = await res.json();
    const text = `Dear Hiring Manager,\n\nI am excited to apply...\n\nSincerely,\nYour Name\n(Tone: ${tone}).`;
    setLetter(text);
  }

  return (
    <div className="grid">
      <div className="card">
        <h2>Cover Letter</h2>
        <textarea placeholder="Paste a short summary of your experience" value={resume} onChange={e=>setResume(e.target.value)} />
        <textarea placeholder="Paste the job ad" value={job} onChange={e=>setJob(e.target.value)} />
        <div style={{display:"flex", gap:12, alignItems:"center"}}>
          <label>Tone:</label>
          <select className="input" value={tone} onChange={e=>setTone(e.target.value)}>
            <option value="formal">Formal</option>
            <option value="warm">Warm</option>
            <option value="punchy">Punchy</option>
          </select>
          <button className="btn" onClick={generate}>Generate</button>
        </div>
      </div>
      {letter && <div className="card"><pre>{letter}</pre></div>}
    </div>
  );
}
