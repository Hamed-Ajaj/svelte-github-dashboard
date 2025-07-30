<script>
	import { goto } from '$app/navigation';
	import { Github, Earth, ArrowLeft } from 'lucide-svelte';
	import Loader from '../../../../../components/loader.svelte';
	import StatsCard from '../../../../../components/stats-card.svelte';
	import UsedLanguagesCard from '../../../../../components/used-languages-card.svelte';
	let { data } = $props();
</script>

<div
	class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 text-white"
>
	<div class="mx-auto max-w-4xl">
		{#await data.repo}
			<!-- Loading State -->
			<Loader />
		{:then repo}
			<main class="p-2 md:p-8">
				<button
					onclick={() => goto(`/repos/${data.user}`)}
					class="group my-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white/20 hover:shadow-lg focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent focus:outline-none"
				>
					<ArrowLeft />
					Back to Repositories
				</button>
				<header class="mx-auto max-w-4xl">
					<!-- Main repository info card -->
					<div
						class="mb-6 overflow-hidden rounded-2xl border border-gray-700/50 bg-white/5 shadow-2xl backdrop-blur-sm"
					>
						<!-- Header section with repo name and links -->
						<div
							class="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-3 text-white md:px-8 md:py-6"
						>
							<div class="mb-4 flex items-center justify-between">
								<h1 class="text-3xl font-bold tracking-tight">{repo.full_name}</h1>
								<div class="flex items-center gap-3">
									<a
										href={repo.svn_url}
										target="_blank"
										alt="github page"
										class="rounded-full bg-white/20 p-3 backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white/30"
									>
										<Github size={24} />
									</a>
								</div>
							</div>
							<!-- Repository description if available -->
							{#if repo.description}
								<p class="text-lg leading-relaxed text-blue-100">{repo.description}</p>
							{/if}
						</div>
						<!-- Owner info section -->
						<div class="px-8 py-6">
							<div class="flex items-center gap-4">
								{#if repo.owner.avatar_url}
									<img
										src={repo.owner.avatar_url}
										alt="{repo.owner.login} avatar"
										class="h-12 w-12 rounded-full border-2 border-gray-600 shadow-sm"
									/>
								{/if}
								<div>
									<p class="text-sm font-medium text-gray-400">Repository Owner</p>
									<h2 class="text-xl font-semibold">
										<a
											href={repo.owner.html_url}
											target="_blank"
											class="text-white transition-colors duration-200 hover:text-purple-400 hover:underline"
										>
											{repo.owner.login}
										</a>
									</h2>
								</div>
							</div>
						</div>
					</div>
					<!-- Repository stats (if available) -->
					{#if repo.stargazers_count !== undefined || repo.forks_count !== undefined || repo.language}
						<div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
							<!-- stars count  -->
							{#if repo.stargazers_count !== undefined}
								<StatsCard stateCount={repo.stargazers_count} name={'stars'} icon={'⭐'} />
							{/if}

							<!-- forks count  -->
							{#if repo.forks_count !== undefined}
								<StatsCard stateCount={repo.forks_count} name={'Forks'} icon={'🍴'} />
							{/if}

							<!-- language used -->
							{#if repo.language}
								<div
									class="rounded-lg border border-gray-700/50 bg-white/5 p-6 text-center shadow-lg backdrop-blur-sm"
								>
									<div class="mb-1 text-2xl font-bold text-green-400">💻</div>
									<div class="text-lg font-bold text-white">{repo.language}</div>
									<div class="text-sm text-gray-400">Primary Language</div>
								</div>
							{/if}
						</div>
					{/if}
					<!-- Additional info tags -->
					<div class="flex flex-wrap gap-2">
						{#if repo.private}
							<span
								class="rounded-full border border-red-500/30 bg-red-500/20 px-3 py-1 text-sm font-medium text-red-300"
								>Private</span
							>
						{:else}
							<span
								class="rounded-full border border-green-500/30 bg-green-500/20 px-3 py-1 text-sm font-medium text-green-300"
								>Public</span
							>
						{/if}
						{#if repo.fork}
							<span
								class="rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-300"
								>Fork</span
							>
						{/if}
						{#if repo.archived}
							<span
								class="rounded-full border border-gray-500/30 bg-gray-500/20 px-3 py-1 text-sm font-medium text-gray-300"
								>Archived</span
							>
						{/if}
						{#if repo.created_at}
							<span
								class="rounded-full border border-purple-500/30 bg-purple-500/20 px-3 py-1 text-sm font-medium text-purple-300"
							>
								Created {new Date(repo.created_at).getFullYear()}
							</span>
						{/if}
					</div>
				</header>
			</main>
		{/await}

		<!-- Enhanced Languages Section -->
		<section class="mt-8 mb-8">
			{#await data.languages}
				<!-- Loading State for Languages -->
				<div
					class="overflow-hidden rounded-2xl border border-gray-700/50 bg-white/5 shadow-2xl backdrop-blur-sm"
				>
					<div class="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6 text-white">
						<h2 class="text-2xl font-bold tracking-tight">Language Breakdown</h2>
						<p class="mt-2 text-indigo-100">Analyzing repository composition...</p>
					</div>
					<div class="flex flex-col items-center justify-center py-16">
						<div class="relative">
							<div
								class="h-12 w-12 animate-spin rounded-full border-4 border-purple-500/30 border-t-purple-500"
							></div>
						</div>
						<h3 class="mt-6 mb-2 text-xl font-semibold text-white">Loading Languages</h3>
						<p class="text-gray-300">Fetching language statistics...</p>
					</div>
				</div>
			{:then languages}
				<div
					class="overflow-hidden rounded-2xl border border-gray-700/50 bg-white/5 shadow-2xl backdrop-blur-sm"
				>
					<div class="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6 text-white">
						<h2 class="text-2xl font-bold tracking-tight">Language Breakdown</h2>
						<p class="mt-2 text-indigo-100">
							Distribution of programming languages in this repository
						</p>
					</div>
					<div class="flex flex-col items-center justify-center px-8 py-12">
						<!-- Language Legend/Summary -->
						<div class="mt-8 w-full max-w-2xl">
							<h3 class="mb-4 text-center text-lg font-semibold text-gray-200">Languages Used</h3>
							<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
								{#each Object.entries(languages) as [language, bytes]}
									<UsedLanguagesCard {language} {bytes} />
								{/each}
							</div>
						</div>
					</div>
				</div>
			{:catch error}
				<!-- Error State for Languages -->
				<div
					class="overflow-hidden rounded-2xl border border-gray-700/50 bg-white/5 shadow-2xl backdrop-blur-sm"
				>
					<div class="bg-gradient-to-r from-red-600 to-pink-600 px-8 py-6 text-white">
						<h2 class="text-2xl font-bold tracking-tight">Language Breakdown</h2>
						<p class="mt-2 text-red-100">Failed to load language data</p>
					</div>
					<div class="flex flex-col items-center justify-center py-16">
						<div class="mb-4 text-4xl">⚠️</div>
						<h3 class="mb-2 text-xl font-semibold text-white">Unable to Load Languages</h3>
						<p class="text-gray-300">Please try refreshing the page</p>
					</div>
				</div>
			{/await}
		</section>
	</div>
</div>
