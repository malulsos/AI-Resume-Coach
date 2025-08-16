import { parseJobAd } from "@/lib/ai";
export async function POST(req: Request){
  const ad = await req.text();
  const parsed = await parseJobAd(ad);
  return new Response(JSON.stringify(parsed), { headers: { "content-type": "application/json" } });
}
