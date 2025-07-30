<script>
	let { username, repos } = $props();
</script>

<div class="p-6">
	<div class="mb-6 flex items-center gap-3">
		<svg class="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
			></path>
		</svg>
		<h2 class="text-2xl font-bold text-white">{username} Repositories</h2>
		<span class="rounded-full bg-purple-500/20 px-3 py-1 text-sm font-medium text-purple-300">
			{repos.length} repos
		</span>
	</div>

	<div class="grid gap-4">
		{#each repos as repo}
			<a href="/repos/{username}/repo/{repo.name}">
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
								<span class="font-medium text-white transition-colors group-hover:text-purple-300">
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
</div>
