import { tailorResume } from "@/lib/ai";

export async function POST(req: Request){
  const body = await req.json();
  const result = await tailorResume(body.resume, body.job);
  return new Response(JSON.stringify(result), { headers: { "content-type": "application/json" } });
}
