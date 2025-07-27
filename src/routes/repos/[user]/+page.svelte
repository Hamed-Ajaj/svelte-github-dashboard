<script>
	import { goto } from '$app/navigation';
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
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							></path>
						</svg>
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
				<div class="flex flex-col items-center justify-center py-16">
					<div class="relative">
						<div
							class="h-12 w-12 animate-spin rounded-full border-4 border-purple-500/30 border-t-purple-500"
						></div>
					</div>
					<h2 class="mt-6 mb-2 text-2xl font-semibold text-white">Loading Repositories</h2>
					<p class="text-gray-300">Fetching the latest data...</p>
				</div>
			{:then repos}
				<!-- Success State -->
				<div class="p-6">
					<div class="mb-6 flex items-center gap-3">
						<svg
							class="h-6 w-6 text-green-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
							></path>
						</svg>
						<h2 class="text-2xl font-bold text-white">{data.username} Repositories</h2>
						<span
							class="rounded-full bg-purple-500/20 px-3 py-1 text-sm font-medium text-purple-300"
						>
							{repos.length} repos
						</span>
					</div>

					<div class="grid gap-4">
						{#each repos as repo}
							<a href="/repos/{data.username}/repo/{repo.name}">
								<div
									class="group rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:border-white/20 hover:bg-white/10"
								>
									<div class="flex items-start justify-between">
										<div class="flex-1">
											<div class="mb-2 flex items-center gap-2">
												<svg class="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
													<path
														fill-rule="evenodd"
														d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span
													class="font-medium text-white transition-colors group-hover:text-purple-300"
												>
													{repo.name}
												</span>
											</div>
											<p class="text-sm text-gray-400">ID: {repo.id}</p>
										</div>
										<div class="opacity-0 transition-opacity group-hover:opacity-100">
											<svg
												class="h-5 w-5 text-gray-400"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M9 5l7 7-7 7"
												></path>
											</svg>
										</div>
									</div>
								</div>
							</a>
						{/each}
					</div>

					{#if repos.length === 0}
						<div class="py-12 text-center">
							<svg
								class="mx-auto mb-4 h-16 w-16 text-gray-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
								></path>
							</svg>
							<h3 class="mb-2 text-lg font-medium text-gray-300">No repositories found</h3>
							<p class="text-gray-500">This user doesn't have any public repositories.</p>
						</div>
					{/if}
				</div>
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

		<!-- Decorative elements -->
		<div
			class="pointer-events-none fixed top-1/4 left-1/4 h-32 w-32 rounded-full bg-purple-500/5 blur-xl"
		></div>
		<div
			class="pointer-events-none fixed right-1/4 bottom-1/4 h-24 w-24 rounded-full bg-pink-500/5 blur-xl"
		></div>
	</div>
</div>
