import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function SignupPage() {
  async function signup(formData: FormData) {
    "use server";
    const email = String(formData.get("email")||"demo@example.com");
    (await cookies()).set("demo-user", email, { httpOnly: false });
    redirect("/app");
  }
  return (
    <main className="container card">
      <h1>Create account</h1>
      <form action={signup} className="grid">
        <input className="input" name="email" placeholder="Email" />
        <button className="btn" type="submit">Sign up</button>
      </form>
    </main>
  );
}
