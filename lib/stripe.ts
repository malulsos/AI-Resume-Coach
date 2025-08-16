// Stripe placeholders; wire real keys later.
export async function createCheckoutSession() {
  return { url: "/app" };
}
export async function billingPortal() {
  return { url: "/app/settings" };
}
