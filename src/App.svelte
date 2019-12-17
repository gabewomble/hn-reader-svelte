<script>
	import Nav from './components/nav/nav.svelte';
	import Router from './containers/router/router.svelte';
	import colors from './styles/colors';

	const { concrete } = colors;
</script>

<style>
	main {
		height: 100%;
		width: 100%;
	}
</style>


<main style={`background: ${concrete};`}>
	<Nav />
	<Router />
</main>
