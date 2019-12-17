<script>
  import getStyles from './text-input.css';

  export let value = '';
  export let placeholder = '';
  export let width = '100%';

  const inputStyles = getStyles({
    width,
  });
</script>

<input
  class={inputStyles}
  type="text"
  value={value}
  placeholder={placeholder}
  on:change|preventDefault
/>