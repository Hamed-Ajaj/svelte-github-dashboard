<script>
	let { stateCount, icon, name } = $props();
</script>

<div
	class="rounded-lg border border-gray-700/50 bg-white/5 p-6 text-center shadow-lg backdrop-blur-sm"
>
	<div class="mb-1 text-2xl font-bold text-yellow-400">{icon}</div>
	<div class="text-2xl font-bold text-white">
		{stateCount}
	</div>
	<div class="text-sm text-gray-400">{name}</div>
</div>
