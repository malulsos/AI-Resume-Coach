export default function Pricing(){
  return (
    <main className="container grid">
      <h1 style={{fontSize:28}}>Pricing</h1>
      <div className="grid grid-2">
        <div className="card">
          <h3>Free</h3>
          <ul>
            <li>1 resume upload</li>
            <li>1 tailored rewrite</li>
            <li>5 interview questions</li>
            <li>1 cover letter</li>
          </ul>
        </div>
        <div className="card">
          <h3>Pro — $12/month</h3>
          <ul>
            <li>Unlimited uploads & rewrites</li>
            <li>Unlimited interview coaching</li>
            <li>Export PDF / DOCX</li>
            <li>Saved versions</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
