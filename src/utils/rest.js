import {DEFAULT_URL} from '../config';

export const getNews = async ({
  keyword = 'Solar system',
  pageSize = 10,
  currentPage = 1,
  id = null,
}) => {
  let queryParams = '';
  console.log(currentPage);
  if (!id) {
    queryParams =
      'search?' +
      new URLSearchParams({
        q: keyword,
        page: currentPage,
        'page-size': pageSize,
        'order-by': 'newest',
        'api-key': 'test',
        'show-fields': 'headline,thumbnail',
      }).toString();
  } else {
    queryParams =
      id +
      '?' +
      new URLSearchParams({
        'api-key': 'test',
        'show-fields': 'all',
      }).toString();
  }

  try {
    const res = await fetch(`${DEFAULT_URL}${queryParams}`);
    if (!res.ok) {
      return {done: false};
    }

    const data = await res.json();
    return {done: true, data};
  } catch (error) {
    return {done: false};
  }
};
