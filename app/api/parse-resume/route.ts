import { parseResume } from "@/lib/ai";

export async function POST(req: Request){
  const text = await req.text();
  const parsed = await parseResume(text);
  return new Response(JSON.stringify(parsed), { headers: { "content-type": "application/json" } });
}
