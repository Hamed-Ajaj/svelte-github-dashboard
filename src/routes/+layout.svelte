<script>
	import '../app.css';
	import { goto } from '$app/navigation';
	import Navbar from '../components/navbar.svelte';

	let { children } = $props();

	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const user = formData.get('user');
		if (user) {
			goto(`/repos/${user}`);
		}
	}
</script>

<Navbar />
{@render children()}
