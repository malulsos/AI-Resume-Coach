import { billingPortal } from "@/lib/stripe";
export async function GET(){
  const { url } = await billingPortal();
  return Response.redirect(url, 302);
}
