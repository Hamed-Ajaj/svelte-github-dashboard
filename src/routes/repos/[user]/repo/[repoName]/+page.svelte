<script>
	import { goto } from '$app/navigation';

	let { data } = $props();
	console.log(data);
</script>

<div>
	{#await data.repo}
		loading repo
	{:then repo}
		<h1>{repo.name}</h1>
	{/await}
</div>
