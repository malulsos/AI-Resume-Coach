import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  async function login(formData: FormData) {
    "use server";
    const email = String(formData.get("email")||"demo@example.com");
    (await cookies()).set("demo-user", email, { httpOnly: false });
    redirect("/app");
  }
  return (
    <main className="container card">
      <h1>Log in</h1>
      <form action={login} className="grid">
        <input className="input" name="email" placeholder="Email (anything logs you in for demo)" />
        <button className="btn" type="submit">Continue</button>
      </form>
      <p style={{marginTop:12}}>No account? <Link href="/signup">Create one</Link></p>
    </main>
  );
}
