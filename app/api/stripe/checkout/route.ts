import { createCheckoutSession } from "@/lib/stripe";
export async function GET(){
  const { url } = await createCheckoutSession();
  return Response.redirect(url, 302);
}
