import { configure } from '@storybook/svelte';
import '../public/global.css';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
