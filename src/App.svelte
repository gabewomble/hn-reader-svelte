<script>
	import Nav from './components/nav/nav.svelte';
	import Router from './containers/router/router.svelte';
	import colors from './styles/colors';

	const { clouds } = colors;
</script>

<style>
	main {
		display: flex;
		flex-direction: column;
		flex: 1;
		height: 100vh;
		width: 100vw;
	}

	section {
		align-items: center;
		display: flex;
		justify-content: center;
		overflow: hidden;
		height: calc(100vh - 5rem);
		width: 100%;
	}
</style>


<main style={`background: ${clouds};`}>
	<Nav />
	<section>
		<Router />
	</section>
</main>
