"use client";
import { useState } from "react";
import { star } from "./star";

export default function InterviewPage(){
  const [role, setRole] = useState("Software Engineer");
  const [questions, setQuestions] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  function gen(){
    const base = [
      "Tell me about a time you led a project under pressure.",
      "Describe a situation where you disagreed with a stakeholder.",
      "How do you prioritize conflicting deadlines?"
    ];
    setQuestions(base);
  }

  return (
    <div className="grid">
      <div className="card">
        <h2>Interview Coach</h2>
        <input className="input" value={role} onChange={e=>setRole(e.target.value)} placeholder="Role title" />
        <button className="btn" onClick={gen}>Generate Questions</button>
      </div>
      <div className="grid">
        {questions.map(q => (
          <div className="card" key={q}>
            <strong>{q}</strong>
            <details>
              <summary>STAR Draft</summary>
              <pre>{`S: Context\nT: Task\nA: Actions\nR: Results`}</pre>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}
