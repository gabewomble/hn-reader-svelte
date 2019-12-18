<script>
  export let url;
  export let data;

  $: getData(url);

  async function getData() {
    data = null;

    if (url) {
      const res = await fetch(url);
      data = await res.json();
    }
  }
</script>


{#if data !== null}
  <slot name="data-loaded" {data} />
  {:else}
  <slot name="loader">Loading...</slot>
{/if}