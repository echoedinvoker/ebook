import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { STRIPE_API_KEY } from '$env/static/private'
import { PUBLIC_FRONTEND_URL } from '$env/static/public'
import Stripe from "stripe";

const stripe = new Stripe(STRIPE_API_KEY)

export const POST: RequestHandler = async ({ request }) => {
  try {
    const requestBody = await request.json();
    const { priceId: price, quantity } = requestBody;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price, quantity }],
      mode: 'payment',
      success_url: `${PUBLIC_FRONTEND_URL}/checkout/success`,
      cancel_url: `${PUBLIC_FRONTEND_URL}/checkout/failure`
    })

    return json({ sessionId: session.id })
  } catch (error: any) {
    return json({ error }, { status: 500 })
  }
}
