<script lang="ts">
	import { goto } from '$app/navigation';
	import { PUBLIC_PRICE_ID, PUBLIC_STRIPE_KEY } from '$env/static/public';
	import { loadStripe } from '@stripe/stripe-js';
	import type { Snippet } from 'svelte';

	interface ButtonProps {
		children: Snippet;
		[key: string]: any;
	}

	let { children, ...props }: ButtonProps = $props();

	async function onclick() {
		try {
			const stripe = await loadStripe(PUBLIC_STRIPE_KEY);

			const response = await fetch('/api/checkout', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					quantity: 1,
					priceId: PUBLIC_PRICE_ID
				})
			});

			const responseBody = await response.json();
			const { sessionId } = responseBody;

			await stripe!.redirectToCheckout({ sessionId });
		} catch (error) {
			goto('/checkout/failure');
		}
	}
</script>

<button {...props} {onclick}>
	{@render children()}
</button>

<style>
	button {
		background-color: black;
		color: white;
		padding: 20px 24px;
		font-weight: normal;
		font-size: 22px;
		text-transform: uppercase;
		transition: all 0.2s;
		border: 1px solid white;
	}

	button:hover {
		background-color: white;
		color: black;
	}
</style>
