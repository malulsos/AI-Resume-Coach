import Link from "next/link";

export default function Settings(){
  return (
    <div className="grid">
      <div className="card">
        <h2>Subscription</h2>
        <p>Status: <strong>Free</strong></p>
        <div style={{display:"flex", gap:12}}>
          <Link className="btn" href="/api/stripe/checkout">Upgrade to Pro</Link>
          <Link className="btn" href="/api/stripe/portal">Manage Billing</Link>
        </div>
      </div>
    </div>
  );
}
