<script>
	import { goto } from '$app/navigation';
	import { ArrowRight } from 'lucide-svelte';
	import DecorativeElements from '../../../components/decorative-elements.svelte';
	import Loader from '../../../components/loader.svelte';
	import NoRepos from '../../../components/no-repos.svelte';
	import RepoCard from '../../../components/repoCard.svelte';
	let { data } = $props();
	let username = $state('');
	console.log(data);
	const handleUserName = () => {
		if (username.trim()) {
			goto(`/repos/${username}`);
		}
	};

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			handleUserName();
		}
	};
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
	<div class="mx-auto max-w-4xl">
		<!-- Header Section -->
		<div class="mb-8 text-center">
			<h1 class="mb-2 text-4xl font-bold text-white">GitHub Repository Explorer</h1>
			<p class="text-gray-300">Discover and explore GitHub repositories</p>
		</div>

		<!-- Search Section -->
		<div
			class="mb-8 rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-lg"
		>
			<div class="flex flex-col gap-4 sm:flex-row">
				<div class="relative flex-1">
					<input
						type="text"
						bind:value={username}
						onkeypress={handleKeyPress}
						placeholder="Enter GitHub username"
						class="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-purple-500 focus:outline-none"
					/>
				</div>

				<button
					onclick={handleUserName}
					disabled={!username.trim()}
					class="transform rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold whitespace-nowrap text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-purple-700 hover:to-pink-700 hover:shadow-xl active:scale-95 disabled:cursor-not-allowed disabled:from-gray-600 disabled:to-gray-700 disabled:hover:scale-100"
				>
					<span class="flex items-center justify-center gap-2">
						<ArrowRight />
						Search
					</span>
				</button>
			</div>
		</div>

		<!-- Results Section -->
		<div
			class="overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-lg"
		>
			{#await data.repos}
				<!-- Loading State -->
				<Loader />
			{:then repos}
				<!-- Success State -->
				<RepoCard username={data.username} {repos} />

				{#if repos.length <= 0}
					<NoRepos />
				{/if}
			{:catch error}
				<!-- Error State -->
				<div class="flex flex-col items-center justify-center py-16">
					<div class="mb-6 rounded-full border border-red-500/20 bg-red-500/10 p-4">
						<svg
							class="h-12 w-12 text-red-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							></path>
						</svg>
					</div>
					<h2 class="mb-2 text-2xl font-semibold text-white">Error Loading Repositories</h2>
					<p class="max-w-md text-center text-red-300">{error.message}</p>
					<button
						onclick={() => window.location.reload()}
						class="mt-4 rounded-lg bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
					>
						Try Again
					</button>
				</div>
			{/await}
		</div>
		<DecorativeElements />
	</div>
</div>
