<script>
	import { Github, Earth } from 'lucide-svelte';
	const handleSubmit = () => {
		goto(`/repos/${username}`);
	};
</script>

<nav
	class="border-b border-purple-500/20 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 p-4 text-white shadow-2xl backdrop-blur-sm"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between">
		<!-- Logo/Brand Section -->
		<a
			href="/"
			class="group flex items-center gap-3 text-xl font-bold transition-all duration-200 hover:scale-105"
		>
			<div
				class="rounded-lg border border-white/20 bg-white/10 p-2 backdrop-blur-sm transition-all duration-200 group-hover:bg-white/20"
			>
				<Github size={28} />
			</div>
			<span class="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
				GitHub Dashboard
			</span>
		</a>

		<div class="flex items-center gap-8">
			<!-- Search Form -->
			<form onsubmit={handleSubmit} class=" hidden items-center md:flex">
				<div
					class="relative flex items-center overflow-hidden rounded-full border border-white/20 bg-white/10 shadow-lg backdrop-blur-sm transition-all duration-200 focus-within:ring-2 focus-within:ring-purple-400 focus-within:ring-offset-2 focus-within:ring-offset-transparent hover:bg-white/15"
				>
					<!-- Search Icon -->
					<div class="pr-2 pl-4">
						<svg
							class="h-5 w-5 text-gray-300"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/>
						</svg>
					</div>

					<!-- Input Field -->
					<input
						type="text"
						name="user"
						placeholder="Enter GitHub username..."
						class="w-64 bg-transparent py-3 pr-2 text-white placeholder-gray-300 focus:placeholder-gray-400 focus:outline-none"
					/>

					<!-- Submit Button -->
					<button
						type="submit"
						class="group m-1 flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2.5 font-semibold text-white transition-all duration-200 hover:scale-105 hover:from-purple-600 hover:to-blue-600 hover:shadow-lg focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent focus:outline-none"
					>
						<span>Search</span>
						<svg
							class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 7l5 5m0 0l-5 5m5-5H6"
							/>
						</svg>
					</button>
				</div>
			</form>
			<a
				href="https://github.com/Hamed-Ajaj"
				target="_blank"
				alt="github page"
				class="rounded-full bg-white/20 p-3 backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white/30"
			>
				<Github size={24} />
			</a>
		</div>
	</div>
</nav>
