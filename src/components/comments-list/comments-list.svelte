<script>
  import Fetch from '../fetch/fetch.svelte';
  import Article from '../article/article.svelte';
  import { paginate, incrementPage, decrementPage } from '../../lib/utils/pagination';
  import { GET_ITEM_URL } from '../../lib/constants/urls';
  import { colors } from '../../styles';

  export let id;
  export let comments;

  let data = [];

  const size = 25;
  let page = 1;

  async function getCommentIDs(cmts, pid) {
    if (!cmts && pid) {
      const res = await fetch(GET_ITEM_URL(pid));
      comments = await res.json();
    }
  }

  $: getCommentIDs(comments, id);

  $: pageCount = comments && comments.length
    ? Math.ceil(comments.length / size)
    : 1;

  $: paginated = data ? paginate(data, page, size) : [];
</script>

<style>
  .comment-list {
    background: white;
    border: 1px solid #ECF0F1;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
  }
</style>

<div class="comment-list">
  {#if comments}
    {#each comments as comment}
      <Fetch url={GET_ITEM_URL(comment)} let:data>
        <div slot="data-loaded"></div>
        <div slot="loader">Loading comment...</div>
      </Fetch>
    {/each}
  {/if}
</div>