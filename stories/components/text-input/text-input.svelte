<script>
  import TextInput from '../../../src/components/text-input/text-input.svelte';

  let value = '';

  const placeholder = 'Type Something';

  function onChange(e) {
    value = e.target.value;
  }
</script>

<TextInput
  on:change={onChange}
  value={value}
  placeholder={placeholder}
  width="10rem"
/>
