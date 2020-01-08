<script context="module">
  import colors from '../../styles/colors';
  import Fetch from '../../components/fetch/fetch.svelte';
  import { GET_ITEM_URL } from '../../lib/constants/urls';

  let data;
  let url;
  let pid;

  export function getUrl(id) {
    url = GET_ITEM_URL(id);
  }

  export async function preload(articleId) {
    if (articleId) {
      pid = articleId;
      url = GET_ITEM_URL(articleId);
      const res = await fetch(url);

      data = await res.json();
    }
  }
</script>

<style>
  .frame {
    background: #FFF;
    border: 1px solid var(--clouds);
    border-radius: 0.25rem;
    padding: 1rem;
    height: 8rem;
    width: 100%;
  }
</style>

<Fetch {url} preload={data && pid === data.id} bind:data>
  <div style={`--clouds: ${colors.clouds};`} class="frame details" slot="data-loaded">{data.title}</div>
  <div style={`--clouds: ${colors.clouds};`} class="frame loader" slot="loader">Loading Article...</div>
</Fetch>