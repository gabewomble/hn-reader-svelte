<script>
  import { link } from 'svelte-spa-router';
  import getStyles from './nav.css';

  const nav = getStyles();
</script>

<nav class={nav}>
  <h2>HN Reader</h2>
  <div class="link-container">
    <a href="/top" use:link>Top</a>
    <a href="/new" use:link>New</a>
    <a href="/best" use:link>Best</a>
  </div>
</nav>