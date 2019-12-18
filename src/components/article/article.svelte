<script>
  import Fetch from '../fetch/fetch.svelte';
  import { GET_ITEM_URL } from '../../lib/constants/urls';

  export let articleId;

  let data;
  
  $: url = articleId ? GET_ITEM_URL(articleId) : null;
</script>

<style>
  .frame {
    align-items: center;
    background: white;
    border-radius: 0.25rem;
    color: #444;
    display: flex;
    flex-shrink: 0;
    height: 4rem;
    margin: 0.1rem 0 ;
    padding: 0.5rem 1rem;
    width: 100%;
  }

  .loader {
    min-width: 100%;
  }

  .score {
    background: #16A085;
    border-radius: 0.25rem;
    color: #FFF;
    margin-right: 1rem;
    padding: 0.25rem;
    text-align: center;
    width: 3rem;
  }

  .info {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
  }

  .details {
    color: #555;
    display: flex;
    font-size: 0.75rem;
    line-height: 1rem;
  }

  .title {
    color: #333;
  }

  .author {
    margin-right: 0.5rem;
  }

  .loader .title {
    background: linear-gradient(135deg, rgba(175,175,175,1) 0%, rgba(89,88,88,1) 100%);
    height: 1rem;
    width: 50%;
  }

  .loader .comments,
  .loader .author {
    background: linear-gradient(135deg, rgba(175,175,175,1) 0%, rgba(89,88,88,1) 100%);
    height: 1rem;
    width: 5rem;
  }
</style>

<Fetch {url} bind:data>
  <div class="article frame" slot="data-loaded">
    <div class="score">
      {data.score}
    </div>
    <div class="info">
      {#if data.url}
        <a href={data.url} class="title">{data.title}</a>
        {:else}
        <div class="title">{data.title}</div>
      {/if}
      <div class="details">
        <div class="author">By: {data.by}</div>
        <div class="comments">Comments: {data.descendants || 0}</div>
      </div>
    </div>
  </div>
  <div class="loader frame" slot="loader">
    <div class="score">...</div>
    <div class="info">
      <div class="title" />
      <div class="details">
        <div class="author" />
        <div class="comments" />
      </div>
    </div>
  </div>
</Fetch>