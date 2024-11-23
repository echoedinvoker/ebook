<script lang="ts">
	import phoneCover from '$assets/phone_cover.png';
	import bookCover from '$assets/book_cover.png';
	import Button from './Button.svelte';
	import type { Snippet } from 'svelte';

	interface HeroSectionProps {
		children?: Snippet;
	}

	let { children }: HeroSectionProps = $props();
</script>

<section class="hero">
	<div class="hero-showcase text-center bold">
		<h1 class="purple">MOVE TO</h1>
		<h1 class="purple mb-xs">SPAIN</h1>
		<h4 class="italic semi-bold">There's no need to make the same mistakes I made.</h4>
		<img class="book-cover" src={bookCover} alt="" />
		<img class="phone-cover" src={phoneCover} alt="" />
	</div>
	<div class="hero-text white text-center">
		{#if children}
			{@render children()}
		{:else}
			<h1>THIS EBOOK WILL</h1>
			<h1>SAVE YOUR MONEY,</h1>
			<h1 class="mb-m">TIME & NERVES</h1>
			<p class="light-grey mb-l">
				I moved to Spain in 2017 and I made a lot of mistakes. I lost a lot of money, time and
				nerves. I don't want you to make the same mistakes. That's why I wrote this ebook. It will
				save you a lot of money, time and nerves. It will help you to move to Spain smoothly and
				without any problems.
			</p>
			<Button>Get the ebook</Button>
		{/if}
	</div>
</section>

<style>
	.hero {
		display: flex;
		height: 100vh;
		overflow-y: hidden;
	}

	.hero-showcase {
		position: relative;
		width: 50%;
		padding: 100px 16px 0 16px;
		background: linear-gradient(135deg, #e2cbff, #e2cbff 25%, #deeaff 50%, #ece5ff 75%, #927bee);
	}

	.hero-text {
		width: 50%;
		padding: 100px 5%;
		background-color: black;
	}

	.book-cover {
		position: absolute;
		right: 2%;
		bottom: 0;
		transform: translateY(30%);
	}

	.phone-cover {
		position: absolute;
		right: 52%;
		bottom: 0;
		transform: translateY(27%);
	}
</style>
