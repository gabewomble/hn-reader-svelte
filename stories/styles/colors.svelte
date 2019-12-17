<script>
  import colors from '../../src/styles/colors';

  const colorNames = Object.keys(colors);
</script>

<style>
  :global(html),
  :global(#root),
  :global(.sb-show-main) {
    height: 100%;
    background: #444;
  }

  .color-grid {
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    height: 100%;
    width: 100%;
  }

  .color-item {
    align-items: center;
    border: 0.5px solid black;
    border-radius: 0.25rem;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  .color-name {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 0.75rem;
    padding: 0.25rem;
  }
</style>

<div class="color-grid">
  {#each colorNames as color}
    <div class="color-item" style={`background: ${colors[color]};`}>
      <div class="color-name">
        {color}: {colors[color]}
      </div>
    </div>
  {/each}
</div>