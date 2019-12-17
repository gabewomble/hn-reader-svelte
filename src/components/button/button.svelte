<script>
  import getStyles from './button.css';

  export let background = '#444'
  export let color = '#FFF';

  const buttonStyles = getStyles({
    background,
    color,
  });
</script>

<button class={buttonStyles} on:click>
  <div>
    <slot />
  </div>
</button>