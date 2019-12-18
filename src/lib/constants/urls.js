export const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

export const GET_ITEM_URL = id => `${BASE_URL}/item/${id}.json?print=pretty`

export const ASK_STORIES = `${BASE_URL}/askstories.json?print=pretty`;
export const BEST_STORIES = `${BASE_URL}/beststories.json?print=pretty`;
export const JOB_STORIES = `${BASE_URL}/jobstories.json?print=pretty`;
export const NEW_STORIES = `${BASE_URL}/newstories.json?print=pretty`;
export const SHOW_STORIES = `${BASE_URL}/showstories.json?print=pretty`;
export const TOP_STORIES = `${BASE_URL}/topstories.json?print=pretty`;
