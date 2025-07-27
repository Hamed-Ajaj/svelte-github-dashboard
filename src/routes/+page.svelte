<script>
	import { goto } from '$app/navigation';
	import toast, { Toaster } from 'svelte-french-toast';
	let username = $state('');

	const handleUserName = () => {
		if (username.trim() && username.length >= 2) {
			goto(`/repos/${username}`);
		} else {
			toast.error('username length should be more than 2');
		}
	};

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			handleUserName();
		}
	};
</script>

<div
	class="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4"
>
	<Toaster containerClassName="" />
	<div class="w-full max-w-md">
		<div class="rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
			<div class="mb-8 text-center">
				<h1 class="mb-2 text-3xl font-bold text-white">GitHub Explorer</h1>
				<p class="text-gray-300">Enter a username to explore repositories</p>
			</div>

			<div class="space-y-4">
				<div class="relative">
					<input
						type="text"
						bind:value={username}
						onkeypress={handleKeyPress}
						placeholder="Enter GitHub username"
						class="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-purple-500 focus:outline-none"
						minlength="2"
					/>
					<div
						class="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
					></div>
				</div>

				<button
					onclick={handleUserName}
					disabled={!username.trim()}
					class="w-full transform rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-purple-700 hover:to-pink-700 hover:shadow-xl active:scale-95 disabled:cursor-not-allowed disabled:from-gray-600 disabled:to-gray-700 disabled:hover:scale-100"
				>
					<span class="flex items-center justify-center gap-2">
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 7l5 5m0 0l-5 5m5-5H6"
							></path>
						</svg>
						Explore Repositories
					</span>
				</button>
			</div>

			<div class="mt-6 text-center">
				<p class="text-sm text-gray-400">Press Enter or click the button to search</p>
			</div>
		</div>

		<!-- Decorative elements -->
		<div class="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-purple-500/10 blur-xl"></div>
		<div class="absolute right-1/4 bottom-1/4 h-24 w-24 rounded-full bg-pink-500/10 blur-xl"></div>
	</div>
</div>
