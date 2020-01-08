import Best from '../pages/best/best.svelte';
import Comments from '../pages/comments/comments.svelte';
import New from '../pages/new/new.svelte';
import Top from '../pages/top/top.svelte';

export const routes = {
  '/': Best,
  '/best': Best,
  '/top': Top,
  '/new': New,
  '/best/:id': Comments,
  '/top/:id': Comments,
  '/new/:id': Comments,
};
