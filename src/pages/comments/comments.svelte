<script>
  import CommentsList from '../../components/comments-list/comments-list.svelte';
  import ArticleDetails, { getUrl } from '../../components/article-details/article-details.svelte';

  export let params = {};
  let data = {};

  $: getUrl(params.id || '')

  $: comments = data.kids || [];
</script>

<style>
  .comments {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    overflow: auto;
    max-height: calc(100vh - 5rem);
    height: 100%;
    width: 100%;
    padding: 2rem;
  }
</style>

<div class="comments">
  <ArticleDetails bind:data />
  <CommentsList id={params.id} />
</div>