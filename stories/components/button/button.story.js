import { action } from '@storybook/addon-actions';
import Component from './button.svelte';

export const Button = () => ({
  Component,
  props: { text: 'Hello Button' },
  on: { click: action('clicked') },
});
