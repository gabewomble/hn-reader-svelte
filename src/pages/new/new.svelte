<script>
  import ArticleList from '../../components/article-list/article-list.svelte';
  import { NEW_STORIES as url } from '../../lib/constants/urls';
</script>

<ArticleList {url} />