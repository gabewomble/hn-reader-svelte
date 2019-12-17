<script>
  import Colors from '../../../src/styles/colors';
  import Button from '../../../src/components/button/button.svelte';

  const colorNames = Object.keys(Colors);

  export let text = '';
</script>

<style>
  :global(#root) {
    background: #444;
    height: 100%;
    padding: 1rem;
  }

  div {
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: repeat(5, 1fr);
    height: 100%;
    width: 100%;
  }
</style>

<div>
  {#each colorNames as color}
    <Button on:click background={Colors[color]}>
      {text}
    </Button>
  {/each}
</div>