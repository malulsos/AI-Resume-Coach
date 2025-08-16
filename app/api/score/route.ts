import { scoreMatch } from "@/lib/ai";

export async function POST(req: Request){
  const body = await req.json();
  const result = await scoreMatch(body.resume, body.job);
  return new Response(JSON.stringify({ ...result, job: body.job }), { headers: { "content-type": "application/json" } });
}
