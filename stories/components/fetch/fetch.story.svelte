<script>
  import Fetch from '../../../src/components/fetch/fetch.svelte';
  import Button from '../../../src/components/button/button.svelte';
  const urlBase = 'https://swapi.co/api/people';

  let urlIndex = 1;

  $: url = `${urlBase}/${urlIndex}`;

  function handleClick() {
    urlIndex = Math.ceil(Math.random() * 30) || 1;
  }
</script>

<style>
  .card {
    align-items: center;
    background: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 300px;
  }

  .row {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 10px;
    width: 100%;
  }
</style>

<div class="card">
  <Fetch {url} let:data>
    <div slot="data-loaded">
      <div class="row">Name: {data.name}</div>
      <div class="row">
        <Fetch url={data.homeworld} let:data>
          <div slot="data-loaded">Homeworld: {data.name}</div>
        </Fetch>
      </div>
      <div class="row">
        <Button on:click={handleClick}>New Character</Button>
      </div>
    </div>
  </Fetch>
</div>