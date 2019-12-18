<script>
  import ArticleList from '../../components/article-list/article-list.svelte';
  import { TOP_STORIES as url } from '../../lib/constants/urls';
</script>

<ArticleList {url} />