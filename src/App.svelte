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
		height: 100%;
		width: 100%;
	}

	section {
		align-items: center;
		display: flex;
		justify-content: center;
		overflow: hidden;
		width: 100%;
	}
</style>


<main style={`background: ${clouds};`}>
	<Nav />
	<section>
		<Router />
	</section>
</main>
