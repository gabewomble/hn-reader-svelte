<script>
  import Fetch from '../fetch/fetch.svelte';
  import Button from '../button/button.svelte';
  import Article from '../article/article.svelte';
  import { colors } from '../../styles';

  export let url;

  let data = [];

  const { pomegranate, greenSea } = colors;

  const size = 25;
  let page = 1;

  $: pageCount = data && data.length
    ? Math.ceil(data.length / size)
    : 1;

  $: paginated = data ? paginate(data, page, size) : [];

  function paginate(arr, p, s) {
    const pageNumber = p - 1;
    return [...arr].slice(pageNumber * s, p * s);
  }

  function incrementPage() {
    page = page + (page < pageCount);
  }

  function decrementPage() {
    page = page - 1 || page;
  }
</script>

<style>
  .list {
    display: flex;
    flex-direction: column;
    height: 100%;
    max-height: 100%;
    overflow: auto;
    padding: 1rem;
    width: 100%;
  }

  .buttons {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin: 1rem auto;
    padding-bottom: 1rem;
  }
</style>

<Fetch {url} bind:data>
  <div slot="data-loaded" class="list">
    {#each paginated as articleId, index}
      <Article {articleId} />
    {/each}
    <div class="buttons">
      <Button on:click={decrementPage}>
        Previous Page
      </Button>
      <Button on:click={incrementPage}>
        Next Page
      </Button>
    </div>
  </div>
  <div slot="loader" class="list">
    {#each Array.from(Array(size).keys()) as _, index}
      <Article />
    {/each}
  </div>
</Fetch>