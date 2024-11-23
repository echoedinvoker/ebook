<script lang="ts">
	import chevronDown from '$assets/icons/chevron-down.svg';

	interface FaqItemProps {
		faq: {
			question: string;
			answer: string;
		};
		isExpanded: boolean;
		[key: string]: any;
	}

	let { faq, isExpanded, ...props }: FaqItemProps = $props();
</script>

<button class="container" class:container-expanded={isExpanded} {...props}>
	<div class="question-and-answer">
		<p class="question mb-s">{faq.question}</p>
		<p class="answer">{faq.answer}</p>
	</div>
	<img src={chevronDown} class="chevron" alt="" />
</button>

<style>
	.container {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: 12px 0;
		border-bottom: 1px solid grey;
		text-align: left;
		width: 100%;
	}

	.question-and-answer {
		flex-grow: 1;
	}

	.answer {
		max-height: 0;
		overflow: hidden;
		opacity: 0;
		transition:
			max-height 0.3s ease-out,
			opacity 0.3s ease-out;
	}

	button img {
		width: 24px;
		height: 24px;
		transition: transform 0.3s linear;
	}

	.question {
		font-weight: bold;
	}

	.container-expanded img {
		transform: rotate(180deg);
	}

	.container-expanded .answer {
		max-height: 50px;
		opacity: 1;
	}
</style>
