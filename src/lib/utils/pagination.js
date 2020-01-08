/**
 * @fileoverview Pagination Utils
 * @author Gabriel Womble
 */

export function paginate(arr, p, s) {
  const pageNumber = p - 1;
  return [...arr].slice(pageNumber * s, p * s);
}

export function incrementPage(page, pageCount) {
  return page + (page < pageCount);
}

export function decrementPage(page) {
  return page - 1 || page;
}