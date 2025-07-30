<script>
	let { language, bytes } = $props();
</script>

<div
	class="flex items-center justify-between rounded-lg border border-gray-600/30 bg-white/5 px-4 py-3 backdrop-blur-sm"
>
	<span class="font-medium text-white">{language}</span>
	<span class="text-sm text-gray-300">
		{(bytes / 1024).toFixed(1)}KB
	</span>
</div>
