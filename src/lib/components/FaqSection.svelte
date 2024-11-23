<script lang="ts">
	import { Button, FaqItem } from '$components';
	import twitterIcon from '$assets/icons/twitter.webp';

	const faqs = [
		{
			question: 'What is the best thing about the product?',
			answer:
				'The best thing about the product is that it is very easy to use and it is very affordable.'
		},
		{
			question: 'How long does it take to get the product?',
			answer: 'It usually takes 2-3 days to get the product.'
		},
		{
			question: 'What is the return policy?',
			answer:
				'The return policy is very simple. If you are not satisfied with the product, you can return it within 30 days of purchase.'
		},
		{
			question: 'How can I contact customer service?',
			answer: 'You can contact customer service by phone, email, or chat.'
		},
		{
			question: 'What is the warranty on the product?',
			answer: 'The product comes with a 1-year warranty.'
		}
	];

	let currentExpandedIndex = $state(-1);

	function onclick(index: number) {
		if (currentExpandedIndex === index) {
			currentExpandedIndex = -1;
		} else {
			currentExpandedIndex = index;
		}
	}
</script>

<section class="landing-page-section">
	<h2 class="mb-l">Frequently asked questions</h2>
	<div class="faq-container mb-m">
		{#each faqs as faq, index}
			<FaqItem {faq} isExpanded={currentExpandedIndex === index} onclick={() => onclick(index)} />
		{/each}
	</div>
	<div class="additional-info">
		<Button>BUY NOW</Button>
		<p>Any other questions?</p>
		<a href="https://x.com/MATT">
			<p>
				Hit me up on twitter <img src={twitterIcon} class="twitter-icon" alt="" />
			</p>
		</a>
	</div>
</section>

<style>
	.additional-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: grey;
	}
	.twitter-icon {
		width: 16px;
		height: 16px;
	}
	.additional-info a {
		text-decoration: underline;
	}
</style>
